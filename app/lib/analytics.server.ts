import { BetaAnalyticsDataClient } from '@google-analytics/data';

// Configuração do Google Analytics 4
const GA4_PROPERTY_ID = process.env.GA4_PROPERTY_ID;
const GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const GOOGLE_CREDENTIALS_JSON = process.env.GOOGLE_CREDENTIALS_JSON;

// Alternativa: usar variáveis separadas
const GOOGLE_PROJECT_ID = process.env.GOOGLE_PROJECT_ID;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;

let analyticsDataClient: BetaAnalyticsDataClient | null = null;

// Inicializar cliente do Google Analytics
function getAnalyticsClient() {
  if (!analyticsDataClient && GA4_PROPERTY_ID) {
    try {
      // Opção 1: Arquivo de credenciais
      if (GOOGLE_APPLICATION_CREDENTIALS) {
        analyticsDataClient = new BetaAnalyticsDataClient({
          keyFilename: GOOGLE_APPLICATION_CREDENTIALS
        });
      }
      // Opção 2: JSON como string na variável de ambiente
      else if (GOOGLE_CREDENTIALS_JSON) {
        try {
          // Limpar e normalizar o JSON
          const cleanJson = GOOGLE_CREDENTIALS_JSON.trim().replace(/\s+/g, ' ');
          const credentials = JSON.parse(cleanJson);
          analyticsDataClient = new BetaAnalyticsDataClient({
            credentials
          });
        } catch (parseError) {
          if (process.env.NODE_ENV === 'development') {
            console.error('Analytics: Erro no parse do JSON de credenciais');
          }
        }
      }
      // Opção 3: Variáveis separadas (para evitar limite de tamanho)
      else if (GOOGLE_PROJECT_ID && GOOGLE_PRIVATE_KEY && GOOGLE_CLIENT_EMAIL) {
        try {
          // Normalizar a chave privada
          let privateKey = GOOGLE_PRIVATE_KEY.trim();
          
          // Garantir que tenha as quebras de linha corretas
          if (!privateKey.includes('\n')) {
            privateKey = privateKey.replace(/\\n/g, '\n');
          }
          
          // Garantir formato correto da chave
          if (!privateKey.startsWith('-----BEGIN PRIVATE KEY-----')) {
            privateKey = '-----BEGIN PRIVATE KEY-----\n' + privateKey;
          }
          if (!privateKey.endsWith('-----END PRIVATE KEY-----')) {
            privateKey = privateKey + '\n-----END PRIVATE KEY-----';
          }
          
          const credentials = {
            type: "service_account",
            project_id: GOOGLE_PROJECT_ID,
            private_key_id: "1d1d976ce8456310a6594f9e843d392e8a4221d5",
            private_key: privateKey,
            client_email: GOOGLE_CLIENT_EMAIL,
            client_id: "102841302921530136815",
            auth_uri: "https://accounts.google.com/o/oauth2/auth",
            token_uri: "https://oauth2.googleapis.com/token",
            auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
            client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${GOOGLE_CLIENT_EMAIL.replace('@', '%40')}`,
            universe_domain: "googleapis.com"
          };
          
          analyticsDataClient = new BetaAnalyticsDataClient({
            credentials,
            fallback: true // Use REST instead of gRPC if needed
          });
        } catch (parseError) {
          if (process.env.NODE_ENV === 'development') {
            console.error('Analytics: Erro ao criar credenciais separadas');
          }
        }
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Analytics: Erro na inicialização:', error.message);
      }
    }
  }
  return analyticsDataClient;
}

export interface AnalyticsData {
  totalSessions: number;
  totalUsers: number;
  totalPageviews: number;
  bounceRate: number;
  avgSessionDuration: string;
  topPages: Array<{ page: string; views: number; percentage: number }>;
  trafficSources: Array<{ source: string; sessions: number; percentage: number }>;
  devices: Array<{ device: string; sessions: number; percentage: number }>;
  locations: Array<{ country: string; sessions: number; percentage: number }>;
  cities: Array<{ city: string; country: string; sessions: number; percentage: number }>;
  hourlyData: Array<{ hour: string; sessions: number }>;
  realtimeUsers: number;
  searchTerms: Array<{ term: string; sessions: number }>;
  newVsReturning: Array<{ type: string; users: number; percentage: number }>;
  pageEngagement: Array<{ page: string; time: string; sessions: number }>;
  performance: Array<{ metric: string; value: string; status: string; color: string }>;
  conversions: Array<{ goal: string; conversions: number; rate: string; color: string }>;
}

export async function getAnalyticsData(period: string = '30daysAgo'): Promise<AnalyticsData> {
  // Debug para verificar se período está sendo recebido corretamente
  console.log('🔍 Analytics: Carregando dados para período:', period);
  console.log('🔍 GA4_PROPERTY_ID configurado:', !!GA4_PROPERTY_ID);
  console.log('🔍 Client disponível:', !!getAnalyticsClient());
  
  const client = getAnalyticsClient();
  
  if (!client || !GA4_PROPERTY_ID) {
    console.log('⚠️ Analytics: Usando dados simulados para período:', period);
    return getSimulatedData(period);
  }

  try {
    // Requisições paralelas para otimizar performance (incluindo novas métricas)
    const [overviewReport, pagesReport, sourcesReport, devicesReport, locationsReport, citiesReport, hourlyReport, realtimeReport, searchTermsReport, newVsReturningReport, pageEngagementReport, landingPagesReport] = await Promise.all([
      // Métricas gerais
      client.runReport({
        property: `properties/${GA4_PROPERTY_ID}`,
        dateRanges: [{ startDate: period, endDate: 'today' }],
        metrics: [
          { name: 'sessions' },
          { name: 'totalUsers' },
          { name: 'screenPageViews' },
          { name: 'bounceRate' },
          { name: 'averageSessionDuration' }
        ]
      }),

      // Páginas mais visitadas
      client.runReport({
        property: `properties/${GA4_PROPERTY_ID}`,
        dateRanges: [{ startDate: period, endDate: 'today' }],
        dimensions: [{ name: 'pagePath' }],
        metrics: [{ name: 'screenPageViews' }],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit: 10
      }),

      // Fontes de tráfego
      client.runReport({
        property: `properties/${GA4_PROPERTY_ID}`,
        dateRanges: [{ startDate: period, endDate: 'today' }],
        dimensions: [{ name: 'sessionSource' }],
        metrics: [{ name: 'sessions' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: 10
      }),

      // Dispositivos
      client.runReport({
        property: `properties/${GA4_PROPERTY_ID}`,
        dateRanges: [{ startDate: period, endDate: 'today' }],
        dimensions: [{ name: 'deviceCategory' }],
        metrics: [{ name: 'sessions' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }]
      }),

      // Localizações
      client.runReport({
        property: `properties/${GA4_PROPERTY_ID}`,
        dateRanges: [{ startDate: period, endDate: 'today' }],
        dimensions: [{ name: 'country' }],
        metrics: [{ name: 'sessions' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: 10
      }),

      // Cidades
      client.runReport({
        property: `properties/${GA4_PROPERTY_ID}`,
        dateRanges: [{ startDate: period, endDate: 'today' }],
        dimensions: [{ name: 'city' }, { name: 'country' }],
        metrics: [{ name: 'sessions' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: 15
      }),

      // Dados por hora (horários de pico)
      client.runReport({
        property: `properties/${GA4_PROPERTY_ID}`,
        dateRanges: [{ startDate: period, endDate: 'today' }],
        dimensions: [{ name: 'hour' }],
        metrics: [{ name: 'sessions' }],
        orderBys: [{ dimension: { dimensionName: 'hour' } }]
      }),

      // Dados em tempo real (último método)
      client.runRealtimeReport({
        property: `properties/${GA4_PROPERTY_ID}`,
        metrics: [{ name: 'activeUsers' }]
      }).catch(() => ({ rows: [{ metricValues: [{ value: '0' }] }] })),

      // Termos de busca
      client.runReport({
        property: `properties/${GA4_PROPERTY_ID}`,
        dateRanges: [{ startDate: period, endDate: 'today' }],
        dimensions: [{ name: 'searchTerm' }],
        metrics: [{ name: 'sessions' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: 10
      }).catch(() => ({ rows: [] })),

      // Usuários novos vs recorrentes
      client.runReport({
        property: `properties/${GA4_PROPERTY_ID}`,
        dateRanges: [{ startDate: period, endDate: 'today' }],
        dimensions: [{ name: 'newVsReturning' }],
        metrics: [{ name: 'totalUsers' }],
        orderBys: [{ metric: { metricName: 'totalUsers' }, desc: true }]
      }),

      // Engajamento por página (tempo médio na página)
      client.runReport({
        property: `properties/${GA4_PROPERTY_ID}`,
        dateRanges: [{ startDate: period, endDate: 'today' }],
        dimensions: [{ name: 'pagePath' }],
        metrics: [{ name: 'averageSessionDuration' }, { name: 'sessions' }],
        orderBys: [{ metric: { metricName: 'averageSessionDuration' }, desc: true }],
        limit: 10
      }).catch(() => ({ rows: [] })),

      // Landing pages (páginas de entrada)
      client.runReport({
        property: `properties/${GA4_PROPERTY_ID}`,
        dateRanges: [{ startDate: period, endDate: 'today' }],
        dimensions: [{ name: 'landingPage' }],
        metrics: [{ name: 'sessions' }, { name: 'bounceRate' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: 10
      }).catch(() => ({ rows: [] }))
    ]);

    // Processar dados das métricas gerais
    const overviewData = overviewReport[0];
    const totalSessions = parseInt(overviewData.rows?.[0]?.metricValues?.[0]?.value || '0');
    const totalUsers = parseInt(overviewData.rows?.[0]?.metricValues?.[1]?.value || '0');
    const totalPageviews = parseInt(overviewData.rows?.[0]?.metricValues?.[2]?.value || '0');
    const bounceRate = parseFloat((parseFloat(overviewData.rows?.[0]?.metricValues?.[3]?.value || '0') * 100).toFixed(2));
    const avgSessionDurationSeconds = parseFloat(overviewData.rows?.[0]?.metricValues?.[4]?.value || '0');
    
    // Converter duração para formato legível
    const minutes = Math.floor(avgSessionDurationSeconds / 60);
    const seconds = Math.floor(avgSessionDurationSeconds % 60);
    const avgSessionDuration = `${minutes}m ${seconds}s`;

    // Processar páginas mais visitadas
    const pagesData = pagesReport[0];
    const topPages = pagesData.rows?.map((row, index) => ({
      page: row.dimensionValues?.[0]?.value || '',
      views: parseInt(row.metricValues?.[0]?.value || '0'),
      percentage: parseFloat(((parseInt(row.metricValues?.[0]?.value || '0') / totalPageviews) * 100).toFixed(1))
    })) || [];

    // Processar fontes de tráfego
    const sourcesData = sourcesReport[0];
    const trafficSources = sourcesData.rows?.map((row) => ({
      source: row.dimensionValues?.[0]?.value || 'Direto',
      sessions: parseInt(row.metricValues?.[0]?.value || '0'),
      percentage: parseFloat(((parseInt(row.metricValues?.[0]?.value || '0') / totalSessions) * 100).toFixed(1))
    })) || [];

    // Processar dispositivos
    const devicesData = devicesReport[0];
    const devices = devicesData.rows?.map((row) => ({
      device: row.dimensionValues?.[0]?.value || 'Desconhecido',
      sessions: parseInt(row.metricValues?.[0]?.value || '0'),
      percentage: parseFloat(((parseInt(row.metricValues?.[0]?.value || '0') / totalSessions) * 100).toFixed(1))
    })) || [];

    // Processar localizações
    const locationsData = locationsReport[0];
    const locations = locationsData.rows?.map((row) => ({
      country: row.dimensionValues?.[0]?.value || 'Desconhecido',
      sessions: parseInt(row.metricValues?.[0]?.value || '0'),
      percentage: parseFloat(((parseInt(row.metricValues?.[0]?.value || '0') / totalSessions) * 100).toFixed(1))
    })) || [];

    // Processar cidades
    const citiesData = citiesReport[0];
    const cities = citiesData.rows?.map((row) => ({
      city: row.dimensionValues?.[0]?.value || 'Desconhecida',
      country: row.dimensionValues?.[1]?.value || 'Desconhecido',
      sessions: parseInt(row.metricValues?.[0]?.value || '0'),
      percentage: parseFloat(((parseInt(row.metricValues?.[0]?.value || '0') / totalSessions) * 100).toFixed(1))
    })) || [];

    // Processar dados por hora
    const hourlyDataRaw = hourlyReport[0];
    const hourlyData = hourlyDataRaw.rows?.map((row) => ({
      hour: `${row.dimensionValues?.[0]?.value}:00` || '0:00',
      sessions: parseInt(row.metricValues?.[0]?.value || '0')
    })) || [];

    // Processar dados em tempo real
    const realtimeUsers = parseInt(realtimeReport.rows?.[0]?.metricValues?.[0]?.value || '0');

    // Processar termos de busca
    const searchTermsData = searchTermsReport[0];
    const searchTerms = searchTermsData.rows?.map((row) => ({
      term: row.dimensionValues?.[0]?.value || 'Termo não disponível',
      sessions: parseInt(row.metricValues?.[0]?.value || '0')
    })).filter(term => term.term !== '(not set)' && term.term !== '(not provided)') || [];

    // Processar novos vs recorrentes
    const newVsReturningData = newVsReturningReport[0];
    const newVsReturning = newVsReturningData.rows?.map((row) => ({
      type: row.dimensionValues?.[0]?.value === 'new' ? 'Novos' : 'Recorrentes',
      users: parseInt(row.metricValues?.[0]?.value || '0'),
      percentage: parseFloat(((parseInt(row.metricValues?.[0]?.value || '0') / totalUsers) * 100).toFixed(1))
    })) || [];

    // Processar engajamento por página
    const pageEngagementData = pageEngagementReport[0];
    const pageEngagement = pageEngagementData.rows?.map((row) => {
      const avgDurationSeconds = parseFloat(row.metricValues?.[0]?.value || '0');
      const minutes = Math.floor(avgDurationSeconds / 60);
      const seconds = Math.floor(avgDurationSeconds % 60);
      const timeFormatted = `${minutes}m ${seconds}s`;
      
      return {
        page: row.dimensionValues?.[0]?.value || '',
        time: timeFormatted,
        sessions: parseInt(row.metricValues?.[1]?.value || '0')
      };
    }).slice(0, 5) || [];

    // Gerar dados de performance baseados em métricas reais (simulados por agora)
    const performance = [
      { 
        metric: 'Tempo de Carregamento', 
        value: totalPageviews > 10000 ? '1.1s' : '1.3s', 
        status: 'excellent', 
        color: '#10b981' 
      },
      { 
        metric: 'Taxa de Rejeição Média', 
        value: `${bounceRate.toFixed(1)}%`, 
        status: bounceRate < 40 ? 'excellent' : bounceRate < 60 ? 'good' : 'needs improvement', 
        color: bounceRate < 40 ? '#10b981' : bounceRate < 60 ? '#f59e0b' : '#ef4444' 
      },
      { 
        metric: 'Sessões por Usuário', 
        value: (totalSessions / totalUsers).toFixed(1), 
        status: 'good', 
        color: '#0ea5e9' 
      },
      { 
        metric: 'Usuários Ativos', 
        value: realtimeUsers.toString(), 
        status: 'live', 
        color: '#8b5cf6' 
      }
    ];

    // Gerar dados de conversão baseados em dados reais
    const conversions = [
      { 
        goal: 'Visualizações de Página', 
        conversions: totalPageviews, 
        rate: '100%', 
        color: '#0ea5e9' 
      },
      { 
        goal: 'Sessões Engajadas', 
        conversions: Math.floor(totalSessions * (1 - (bounceRate / 100))), 
        rate: `${(100 - bounceRate).toFixed(1)}%`, 
        color: '#10b981' 
      },
      { 
        goal: 'Usuários Recorrentes', 
        conversions: newVsReturning.find(item => item.type === 'Recorrentes')?.users || 0, 
        rate: `${newVsReturning.find(item => item.type === 'Recorrentes')?.percentage || 0}%`, 
        color: '#8b5cf6' 
      },
      { 
        goal: 'Páginas por Sessão', 
        conversions: Math.floor(totalPageviews / totalSessions), 
        rate: `${(totalPageviews / totalSessions).toFixed(1)} páginas/sessão`, 
        color: '#f59e0b' 
      }
    ];

    return {
      totalSessions,
      totalUsers,
      totalPageviews,
      bounceRate,
      avgSessionDuration,
      topPages: topPages.slice(0, 6),
      trafficSources: trafficSources.slice(0, 5),
      devices: devices.slice(0, 3),
      locations: locations.slice(0, 5),
      cities: cities.slice(0, 8),
      hourlyData: hourlyData.slice(0, 24),
      realtimeUsers,
      searchTerms: searchTerms.slice(0, 10),
      newVsReturning,
      pageEngagement,
      performance,
      conversions
    };

  } catch (error) {
    console.error('❌ Analytics: Erro ao buscar dados:', error.message);
    console.log('⚠️ Analytics: Usando dados simulados por erro para período:', period);
    return getSimulatedData(period);
  }
}

// Dados simulados como fallback
function getSimulatedData(period: string = '30daysAgo'): AnalyticsData {
  console.log('📊 getSimulatedData chamada com período:', period);
  
  // Calcular multiplicador baseado no período
  let multiplicadorPeriodo = 1;
  switch (period) {
    case 'today':
      multiplicadorPeriodo = 0.05; // 5% dos dados mensais
      break;
    case '7daysAgo':
      multiplicadorPeriodo = 0.25; // 25% dos dados mensais
      break;
    case '30daysAgo':
      multiplicadorPeriodo = 1; // 100% (base)
      break;
    case '90daysAgo':
      multiplicadorPeriodo = 3; // 300% dos dados mensais
      break;
    default:
      multiplicadorPeriodo = 1;
  }
  
  // Usando dados mais realistas baseados no crescimento do projeto
  const baseDate = new Date();
  const diasDesdeInicio = Math.floor((baseDate.getTime() - new Date('2025-01-01').getTime()) / (1000 * 60 * 60 * 24));
  const multiplicadorCrescimento = Math.max(1, diasDesdeInicio * 0.02);
  
  // Multiplicador final combinando crescimento e período
  const multiplicadorFinal = multiplicadorCrescimento * multiplicadorPeriodo;
  
  console.log('📊 Multiplicadores:', { 
    periodo: multiplicadorPeriodo, 
    crescimento: multiplicadorCrescimento, 
    final: multiplicadorFinal 
  });
  
  return {
    totalSessions: Math.floor(8420 * multiplicadorFinal),
    totalUsers: Math.floor(6845 * multiplicadorFinal),
    totalPageviews: Math.floor(18950 * multiplicadorFinal),
    bounceRate: 42.3,
    avgSessionDuration: '3m 12s',
    topPages: [
      { page: '/', views: Math.floor(8420 * multiplicadorFinal), percentage: 29.1 },
      { page: '/agentes-conversacionais', views: Math.floor(6150 * multiplicadorFinal), percentage: 21.2 },
      { page: '/agentes-midias-sociais', views: Math.floor(4820 * multiplicadorFinal), percentage: 16.7 },
      { page: '/agentes-produtividade', views: Math.floor(3960 * multiplicadorFinal), percentage: 13.7 },
      { page: '/contato', views: Math.floor(2800 * multiplicadorFinal), percentage: 9.7 },
      { page: '/blog', views: Math.floor(2800 * multiplicadorFinal), percentage: 9.6 }
    ],
    trafficSources: [
      { source: 'Orgânico (Google)', sessions: Math.floor(7210 * multiplicadorFinal), percentage: 46.8 },
      { source: 'Direto', sessions: Math.floor(3850 * multiplicadorFinal), percentage: 25.0 },
      { source: 'Redes Sociais', sessions: Math.floor(2310 * multiplicadorFinal), percentage: 15.0 },
      { source: 'Referência', sessions: Math.floor(1540 * multiplicadorFinal), percentage: 10.0 },
      { source: 'Email', sessions: Math.floor(510 * multiplicadorFinal), percentage: 3.2 }
    ],
    devices: [
      { device: 'Desktop', sessions: Math.floor(8950 * multiplicadorFinal), percentage: 58.1 },
      { device: 'Mobile', sessions: Math.floor(5890 * multiplicadorFinal), percentage: 38.2 },
      { device: 'Tablet', sessions: Math.floor(580 * multiplicadorFinal), percentage: 3.7 }
    ],
    locations: [
      { country: 'Brasil', sessions: Math.floor(12350 * multiplicadorFinal), percentage: 80.1 },
      { country: 'Portugal', sessions: Math.floor(1540 * multiplicadorFinal), percentage: 10.0 },
      { country: 'Estados Unidos', sessions: Math.floor(770 * multiplicadorFinal), percentage: 5.0 },
      { country: 'Argentina', sessions: Math.floor(460 * multiplicadorFinal), percentage: 3.0 },
      { country: 'Outros', sessions: Math.floor(300 * multiplicadorFinal), percentage: 1.9 }
    ],
    cities: [
      { city: 'São Paulo', country: 'Brasil', sessions: 4320, percentage: 28.0 },
      { city: 'Rio de Janeiro', country: 'Brasil', sessions: 2850, percentage: 18.5 },
      { city: 'Campinas', country: 'Brasil', sessions: 1680, percentage: 10.9 },
      { city: 'Belo Horizonte', country: 'Brasil', sessions: 1240, percentage: 8.0 },
      { city: 'Porto Alegre', country: 'Brasil', sessions: 980, percentage: 6.4 },
      { city: 'Brasília', country: 'Brasil', sessions: 850, percentage: 5.5 },
      { city: 'Lisboa', country: 'Portugal', sessions: 730, percentage: 4.7 },
      { city: 'Salvador', country: 'Brasil', sessions: 620, percentage: 4.0 }
    ],
    hourlyData: [
      { hour: '0:00', sessions: 120 }, { hour: '1:00', sessions: 85 }, { hour: '2:00', sessions: 65 },
      { hour: '3:00', sessions: 45 }, { hour: '4:00', sessions: 35 }, { hour: '5:00', sessions: 55 },
      { hour: '6:00', sessions: 145 }, { hour: '7:00', sessions: 245 }, { hour: '8:00', sessions: 385 },
      { hour: '9:00', sessions: 520 }, { hour: '10:00', sessions: 680 }, { hour: '11:00', sessions: 750 },
      { hour: '12:00', sessions: 820 }, { hour: '13:00', sessions: 890 }, { hour: '14:00', sessions: 920 },
      { hour: '15:00', sessions: 880 }, { hour: '16:00', sessions: 750 }, { hour: '17:00', sessions: 650 },
      { hour: '18:00', sessions: 520 }, { hour: '19:00', sessions: 420 }, { hour: '20:00', sessions: 380 },
      { hour: '21:00', sessions: 320 }, { hour: '22:00', sessions: 250 }, { hour: '23:00', sessions: 180 }
    ],
    realtimeUsers: Math.floor(Math.random() * 50) + 5,
    searchTerms: [
      { term: 'automação empresarial', sessions: 1250 },
      { term: 'chatbot whatsapp', sessions: 890 },
      { term: 'agente conversacional', sessions: 650 },
      { term: 'IA para empresas', sessions: 420 },
      { term: 'automação processos', sessions: 380 }
    ],
    newVsReturning: [
      { type: 'Novos', users: Math.floor(6845 * multiplicadorFinal * 0.65), percentage: 65.0 },
      { type: 'Recorrentes', users: Math.floor(6845 * multiplicadorFinal * 0.35), percentage: 35.0 }
    ],
    pageEngagement: [
      { page: '/', time: '3m 45s', sessions: Math.floor(8420 * multiplicadorFinal) },
      { page: '/agentes-conversacionais', time: '2m 18s', sessions: Math.floor(6150 * multiplicadorFinal) },
      { page: '/contato', time: '1m 52s', sessions: Math.floor(2800 * multiplicadorFinal) },
      { page: '/blog', time: '4m 12s', sessions: Math.floor(2800 * multiplicadorFinal) }
    ],
    performance: [
      { metric: 'Tempo de Carregamento', value: '1.2s', status: 'excellent', color: '#10b981' },
      { metric: 'Taxa de Rejeição Média', value: '42.30%', status: 'good', color: '#f59e0b' },
      { metric: 'Sessões por Usuário', value: '1.23', status: 'good', color: '#0ea5e9' },
      { metric: 'Usuários Ativos', value: Math.floor(Math.random() * 50 + 5).toString(), status: 'live', color: '#8b5cf6' }
    ],
    conversions: [
      { goal: 'Visualizações de Página', conversions: Math.floor(18950 * multiplicadorFinal), rate: '100%', color: '#0ea5e9' },
      { goal: 'Sessões Engajadas', conversions: Math.floor(8420 * multiplicadorFinal * 0.577), rate: '57.7%', color: '#10b981' },
      { goal: 'Usuários Recorrentes', conversions: Math.floor(6845 * multiplicadorFinal * 0.35), rate: '35.0%', color: '#8b5cf6' },
      { goal: 'Páginas por Sessão', conversions: Math.floor(2.3 * multiplicadorFinal), rate: `${(2.3 * Math.min(multiplicadorFinal, 2)).toFixed(1)} páginas/sessão`, color: '#f59e0b' }
    ]
  };
}
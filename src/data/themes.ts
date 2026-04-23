export interface Expression {
  phrase: string;
  meaning: string;
  example: string;
}

export interface Argument {
  id: string;
  claim: string;
  claimZh: string;
  guidance: string;
  targetVocab: string[];
  models: {
    claim: string;
    support: string;
    example: string;
  };
}

export interface WritingTheme {
  id: string;
  title: string;
  titleZh: string;
  description: string;
  expressions: Expression[];
  arguments?: Argument[];
}

export const TASK2_THEMES: WritingTheme[] = [
  {
    id: 'education',
    title: 'Education & Learning',
    titleZh: '教育与学习',
    description: 'Focuses on schools, university life, online learning, and the purpose of education.',
    expressions: [
      { phrase: 'Academic achievement', meaning: 'Successful performance in school/university', example: 'Standardized tests are often used to measure academic achievement.' },
      { phrase: 'Holistic development', meaning: 'Development of the whole person (mental, physical, social)', example: 'Modern schools should focus on the holistic development of children.' },
      { phrase: 'Rote learning', meaning: 'Learning by repetition without necessarily understanding', example: 'Critics argue that rote learning stifles creativity.' },
      { phrase: 'Acquire knowledge', meaning: 'To gain knowledge', example: 'The primary goal of education is to acquire knowledge useful for the future.' }
    ],
    arguments: [
      {
        id: 'purpose-of-uni',
        claim: 'University should prepare students for the job market.',
        claimZh: '大学教育应该为学生的就业做准备',
        guidance: 'Explain how practical skills can reduce unemployment rates. Use words like "vocational", "employability", and "competitive edge".',
        targetVocab: ['vocational skills', 'competitive edge', 'employability'],
        models: {
          claim: "It is often argued that the primary function of higher education is to equip students with the necessary professional expertise for their future careers.",
          support: "By prioritizing vocational skills and practical training, universities can enhance the employability of graduates, ensuring they possess a competitive edge in a saturated job market.",
          example: "For instance, many engineering programs now incorporate mandatory internships, allowing students to apply theoretical knowledge in real-world industrial settings."
        }
      },
      {
        id: 'online-learning',
        claim: 'Online education offers more flexibility but lacks social interaction.',
        claimZh: '在线教育提供了灵活性，但缺乏社交互动',
        guidance: 'Compare the convenience of home-based study with the essential need for peer-to-peer discussion. Use "geographical constraints" and "interpersonal skills".',
        targetVocab: ['geographical constraints', 'interpersonal skills', 'self-discipline'],
        models: {
          claim: "While digital platforms have removed geographical constraints from education, the absence of physical classrooms can hinder the development of soft skills.",
          support: "The lack of face-to-face interaction often results in diminished interpersonal skills, as students miss out on spontaneous debates and peer-to-peer collaboration.",
          example: "Research indicates that students who rely solely on virtual learning environments often report feelings of isolation and a lack of community engagement."
        }
      }
    ]
  },
  {
    id: 'environment',
    title: 'Environment & Sustainability',
    titleZh: '环境与可持续发展',
    description: 'Global warming, pollution, wildlife conservation, and green energy.',
    expressions: [
      { phrase: 'Irreversible damage', meaning: 'Harm that cannot be fixed', example: 'Climate change is causing irreversible damage to the polar ice caps.' },
      { phrase: 'Carbon footprint', meaning: 'Total greenhouse gas emissions caused by an individual/org', example: 'Individuals can reduce their carbon footprint by using public transport.' },
      { phrase: 'Sustainable development', meaning: 'Growth that meets needs without compromising the future', example: 'Renewable energy is key to sustainable development.' },
      { phrase: 'Ecological balance', meaning: 'A stable state in an ecosystem', example: 'Deforestation disrupts the ecological balance of the region.' }
    ],
    arguments: [
      {
        id: 'individual-vs-govt',
        claim: 'Individuals cannot solve environmental issues without government policy.',
        claimZh: '没有政府的政策，个人无法解决环境问题',
        guidance: 'Discuss how individual efforts like recycling are minor compared to industrial regulation. Use "legislate", "enforce", and "collective effort".',
        targetVocab: ['legislate', 'industrial regulation', 'stringent measures'],
        models: {
          claim: "Many experts contend that individual actions are insufficient to combat climate change without robust governmental intervention.",
          support: "Authorities must legislate stringent measures to regulate industrial emissions, as voluntary individual efforts like recycling cannot offset large-scale ecological degradation.",
          example: "A clear example is the implementation of carbon taxes in several European nations, which has effectively incentivized corporations to adopt greener production methods."
        }
      },
      {
        id: 'fossil-fuels',
        claim: 'Heavy taxes on fossil fuels can force companies to go green.',
        claimZh: '对化石燃料征重税可以迫使公司转向绿色能源',
        guidance: 'Explain the economic pressure on carbon-intensive industries. Use "transition", "renewable alternatives", and "financial incentives".',
        targetVocab: ['renewable alternatives', 'carbon-intensive', 'financial incentives'],
        models: {
          claim: "Imposing heavy financial penalties on the use of fossil fuels is a powerful tool to accelerate the transition to sustainable energy.",
          support: "By making carbon-intensive operations prohibitively expensive, governments provide financial incentives for companies to invest in renewable alternatives.",
          example: "The shift seen in the automotive industry towards electric vehicles is largely driven by such fiscal deterrents on gasoline and subsidies for clean energy."
        }
      }
    ]
  },
  {
    id: 'technology',
    title: 'Technology & Digital Age',
    titleZh: '科技与数字时代',
    description: 'Impact of AI, social media, internet, and technological progress.',
    expressions: [
      { phrase: 'Technological breakthrough', meaning: 'A sudden and important discovery in technology', example: 'The development of AI represents a significant technological breakthrough.' },
      { phrase: 'Digital divide', meaning: 'The gap between people with and without access to tech', example: 'The digital divide can exacerbate social inequality.' },
      { phrase: 'Social isolation', meaning: 'Lack of contact with people', example: 'Excessive use of social media can lead to feelings of social isolation.' },
      { phrase: 'Enhance productivity', meaning: 'To make work more efficient', example: 'Automation tools can significantly enhance productivity in the workplace.' }
    ],
    arguments: [
      {
        id: 'ai-replacement',
        claim: 'AI will eventually replace human labor in many creative fields.',
        claimZh: '人工智能最终将在许多创意领域取代人类劳动力',
        guidance: 'Discuss the capabilities of generative models in art and writing. Use "algorithm", "innovation", and "human intuition".',
        targetVocab: ['generative algorithm', 'unprecedented speed', 'human intuition'],
        models: {
          claim: "The advent of generative algorithms suggests that even creative professions are no longer immune to automation.",
          support: "AI can now produce complex visual art and journalistic content at an unprecedented speed, challenging the traditional belief that creativity requires human intuition.",
          example: "Software like Midjourney or ChatGPT has already begun to disrupt the design and copywriting industries by automating tasks once reserved for skilled humans."
        }
      },
      {
        id: 'social-media-bias',
        claim: 'Social media creates "echo chambers" that polarize society.',
        claimZh: '社交媒体创造了“回声室”，使社会两极分化',
        guidance: 'Describe how algorithms show users only what they already agree with. Use "echo chamber", "confirmation bias", and "polarization".',
        targetVocab: ['confirmation bias', 'echo chamber', 'social polarization'],
        models: {
          claim: "Algorithms on social platforms often lead to the creation of echo chambers that reinforce existing beliefs.",
          support: "This phenomenon, rooted in confirmation bias, prevents individuals from seeing diverse perspectives, ultimately leading to extreme social polarization.",
          example: "Political discourse in many nations has become increasingly fragmented as citizens are exposed only to information that validates their own prejudices."
        }
      }
    ]
  },
  {
    id: 'society',
    title: 'Society & Government',
    titleZh: '社会与政府',
    description: 'Demographics, government spending, transportation, and health systems.',
    expressions: [
      { phrase: 'Aging population', meaning: 'A demographic where the proportion of elderly people increases', example: 'Many developed countries are facing the challenges of an aging population.' },
      { phrase: 'Social welfare', meaning: 'Government programs for the needy', example: 'A robust social welfare system is essential for a stable society.' },
      { phrase: 'Urbanization', meaning: 'The process of making an area more urban', example: 'Rapid urbanization has led to increased demand for housing in cities.' },
      { phrase: 'Public infrastructure', meaning: 'The basic systems of a country (roads, bridges, water)', example: 'Investment in public infrastructure can stimulate economic growth.' }
    ],
    arguments: [
      {
        id: 'tax-on-health',
        claim: 'High taxes on junk food can improve public health.',
        claimZh: '对垃圾食品征收高额税收可以改善公共健康',
        guidance: 'Discuss the link between diet and obesity-related diseases. Use "obesity epidemic", "deterrent", and "healthcare burden".',
        targetVocab: ['obesity epidemic', 'fiscal deterrent', 'healthcare burden'],
        models: {
          claim: "Legislating higher taxes on unhealthy food products is increasingly seen as a necessary step to address the growing obesity epidemic.",
          support: "Such fiscal deterrents serve to reduce the consumption of processed foods, thereby significantly easing the long-term healthcare burden on the state.",
          example: "The 'sugar tax' introduced in several countries has already led to a measurable reduction in the consumption of sweetened beverages among teenagers."
        }
      },
      {
        id: 'public-transport',
        claim: 'Free public transport is the key to reducing city congestion.',
        claimZh: '免费公共交通是减少城市拥堵的关键',
        guidance: 'Analyze the trade-off between ticket revenue and environmental benefits. Use "subsidize", "gridlock", and "commuter behavior".',
        targetVocab: ['heavily subsidized', 'urban gridlock', 'commuter behavior'],
        models: {
          claim: "Providing free access to municipal transit systems could be the most effective strategy to mitigate urban gridlock.",
          support: "If public transport were heavily subsidized, it would fundamentally alter commuter behavior, encouraging millions to leave their private vehicles at home.",
          example: "Cities like Luxembourg, which have made all public transport free, have observed not only reduced congestion but also a significant drop in urban air pollution."
        }
      }
    ]
  }
];

export const TASK1_CATEGORIES: WritingTheme[] = [
  {
    id: 'data-trends',
    title: 'Data Trends',
    titleZh: '数据趋势',
    description: 'Useful for line graphs and bar charts showing changes over time.',
    expressions: [
      { phrase: 'A dramatic increase', meaning: 'A very large and sudden rise', example: 'There was a dramatic increase in sales last year.' },
      { phrase: 'Fluctuate wildly', meaning: 'To change frequently and significantly', example: 'The price of gold fluctuated wildly during the economic crisis.' },
      { phrase: 'Level off', meaning: 'To stop rising/falling and remain steady', example: 'Subscription numbers leveled off after the initial surge.' },
      { phrase: 'Reach a peak', meaning: 'To reach the highest point', example: 'The population is projected to reach a peak in 2050.' }
    ]
  },
  {
    id: 'comparisons',
    title: 'Comparisons',
    titleZh: '对比描述',
    description: 'Useful for pie charts and tables comparing different groups.',
    expressions: [
      { phrase: 'Account for', meaning: 'To make up a certain proportion', example: 'Agriculture accounts for 30% of the total land use.' },
      { phrase: 'By contrast', meaning: 'In comparison', example: 'Young people prefer tech; by contrast, older generations prefer print.' },
      { phrase: 'The vast majority', meaning: 'Almost everyone or everything', example: 'The vast majority of respondents were in favor of the new law.' },
      { phrase: 'Marginally higher', meaning: 'Only slightly higher', example: 'The cost in London is marginally higher than in Manchester.' }
    ]
  }
];

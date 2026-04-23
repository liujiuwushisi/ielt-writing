export interface Expression {
  phrase: string;
  meaning: string;
  example: string;
  literal: string; // 整句翻译（意译）
}

export interface ModelWithLiteral {
  text: string;
  literal: string; // 整句翻译（意译）
}

export interface Argument {
  id: string;
  claim: string;
  claimZh: string;
  guidance: string;
  targetVocab: string[];
  models: {
    claim: ModelWithLiteral;
    support: ModelWithLiteral;
    example: ModelWithLiteral;
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
      { 
        phrase: 'Academic achievement', 
        meaning: '学术成就', 
        example: 'Standardized tests are often used to measure academic achievement.',
        literal: '标准化考试通常被用来衡量学生的学术成就。'
      },
      { 
        phrase: 'Holistic development', 
        meaning: '全面发展', 
        example: 'Modern schools should focus on the holistic development of children.',
        literal: '现代学校应该关注儿童的身心全面发展。'
      },
      { 
        phrase: 'Rote learning', 
        meaning: '死记硬背', 
        example: 'Critics argue that rote learning stifles creativity.',
        literal: '批评者认为死记硬背会扼杀学生的创造力。'
      },
      { 
        phrase: 'Acquire knowledge', 
        meaning: '获取知识', 
        example: 'The primary goal of education is to acquire knowledge useful for the future.',
        literal: '教育的首要目标是获取对未来有用的知识。'
      }
    ],
    arguments: [
      {
        id: 'purpose-of-uni',
        claim: 'University should prepare students for the job market.',
        claimZh: '大学教育应该为学生的就业做准备',
        guidance: 'Explain how practical skills can reduce unemployment rates.',
        targetVocab: ['vocational skills', 'competitive edge', 'employability'],
        models: {
          claim: {
            text: "It is often argued that the primary function of higher education is to equip students with the necessary professional expertise for their future careers.",
            literal: "人们通常认为，高等教育的主要功能是为学生提供未来职业所需的专业知识。"
          },
          support: {
            text: "By prioritizing vocational skills and practical training, universities can enhance the employability of graduates, ensuring they possess a competitive edge in a saturated job market.",
            literal: "通过优先培养职业技能和实践培训，大学可以提高毕业生的就业能力，确保他们在饱和的就业市场中拥有竞争优势。"
          },
          example: {
            text: "For instance, many engineering programs now incorporate mandatory internships, allowing students to apply theoretical knowledge in real-world industrial settings.",
            literal: "例如，现在的许多工程专业都加入了强制性实习，让学生能够将理论知识应用于现实的工业环境。"
          }
        }
      },
      {
        id: 'online-learning',
        claim: 'Online education offers more flexibility but lacks social interaction.',
        claimZh: '在线教育提供了灵活性，但缺乏社交互动',
        guidance: 'Compare the convenience of home-based study with the essential need for peer-to-peer discussion.',
        targetVocab: ['geographical constraints', 'interpersonal skills', 'self-discipline'],
        models: {
          claim: {
            text: "While digital platforms have removed geographical constraints from education, the absence of physical classrooms can hinder the development of soft skills.",
            literal: "虽然数字平台消除了教育中的地理限制，但物理教室的缺失可能会阻碍学生软技能的发展。"
          },
          support: {
            text: "The lack of face-to-face interaction often results in diminished interpersonal skills, as students miss out on spontaneous debates and peer-to-peer collaboration.",
            literal: "缺乏面对面的互动往往会导致人际交往能力受损，因为学生错过了自发的辩论和同伴间的协作。"
          },
          example: {
            text: "Research indicates that students who rely solely on virtual learning environments often report feelings of isolation and a lack of community engagement.",
            literal: "研究表明，仅仅依靠虚拟学习环境的学生通常会感到孤立，并且缺乏社区参与感。"
          }
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
      { 
        phrase: 'Irreversible damage', 
        meaning: '不可逆转的损害', 
        example: 'Climate change is causing irreversible damage to the polar ice caps.',
        literal: '气候变化正在对极地冰盖造成不可逆转的破坏。'
      },
      { 
        phrase: 'Carbon footprint', 
        meaning: '碳足迹', 
        example: 'Individuals can reduce their carbon footprint by using public transport.',
        literal: '个人可以通过使用公共交通来减少其碳足迹。'
      },
      { 
        phrase: 'Sustainable development', 
        meaning: '可持续发展', 
        example: 'Renewable energy is key to sustainable development.',
        literal: '可再生能源是实现可持续发展的关键。'
      },
      { 
        phrase: 'Ecological balance', 
        meaning: '生态平衡', 
        example: 'Deforestation disrupts the ecological balance of the region.',
        literal: '森林砍伐破坏了该地区的生态平衡。'
      }
    ],
    arguments: [
      {
        id: 'individual-vs-govt',
        claim: 'Individuals cannot solve environmental issues without government policy.',
        claimZh: '没有政府的政策，个人无法解决环境问题',
        guidance: 'Discuss how individual efforts like recycling are minor compared to industrial regulation.',
        targetVocab: ['legislate', 'industrial regulation', 'stringent measures'],
        models: {
          claim: {
            text: "Many experts contend that individual actions are insufficient to combat climate change without robust governmental intervention.",
            literal: "许多专家主张，如果没有强大的政府干预，个人的行为不足以对抗气候变化。"
          },
          support: {
            text: "Authorities must legislate stringent measures to regulate industrial emissions, as voluntary individual efforts like recycling cannot offset large-scale ecological degradation.",
            literal: "政府必须立法采取严厉措施来监管工业排放，因为仅靠自愿的个人努力（如垃圾回收）无法抵消大规模的生态退化。"
          },
          example: {
            text: "A clear example is the implementation of carbon taxes in several European nations, which has effectively incentivized corporations to adopt greener production methods.",
            literal: "一个显著的例子是几个欧洲国家实施的碳税，这已有效地激励了企业采用更环保的生产模式。"
          }
        }
      },
      {
        id: 'fossil-fuels',
        claim: 'Heavy taxes on fossil fuels can force companies to go green.',
        claimZh: '对化石燃料征重税可以迫使公司转向绿色能源',
        guidance: 'Explain the economic pressure on carbon-intensive industries.',
        targetVocab: ['renewable alternatives', 'carbon-intensive', 'financial incentives'],
        models: {
          claim: {
            text: "Imposing heavy financial penalties on the use of fossil fuels is a powerful tool to accelerate the transition to sustainable energy.",
            literal: "对使用化石燃料征收沉重的经济惩罚是加速向可持续能源转型的强力工具。"
          },
          support: {
            text: "By making carbon-intensive operations prohibitively expensive, governments provide financial incentives for companies to invest in renewable alternatives.",
            literal: "通过大幅提高高碳运营的成本，政府为公司投资可再生替代品提供了经济激励。"
          },
          example: {
            text: "The shift seen in the automotive industry towards electric vehicles is largely driven by such fiscal deterrents on gasoline and subsidies for clean energy.",
            literal: "汽车行业向电动汽车的转变在很大程度上正是由这种对汽油的财政威慑和对清洁能源的补贴所驱动的。"
          }
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
      { 
        phrase: 'Technological breakthrough', 
        meaning: '技术突破', 
        example: 'The development of AI represents a significant technological breakthrough.',
        literal: '人工智能的发展代表了重大的技术突破。'
      },
      { 
        phrase: 'Digital divide', 
        meaning: '数字鸿沟', 
        example: 'The digital divide can exacerbate social inequality.',
        literal: '数字鸿沟可能会加剧社会不平等。'
      },
      { 
        phrase: 'Social isolation', 
        meaning: '社会隔绝', 
        example: 'Excessive use of social media can lead to feelings of social isolation.',
        literal: '过度使用社交媒体可能会导致孤独感。'
      },
      { 
        phrase: 'Enhance productivity', 
        meaning: '提升效率', 
        example: 'Automation tools can significantly enhance productivity in the workplace.',
        literal: '自动化工具可以显著提高职场的工作效率。'
      }
    ],
    arguments: [
      {
        id: 'ai-replacement',
        claim: 'AI will eventually replace human labor in many creative fields.',
        claimZh: '人工智能最终将在许多创意领域取代人类劳动力',
        guidance: 'Discuss the capabilities of generative models in art and writing.',
        targetVocab: ['generative algorithm', 'unprecedented speed', 'human intuition'],
        models: {
          claim: {
            text: "The advent of generative algorithms suggests that even creative professions are no longer immune to automation.",
            literal: "生成式算法的出现表明，即使是创意职业也不再能免受自动化的影响。"
          },
          support: {
            text: "AI can now produce complex visual art and journalistic content at an unprecedented speed, challenging the traditional belief that creativity requires human intuition.",
            literal: "人工智能现在能够以史无前例的速度生成复杂的视觉艺术和新闻内容，挑战了“创意必然需要人类直觉”的传统观念。"
          },
          example: {
            text: "Software like Midjourney or ChatGPT has already begun to disrupt the design and copywriting industries by automating tasks once reserved for skilled humans.",
            literal: "Midjourney 或 ChatGPT 等软件已经开始通过自动化曾经只有熟练的人类才能完成的任务，来颠覆设计和文案行业。"
          }
        }
      },
      {
        id: 'social-media-bias',
        claim: 'Social media creates "echo chambers" that polarize society.',
        claimZh: '社交媒体创造了“回声室”，使社会两极分化',
        guidance: 'Describe how algorithms show users only what they already agree with.',
        targetVocab: ['confirmation bias', 'echo chamber', 'social polarization'],
        models: {
          claim: {
            text: "Algorithms on social platforms often lead to the creation of echo chambers that reinforce existing beliefs.",
            literal: "社交平台上的算法往往会导致“回声室”的产生，从而强化用户现有的信念。"
          },
          support: {
            text: "This phenomenon, rooted in confirmation bias, prevents individuals from seeing diverse perspectives, ultimately leading to extreme social polarization.",
            literal: "这种源于“确认偏差”的现象阻碍了个人接触多元观点，最终导致了极端的社会两极分化。"
          },
          example: {
            text: "Political discourse in many nations has become increasingly fragmented as citizens are exposed only to information that validates their own prejudices.",
            literal: "由于公民只接触那些证实其自身偏见的信息，许多国家的政治话语已变得日益碎片化。"
          }
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
      { 
        phrase: 'Aging population', 
        meaning: '人口老龄化', 
        example: 'Many developed countries are facing the challenges of an aging population.',
        literal: '许多发达国家正面临人口老龄化带来的挑战。'
      },
      { 
        phrase: 'Social welfare', 
        meaning: '社会福利', 
        example: 'A robust social welfare system is essential for a stable society.',
        literal: '健全的社会福利制度对于一个稳定的社会至关重要。'
      },
      { 
        phrase: 'Urbanization', 
        meaning: '城市化', 
        example: 'Rapid urbanization has led to increased demand for housing in cities.',
        literal: '快速的城市化进程导致了城市住房需求的增加。'
      },
      { 
        phrase: 'Public infrastructure', 
        meaning: '公共基础设施', 
        example: 'Investment in public infrastructure can stimulate economic growth.',
        literal: '对公共基础设施的投资可以刺激经济增长。'
      }
    ],
    arguments: [
      {
        id: 'tax-on-health',
        claim: 'High taxes on junk food can improve public health.',
        claimZh: '对垃圾食品征收高额税收可以改善公共健康',
        guidance: 'Discuss the link between diet and obesity-related diseases.',
        targetVocab: ['obesity epidemic', 'fiscal deterrent', 'healthcare burden'],
        models: {
          claim: {
            text: "Legislating higher taxes on unhealthy food products is increasingly seen as a necessary step to address the growing obesity epidemic.",
            literal: "通过立法对不健康食品征收高额税收，越来越被视为解决日益严重的肥胖流行病的关键步骤。"
          },
          support: {
            text: "Such fiscal deterrents serve to reduce the consumption of processed foods, thereby significantly easing the long-term healthcare burden on the state.",
            literal: "这种财政威慑手段有助于减少加工食品的摄入，从而显著减轻国家长期的医疗保健负担。"
          },
          example: {
            text: "The 'sugar tax' introduced in several countries has already led to a measurable reduction in the consumption of sweetened beverages among teenagers.",
            literal: "在几个国家引入的“糖税”已经显著降低了青少年对含糖饮料的摄入量。"
          }
        }
      },
      {
        id: 'public-transport',
        claim: 'Free public transport is the key to reducing city congestion.',
        claimZh: '免费公共交通是减少城市拥堵的关键',
        guidance: 'Analyze the trade-off between ticket revenue and environmental benefits.',
        targetVocab: ['heavily subsidized', 'urban gridlock', 'commuter behavior'],
        models: {
          claim: {
            text: "Providing free access to municipal transit systems could be the most effective strategy to mitigate urban gridlock.",
            literal: "提供完全免费的市政交通系统或许是缓解城市交通拥堵最有效的策略。"
          },
          support: {
            text: "If public transport were heavily subsidized, it would fundamentally alter commuter behavior, encouraging millions to leave their private vehicles at home.",
            literal: "如果公共交通得到大幅补贴且免费化，它将从根本上改变通勤习惯，鼓励数百万人将私家车留在家里。"
          },
          example: {
            text: "Cities like Luxembourg, which have made all public transport free, have observed not only reduced congestion but also a significant drop in urban air pollution.",
            literal: "像卢森堡这样实现全城公共交通免费的城市，不仅观察到了拥堵的改善，城市空气污染也显著下降。"
          }
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
      { phrase: 'A dramatic increase', meaning: '剧增', example: 'There was a dramatic increase in sales last year.', literal: '去年销售额出现了剧增。' },
      { phrase: 'Fluctuate wildly', meaning: '剧烈波动', example: 'The price of gold fluctuated wildly during the economic crisis.', literal: '经济危机期间黄金价格剧烈波动。' },
      { phrase: 'Level off', meaning: '趋于平稳', example: 'Subscription numbers leveled off after the initial surge.', literal: '在最初的激增之后，订阅人数趋于平稳。' },
      { phrase: 'Reach a peak', meaning: '达到顶峰', example: 'The population is projected to reach a peak in 2050.', literal: '预计人口将在2050年达到顶峰。' }
    ]
  },
  {
    id: 'comparisons',
    title: 'Comparisons',
    titleZh: '对比描述',
    description: 'Useful for pie charts and tables comparing different groups.',
    expressions: [
      { phrase: 'Account for', meaning: '占……比例', example: 'Agriculture accounts for 30% of the total land use.', literal: '农业占土地总利用率的30%。' },
      { phrase: 'By contrast', meaning: '相比之下', example: 'Young people prefer tech; by contrast, older generations prefer print.', literal: '年轻人偏好科技；相比之下，老一辈更喜欢印刷品。' },
      { phrase: 'The vast majority', meaning: '绝大多数', example: 'The vast majority of respondents were in favor of the new law.', literal: '绝大多数受访者赞成这项新法律。' },
      { phrase: 'Marginally higher', meaning: '略高', example: 'The cost in London is marginally higher than in Manchester.', literal: '伦敦的生活成本比曼彻斯特略高。' }
    ]
  }
];

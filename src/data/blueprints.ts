import type { PlaystyleBlueprint } from './types'

export const blueprints: PlaystyleBlueprint[] = [
  {
    id: 'combat',
    title: '打仗',
    tagline: '以野战冲锋与近战输出为主的稳妥作战队。',
    companionIds: [
      'alayen',
      'baheshtur',
      'firentis',
      'rolf',
      'lezalit',
      'artimenner',
    ],
    source: 'native',
    advice: [
      {
        companionId: 'alayen',
        build: {
          attributes: '力量与敏捷为主，少量智力保技能点',
          skills: '优先骑术、武器掌握、力量打击；后期可点领导/说服',
          notes: '按骑兵冲锋培养，方便日后封臣。',
        },
        gear: [
          {
            name: '重型骑枪 / 长枪',
            reason: '冲锋一击伤害高，适合开局破阵',
            priceHint: '中高',
          },
          {
            name: '骑手盾 + 单手武器',
            reason: '近身后保命与持续输出',
            priceHint: '中',
          },
          {
            name: '锁子甲或板甲、战马',
            reason: '提升生存，保证反复冲锋',
            priceHint: '中高',
          },
        ],
      },
      {
        companionId: 'baheshtur',
        build: {
          attributes: '力量与敏捷拉满骑射需求',
          skills: '强弓、骑射、武器掌握、骑术',
        },
        gear: [
          {
            name: '强弓 + 大量箭矢',
            reason: '发挥骑射优势风筝敌军',
            priceHint: '中',
          },
          {
            name: '轻中甲与快马',
            reason: '机动优先，避免被步兵缠住',
            priceHint: '中',
          },
        ],
      },
      {
        companionId: 'firentis',
        build: {
          attributes: '力量、敏捷优先',
          skills: '运动、力量打击、铁骨、武器掌握',
        },
        gear: [
          {
            name: '双手斧/锤或骑枪',
            reason: '补足免费同伴的输出缺口',
            priceHint: '中',
          },
          {
            name: '中甲头盔盾牌',
            reason: '冲阵时降低阵亡率',
            priceHint: '中',
          },
        ],
      },
      {
        companionId: 'rolf',
        build: {
          attributes: '智力与力量兼顾',
          skills: '战术优先，其次运动与近战',
          notes: '战场上把战术点满，显著提升部队表现。',
        },
        gear: [
          {
            name: '骑枪或长兵器',
            reason: '兼顾指挥位与输出',
            priceHint: '中',
          },
          {
            name: '中甲战马',
            reason: '跟上骑兵集群',
            priceHint: '中',
          },
        ],
      },
      {
        companionId: 'lezalit',
        build: {
          attributes: '力量为主，智力支撑训练',
          skills: '训练、力量打击、武器掌握、铁骨',
        },
        gear: [
          {
            name: '优质单手剑 + 盾',
            reason: '练兵间隙仍能稳定输出',
            priceHint: '中高',
          },
          {
            name: '板甲或优质锁甲',
            reason: '前排抗伤',
            priceHint: '高',
          },
        ],
      },
      {
        companionId: 'artimenner',
        build: {
          attributes: '智力优先',
          skills: '工程、战术、贸易；少量近战保命',
        },
        gear: [
          {
            name: '十字弩或短弓',
            reason: '攻城与远程补刀更安全',
            priceHint: '中',
          },
          {
            name: '中甲',
            reason: '工程师不该冲第一排',
            priceHint: '中',
          },
        ],
      },
    ],
  },
  {
    id: 'leadership',
    title: '带队',
    tagline: '练兵、战术与贵族班底，适合扩军建国。',
    companionIds: [
      'lezalit',
      'artimenner',
      'rolf',
      'alayen',
      'baheshtur',
      'matheld',
    ],
    source: 'native',
    advice: [
      {
        companionId: 'lezalit',
        build: {
          attributes: '智力与力量',
          skills: '训练拉满，再补领导相关与近战',
        },
        gear: [
          {
            name: '训练向近战套装（剑盾甲）',
            reason: '平时练兵，战时也能上阵',
            priceHint: '中高',
          },
        ],
      },
      {
        companionId: 'artimenner',
        build: {
          attributes: '智力优先',
          skills: '工程、战术、库存管理向技能',
        },
        gear: [
          {
            name: '轻便甲胄 + 远程武器',
            reason: '守在后方指挥与攻城',
            priceHint: '中',
          },
        ],
      },
      {
        companionId: 'rolf',
        build: {
          attributes: '智力为主',
          skills: '战术优先，其次领导/说服预备',
        },
        gear: [
          {
            name: '指挥官骑枪套',
            reason: '与骑兵同步机动',
            priceHint: '中',
          },
        ],
      },
      {
        companionId: 'alayen',
        build: {
          attributes: '力量敏捷',
          skills: '骑兵技能 + 后期领导说服',
          notes: '贵族身份方便日后封地。',
        },
        gear: [
          {
            name: '贵族风重骑套装',
            reason: '冲锋与身份感兼得',
            priceHint: '高',
          },
        ],
      },
      {
        companionId: 'baheshtur',
        build: {
          attributes: '力量敏捷',
          skills: '骑射体系，略点战术辅助',
        },
        gear: [
          {
            name: '骑射全套（弓、箭、快马）',
            reason: '侧翼输出保护主队',
            priceHint: '中',
          },
        ],
      },
      {
        companionId: 'matheld',
        build: {
          attributes: '力量敏捷',
          skills: '铁骨、力量打击、武器掌握、运动',
        },
        gear: [
          {
            name: '双手武器或斧盾',
            reason: '前排硬刚，压阵士气',
            priceHint: '中高',
          },
          {
            name: '重甲',
            reason: '最大化生存',
            priceHint: '高',
          },
        ],
      },
    ],
  },
  {
    id: 'trade',
    title: '跑商',
    tagline: '贸易、治疗与探路齐全，少踩同伴吵架坑。',
    companionIds: [
      'marnid',
      'ymira',
      'jeremus',
      'katrin',
      'bunduk',
      'deshavi',
    ],
    source: 'native',
    advice: [
      {
        companionId: 'marnid',
        build: {
          attributes: '智力优先，少量敏捷保生存',
          skills: '贸易拉满，再点库存、寻路或治疗辅助',
        },
        gear: [
          {
            name: '轻甲 + 马匹',
            reason: '跑图保命，不追求战场输出',
            priceHint: '低中',
          },
          {
            name: '短兵器防身',
            reason: '遇伏时能挨几下',
            priceHint: '低',
          },
        ],
      },
      {
        companionId: 'ymira',
        build: {
          attributes: '智力为主',
          skills: '贸易、急救、骑术',
        },
        gear: [
          {
            name: '快马与轻甲',
            reason: '跟商队机动，兼顾急救位',
            priceHint: '中',
          },
        ],
      },
      {
        companionId: 'jeremus',
        build: {
          attributes: '智力优先',
          skills: '伤口处理、急救、手术、贸易',
          notes: '军医位，尽量别让他冲锋。',
        },
        gear: [
          {
            name: '轻中甲',
            reason: '保命优先',
            priceHint: '中',
          },
          {
            name: '短弓或十字弩',
            reason: '远程参战减少受伤',
            priceHint: '中',
          },
        ],
      },
      {
        companionId: 'katrin',
        build: {
          attributes: '力量与智力',
          skills: '贸易、铁骨，少量近战',
        },
        gear: [
          {
            name: '盾 + 单手锤/剑',
            reason: '商队护卫，抗住强盗',
            priceHint: '中',
          },
          {
            name: '中甲',
            reason: '提高护卫生存',
            priceHint: '中',
          },
        ],
      },
      {
        companionId: 'bunduk',
        build: {
          attributes: '力量敏捷',
          skills: '铁骨、力量打击、武器掌握',
          notes: '商队的武力担当。',
        },
        gear: [
          {
            name: '十字弩或矛盾',
            reason: '守车与野战都好用',
            priceHint: '中',
          },
          {
            name: '中甲头盔',
            reason: '前排抗伤',
            priceHint: '中',
          },
        ],
      },
      {
        companionId: 'deshavi',
        build: {
          attributes: '智力与敏捷',
          skills: '寻路、侦察、跟踪优先',
        },
        gear: [
          {
            name: '轻甲快马',
            reason: '探路侦察要机动',
            priceHint: '低中',
          },
          {
            name: '弓或投掷武器',
            reason: '轻装风筝',
            priceHint: '低中',
          },
        ],
      },
    ],
  },
  {
    id: 'hybrid',
    title: '混搭',
    tagline: '治疗、探路、护卫兼顾的万金油队伍。',
    companionIds: [
      'bunduk',
      'katrin',
      'deshavi',
      'klethi',
      'jeremus',
      'ymira',
    ],
    source: 'native',
    advice: [
      {
        companionId: 'bunduk',
        build: {
          attributes: '力量敏捷',
          skills: '近战三项 + 少量训练',
        },
        gear: [
          {
            name: '矛/剑盾中甲',
            reason: '万金油前排',
            priceHint: '中',
          },
        ],
      },
      {
        companionId: 'katrin',
        build: {
          attributes: '力量智力',
          skills: '贸易与铁骨，补库存',
        },
        gear: [
          {
            name: '锤盾中甲',
            reason: '护卫商路与营地',
            priceHint: '中',
          },
        ],
      },
      {
        companionId: 'deshavi',
        build: {
          attributes: '智力敏捷',
          skills: '寻路侦察跟踪',
        },
        gear: [
          {
            name: '轻装骑射/投掷',
            reason: '开图与风筝',
            priceHint: '低中',
          },
        ],
      },
      {
        companionId: 'klethi',
        build: {
          attributes: '敏捷力量',
          skills: '强掷、寻路、侦察',
        },
        gear: [
          {
            name: '标枪/飞斧多组',
            reason: '发挥投掷特长',
            priceHint: '中',
          },
          {
            name: '轻甲',
            reason: '保持投掷节奏',
            priceHint: '低中',
          },
        ],
      },
      {
        companionId: 'jeremus',
        build: {
          attributes: '智力',
          skills: '医疗三件套 + 贸易',
        },
        gear: [
          {
            name: '轻甲远程',
            reason: '军医位保命',
            priceHint: '中',
          },
        ],
      },
      {
        companionId: 'ymira',
        build: {
          attributes: '智力',
          skills: '急救、贸易、骑术',
        },
        gear: [
          {
            name: '快马轻甲',
            reason: '辅助机动',
            priceHint: '中',
          },
        ],
      },
    ],
  },
]

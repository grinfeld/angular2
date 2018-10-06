import { InMemoryDbService } from 'angular2-in-memory-web-api';
import {CONFIG} from "./constants";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let user =
      {
        user_id: 1,
        username: 'admin',
        nickname: 'Admin',
        type: CONFIG.ROLES.VISITOR,
        visibility: 0,
        subscribable: 0,
        views: 0,
        details: {}
      }
    ;

    let categories = [
      {
          category_id: 1,
          category_name: 'Поэзия'
      },
      {
          category_id: 2,
          category_name: 'Проза'
      },
      {
          category_id: 3,
          category_name: 'Публицистика'
      }
    ];

    let texts = [
      {
        text_id: 1,
        name: '"Незаметно вползает под полог..."',
        epigraph: '',
        text: 'Незаметно вползает под полог,\n' +
        'обещающе благословен,\n' +
        'потихоньку толкая осколок\n' +
        'по туннелю расширенных вен,\n' +
        'новый день. Как водитель трамвая,\n' +
        'он загадочен, малоречив.\n' +
        'Внутрь солнце густое вливает,\n' +
        'через веки тепло просочив.\n' +
        'Равномерно кудрявых детишек\n' +
        'на горячем песке раскидав,\n' +
        'сбросил август надежды излишек,\n' +
        'словно старую кожу удав.\n' +
        'Не стесняется - голый, но бойкий,\n' +
        'попрошайкою трется у ног. \n' +
        'Чья-то старая мать на помойке\n' +
        'копошится: спаси ее Бог...\n' +
        'Люди пьют и не могут напиться - \n' +
        'закипает к полудню вода.\n' +
        'Золотистые счастья крупицы\n' +
        'просыпаются сквозь невода,\n' +
        'воздух, будто спрессованый, плотен.\n' +
        'Из окна окликает Магритт:\n' +
        '"уешь запах горящих полотен?\n' +
        'Посмотри - под ногами горит!"\n' +
        'И вздымается море тюремным \n' +
        'тихим гласом, на фене бурля:\n' +
        'как же быть мне теперь Средиземным,\n' +
        'если завтра исчезнет земля?!\n',
        text_date: 'Август 2016г.',
        publish_date: new Date(),
        subscribable: 1,
        views: 10,
        category: {
          category_id: 1,
          category_name: 'Поэзия'
        },
        author: {
          user_id: 2,
          nickname: 'Юлия Драбкина'
        },
        collections: [
          {
            collection_id: 2,
            collection_name: 'Book2'
          },
          {
            collection_id: 3,
            collection_name: 'Book3'
          }
        ]
      },
      {
        text_id: 2,
        name: '"Когда дорога ляжет на восток..."',
        epigraph: '',
        text: 'Когда дорога ляжет на восток\n' +
        'и ты, из глины вынутый росток,\n' +
        'на порванных корнях пойдешь скитаться,\n' +
        'бессонное отчаянье молчать,\n' +
        'то на лице проявится печать\n' +
        'безумного, больного, святотатца.\n' +
        'Ну, а пока, судьбою бережен,\n' +
        'ты слышишь ли волшебный этот звон,\n' +
        'как будто с облаков роняют блюдца?\n' +
        'Ты видишь ли за блеском амальгам,\n' +
        'как ласково, тепло к твоим ногам\n' +
        'любовь с печалью близнецами жмутся?\n' +
        'Что знаешь ты о старости, дитя,\n' +
        'сейчас, главу безумно очертя,\n' +
        'со смертью второпях играя в прятки? \n' +
        'Беги, беги, пока не чуешь ты,\n' +
        'как скоро время ленту пустоты\n' +
        'вплетет в твои редеющие прядки,\n' +
        'небрежно отсчитает горстку лет,\n' +
        'с усмешкой в руку вложит пистолет\n' +
        'и разведет тебя и безнадежье\n' +
        'на несколько коротеньких шагов.\n' +
        'Печаль одна свернет на Дизенгоф,\n' +
        'любовь сама уйдет на побережье.\n' +
        'Замкнется жизнь, рисуя новый круг,\n' +
        'что было странно - прояснится вдруг,\n' +
        'и твой двойник с душою святотатца\n' +
        'шагнет на путь, лежащий на восток,\n' +
        'а ты, из глины вынутый росток,\n' +
        'на порванных корнях уйдешь скитаться.\n',
        text_date: 'Июль 2016г.',
        publish_date: new Date(),
        subscribable: 1,
        views: 5,
        category: {
          category_id: 1,
          category_name: 'Поэзия'
        },
        author: {
          user_id: 2,
          nickname: 'Юлия Драбкина'
        },
        collections: [
          {
            collection_id: 2,
            collection_name: 'Book2'
          }
        ]
      },
      {
        text_id: 3,
        name: '"Не спится. Наверное, дело к зиме..."',
        epigraph: '',
        text: 'Не спится. Наверное, дело к зиме...\n' +
        'На улице жар - у меня в позвоночнике холод.\n' +
        'И где-то за тридевять долгих земель\n' +
        'моя королева нашла для сближения повод.\n' +
        '\n' +
        'Бесшумно толкая армады темнеющих туч,\n' +
        'она приближается. Птицы покинули гнёзда.\n' +
        'Лишь мой воробей, который не слишком певуч\n' +
        'остался со мною, угрозы чирикая грозно.\n' +
        '\n' +
        'На улице жар - до зимы ещё множество дней.\n' +
        'И солнце обмануто греет беспомощный город.\n' +
        'Моя королева стремится добраться ко мне\n' +
        'и холод.\n',
        text_date: '7 августа, 2014 г.',
        publish_date: new Date(),
        subscribable: 1,
        views: 5,
        category: {
          category_id: 1,
          category_name: 'Поэзия'
        },
        author: {
          user_id: 3,
          nickname: 'Михаил Гринфельд'
        },
        collections: [
          {
            collection_id: 1,
            collection_name: 'Book1'
          }
        ]
      }
    ];

    let users = [
      {
        user_id: 2,
        username: 'girlrobber@gmail.com',
        nickname: 'girlrobber',
        first_name: 'Юля Драбкина',
        last_name: 'Drabkin',
        type: CONFIG.ROLES.AUTHOR,
        visibility: 1,
        subscribable: 0,
        views: 5,
        details: {
          email: 'girlrobber@gmail.com',
          email_visibility: 0,
          facebook_url: 'https://www.facebook.com/profile.php?id=100001311664633',
          facebook_visibility: 1,
          google_url: '',
          google_visibility: 0,
          twitter_url: '',
          twitter_visibility: 0,
          image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/14088462_1087569457963433_3814621377360039973_n.jpg?oh=f98e0b1bd395ac746f1e1f9e4d4a34ee&oe=58A5B98D',
          image_visibility: 1
        },
        about: 'Родилась в 1977 году в Гомеле, Беларусь.\n'+
        'Собиралась быть математиком, физиком или, на худой конец, актрисой, а в последний момент поступила на филологический факультет Гомельского государственного университета имени Ф. Скорины, о чём, кажется, и не жалею.\n' +
        'Окончила университет в 1999-м и в 2000-м перебралась с семьёй в Израиль, где и живу по сей день. Преподаю английский язык в средней школе. Стихи пишу от случая к случаю, ставки на них не делаю, но когда получается что-то достойное и людям нравится - радуюсь.'
      },
      {
        user_id: 3,
        username: 'grinfeld@gmail.com',
        nickname: 'grinfeld',
        first_name: 'Михаил',
        last_name: 'Гринфельд',
        type: CONFIG.ROLES.ADMIN,
        visibility: 1,
        subscribable: 0,
        views: 1,
        details: {
          email: 'grinfeld@gmail.com',
          email_visibility: 1,
          facebook_url: 'https://www.facebook.com/grinfeldmisha',
          facebook_visibility: 1,
          google_url: 'https://plus.google.com/u/0/+MikhailGrinfeld',
          google_visibility: 1,
          twitter_url: '',
          twitter_visibility: 0,
          image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c27.0.160.160/p160x160/426599_10150585836463217_360996862_n.jpg?oh=81247f49233159d55f3a3fe6ee8b2496&oe=585FF782&__gda__=1482718314_19c575c323125e939aa76bdc320fa73f',
          image_visibility: 1
        },
        about: 'Род. в 1981 г. 11 января в городе Кишиневе. Стихи начал писать в 1992 г. попав в поэтический кружок поэта Александра Миляха. В 1993 г. стал лауреатом конкурса юных поэтов "Флорий" ("Цветы"). В 1995 занял второе место в этом же конкурсе.'+
        'В периуд с 1992 по 1995 гг. печатался в разных переодических изданиях, в таких как: "Молодежь Молдавии", "Вечерний Кишинев", "Русское Слово", "Наш Голос" и другие.'+
        'С июля 1995 г. проживает в Израиле в городе Петах-Тиква. Один из организаторов всеИзральского Фестиваля Поэзии, который проходил в городе Петах-Тиква в 2000 и в 2001 г.'
      },
      {
        user_id: 4,
        username: 'dsfvsdf@gmail.com',
        nickname: 'fsdfasf afasfasf',
        first_name: 'Mikhasgasgaail',
        last_name: 'Grinfeasgasgld',
        type: CONFIG.ROLES.AUTHOR,
        visibility: 0,
        subscribable: 0,
        views: 1,
        details: {
          email: 'grinfeld@gmail.com',
          email_visibility: 0,
          facebook_url: '',
          facebook_visibility: 0,
          google_url: '',
          google_visibility: 0,
          twitter_url: '',
          twitter_visibility: 0,
          image: '',
          image_visibility: 0
        },
        about: 'bla-bla'
      },
      {
        user_id: 5,
        username: 'sdgsdgsgsdgs@sdsdgsdg.com',
        nickname: 'sddgsdg sdgsdg',
        first_name: 'sdgsdgsjghj',
        last_name: 'dfhdfhdfhdfh',
        type: CONFIG.ROLES.AUTHOR,
        visibility: 1,
        subscribable: 0,
        views: 1,
        details: {
          email: 'grinfeld@gmail.com',
          email_visibility: 0,
          facebook_url: '',
          facebook_visibility: 0,
          google_url: '',
          google_visibility: 0,
          twitter_url: '',
          twitter_visibility: 0,
          image: '',
          image_visibility: 0
        },
        about: 'bla-bla'
      }
    ];

    let collections = [
      {
        collection_id: 1,
        collection_name: 'Book1'
      },
      {
        collection_id: 2,
        collection_name: 'Book2'
      },
      {
        collection_id: 3,
        collection_name: 'Book3'
      },
      {
        collection_id: 4,
        collection_name: 'Book4'
      }
    ];

    return {'user': user, 'users': users, 'texts': texts, 'reguser': users[0], 'categories': categories, 'collections': collections};
  }
}

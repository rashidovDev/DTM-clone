import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SearchIcon from '@mui/icons-material/Search';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';

import NoteAltIcon from '@mui/icons-material/NoteAlt';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

//Carousel
import Cooperation from "../assets/carousel/cooperation.png"
import Abroad from "../assets/carousel/abroad.png"
import Registration from "../assets/carousel/registration.png"
import TelegramBot from "../assets/carousel/telegrambot.png"

//News
import language from "../assets/carouselItems/chettili.png"
import biology from "../assets/carouselItems/biologiya.png"
import physics from "../assets/carouselItems/fizika.png"
import french from "../assets/carouselItems/fransuztili.png"
import geography from "../assets/carouselItems/geografiya.png"
import privilege from "../assets/carouselItems/imtiyoz.png"
import iqtest from "../assets/carouselItems/IQtest.png"
import transfer from "../assets/carouselItems/kochirish.png"
import spiritual from "../assets/carouselItems/manaviyat.png"
import mathematics from "../assets/carouselItems/matematika.png"
import native from "../assets/carouselItems/onatili.png"
import reception from "../assets/carouselItems/qabul.png"
import karakalpak from "../assets/carouselItems/qoraqalpoq.png"
import russian from "../assets/carouselItems/rustili.png"
import certification from "../assets/carouselItems/setifikatlash.png"
import history from "../assets/carouselItems/tarix.png"
import uzhistory from "../assets/carouselItems/uztarix.png"

//Content
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import BlockIcon from '@mui/icons-material/Block';

//Region 
import Dtm from "../assets/dtm.png"

//Cooperation
import one from "../assets/cooperation/1.png"
import two from "../assets/cooperation/2.png"
import three from "../assets/cooperation/3.png"
import four from "../assets/cooperation/4.png"
import five from "../assets/cooperation/5.png"
import six from "../assets/cooperation/6.png"
import seven from "../assets/cooperation/7.png"
import eight from "../assets/cooperation/8.png"
import nine from "../assets/cooperation/9.png"
import ten from "../assets/cooperation/10.png"
import eleven from "../assets/cooperation/11.png"
import twelve from "../assets/cooperation/12.png"

import youtube from "../assets/social/youtube.png"
import instagram from "../assets/social/instagram.png"
import facebook from "../assets/social/facebook.png"
import telegram from "../assets/social/telegram.png"

export const navItem = [
    {
        icon: <HomeIcon />,
        href: "/",
        sort: "navigation",
        type: "home"
    },
    {
        icon: <EmailIcon />,
        href: "https://corp.uz/webmail/",
        sort: "navigation",
        type: 'email'
    },
    {
        icon: <RemoveRedEyeIcon />,
        href: "/",
        sort: "navigation",
        type: "eye"
    },
    {
        icon: <SearchIcon />,
        href: "/",
        sort: "navigation",
        type: "search"
    },
    {
        icon: <YouTubeIcon />,
        href: "/",
        sort: "social",
    },
    {
        icon: <InstagramIcon />,
        href: "/",
        sort: "social",
    },
    {
        icon: <FacebookIcon />,
        href: "/",
        sort: "social",
    },
    {
        icon: <TelegramIcon />,
        href: "/",
        sort: "social",
    },
    {
        name: "O'z",
        sort: "language"
    },
    {
        name: "Уз",
        sort: "language"
    },
    {
        name: "Qq",
        sort: "language"
    },
    {
        name: "Ру",
        sort: "language"
    },
    {
        name: "Eng",
        sort: "language"
    },
    {
        name: "Fr",
        sort: "language"
    },
    {
        name: "De",
        sort: "language"
    },
]
export const callItem = [
    {
        name: "Xolis fuqaro",
        icon: <NoteAltIcon />,
        type: 'none'
    },
    {
        name: "Call Markaz:1195",
        icon: <LocalPhoneIcon />,
        type: 'green'
    },
    {
        name: "Ishonch telefoni:(95) 199 19 14",
        icon: <LocalPhoneIcon />,
        type: 'red'
    }
]
export const buttonItem = [
    {
        name: "Stop korrupsiya",
        icon: <DoNotDisturbIcon />,
        type: "corruption"
    },
    {
        name: "Shaxsiy kabinet",
        icon: <PermIdentityIcon />,
        type: "account"
    }
]

export const navNavigation = [
    {
        id: 1,
        title: "Markaz haqida",
        path: "/about",
        cName: "nav-item"

    },
    {
        id: 2,
        title: "Axborot xizmati",
        path: "/infoservice",
        cName: "nav-item"
    },
    {
        id: 3,
        title: "Faoliyat",
        path: "/activity",
        cName: "nav-item"
    },
    {
        id: 4,
        title: "Xalqaro hamkorlik",
        path: "/cooperation",
        cName: "nav-item"
    },
    {
        id: 5,
        title: "Ochiq ma'lumotlar",
        path: "/opendata",
        cName: "nav-item"
    },
    {
        id: 6,
        title: "Hujjatlar",
        path: "/documents",
        cName: "nav-item"
    },
    {
        id: 7,
        title: "Bog'lanish",
        path: "/contact",
        cName: "nav-item"
    },
]

export const navDrop = [
    {
        id: 1,
        title: "Markaz tarixi",
        path: "./history",
        cName: "submenu-item",
        sort: "Markaz haqida"
    },
    {
        id: 2,
        title: "Raxbariyat",
        path: "./Authority",
        cName: "submenu-item",
        sort: "Markaz haqida"
    },
    {
        id: 3,
        title: "Markaziy apparat",
        path: "./centralmanagemant",
        cName: "submenu-item",
        sort: "Markaz haqida"
    },
    {
        id: 4,
        title: "Tashkiliy tuzilmasi",
        path: "./marketing",
        cName: "submenu-item",
        sort: "Markaz haqida"
    },
    {
        id: 5,
        title: "Hududiy bo'limlar",
        path: "./regionaldepartaments",
        cName: "submenu-item",
        sort: "Axborot xizmati"
    },
]

//Carousel

export const carousel = [
    {
        img: Abroad,
        title: `2022/2023-o‘quv yilida xorijiy va nodavlat oliy
         ta’lim muassasalaridan respublika davlat oliy ta’lim 
         muassasalariga talabalar o‘qishni ko‘chirish uchun 
         o‘tkaziladigan maxsus sinovlar bo‘yicha o‘tish ballari:`
    },
    {
        img: Cooperation,
        title: "Qo'shma ta'lim dasturlariga oid ma'lumotlar"
    },
    {
        img: Registration,
        title: `Davlat test markazi tomonidan o'tkaziladigan barcha 
        test sinovlariga ro'yxatdan o'tish tizimi `
    },
    {
        img: TelegramBot,
        title: "Davlat test markazining rasmiy telegram boti"
    },
]

export const carouselItems = [
    {
        sort: "news",
        img: privilege
    },
    {
        sort: "news",
        img: iqtest
    },
    {
        sort: "news",
        img: transfer
    },
    {
        sort: "news",
        img: certification
    },
    {
        sort: "news",
        img: language
    },
    {
        sort: "news",
        img: spiritual
    },
    {
        sort: "news",
        img: reception
    },
    {
        sort: "books",
        img: biology
    },
    {
        sort: "books",
        img: physics
    },
    {
        sort: "books",
        img: french
    },
    {
        sort: "books",
        img: geography
    },
    {
        sort: "books",
        img: mathematics
    },
    {
        sort: "books",
        img: native
    },
    {
        sort: "books",
        img: karakalpak
    },
    {
        sort: "books",
        img: russian
    },
    {
        sort: "books",
        img: history
    },
    {
        sort: "books",
        img: uzhistory
    },
]

export const contentButton = [
    {
        name: "Yangiliklar",
        icon: <RssFeedIcon />,
        category: "news",
        cName: "content-icon1"
    },
    {
        name: "Konkurslar",
        icon: <ShoppingCartIcon />,
        category: "event",
        cName: "content-icon2"
    },
    {
        name: "Statistika",
        icon: <SignalCellularAltIcon />,
        category: "statistics",
        cName: "content-icon3"
    },
    {
        name: "Korrupsiya",
        icon: <BlockIcon />,
        category: "a",
        cName: "content-icon4"
    }
]

//Region 
export const address = [
    {
        city: "Toshkent shahri",
        address: "Toshkent shahri, Bog`ishamol ko`chasi 12.",
        img: Dtm,
        phone: '71 235 19 14',
        faks: '71 234 71 84',
        email: 'info@dtm.uz'
    }
]

//Invitation 
export const invitation = [
    {
        number: 811,
        sort: "Jismoniy shaxslar"
    },
    {
        number: 460,
        sort: "Yuridik shaxslar"
    },
    {
        number: 312,
        sort: "Virtual qabulxona"
    },
    {
        number: 181,
        sort: "Xolis fuqaro"
    },
    {
        number: 21,
        sort: "Rahbarlar qabuli"
    },
    {
        number: 3386,
        sort: "Ishonch telefoni"
    }
]

export const cooperation = [
    {
        img: one,
        title: "O'zbekiston Respublikasi hukumat portali",
        sort: "continent"
    },
    {
        img: two,
        title: "Yagona interaktiv davlat xizmatlari portali",
        sort: "continent"
    },
    {
        img: three,
        title: "Harakatlar strategiyasi",
        sort: "continent"
    },
    {
        img: four,
        title: "O'zbekiston Respublikasi ochiq ma'lumotlar portali",
        sort: "continent"
    },
    {
        img: five,
        title: "Identifikatsiyalashning Yagona Tizimi",
        sort: "continent"
    },
    {
        img: six,
        title: "O'zbekiston Respublikasi Qonun hujjatlari ma'lumotlari milly bazasi",
        sort: "continent"
    },
    {
        img: seven,
        title: "Accociation of Language Testers in Europe(ALTE)",
        sort: "foreign"
    },
    {
        img: eight,
        title: "Educational Testing service",
        sort: "foreign"
    },
    {
        img: nine,
        title: "Norwich Institute for Language Education(NILE)",
        sort: "foreign"
    },
    {
        img: ten,
        title: "Azerbaycan Respublikasinin Dovlet Imtihan Merkezi",
        sort: "foreign"
    },
    {
        img: eleven,
        title: "British Council",
        sort: "foreign"
    },
    {
        img: twelve,
        title: "Cambridge Assesment",
        sort: "foreign"
    },
]

export const social = [
    {
        name: "Sayt xaritasi",
        href: "/map"
    },
    {
        name: "Davlat ramzlari",
        href: "/symbols"
    },
    {
        name: "Qayta aloqa",
        href: "/contact1"
    },
    {
        name: "Foydalanish shartlari",
        href: "/terms_of_use"
    },
    {
        name: "ISO 9001 siyosati",
        href: "/iso9001"
    },
    {
        name: "Ko'p beriladigan savollar",
        href: "/questions"
    },
]

export const socialMedia = [
    {
        img: youtube
    },
    {
        img: instagram
    },

    {
        img: facebook
    },
    {
        img: telegram
    },

]

export const message = [
    {
        name : "DTM",
        time : "17-avg 2022, 08:34",
        title : `Assalomu alaykum.Online-maslahatchi xizmatiga xush kelibsiz!
        O‘z savollaringizga 09:00 dan 18:00 vaqt oralig'ida javob
        olishingiz  mumkin.`
    }
]
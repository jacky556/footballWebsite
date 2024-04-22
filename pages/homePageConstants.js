export const teams = [
    {
        title: "標準流浪",
        logoUrl: "/Images/Teams/Rangers_Logo_Final_1.png"
    },
    {
        title: "均業北區",
        logoUrl: "/Images/Teams/Golik_northern.png"
    },
    {
        title: "東方",
        logoUrl: "/Images/Teams/eastern.png"
    },
    {
        title: "香港U23",
        logoUrl: "/Images/Teams/HKU23_Logo.png"
    },
    {
        title: "港會",
        logoUrl: "/Images/Teams/HKFC_Logo.png"
    },
    {
        title: "傑志",
        logoUrl: "/Images/Teams/Kitchee_normal_logo.png"
    },
    {
        title: "冠忠南區",
        logoUrl: "/Images/Teams/KCS_Logo.png"
    },
    {
        title: "理文",
        logoUrl: "/Images/Teams/Lee_Man.png"
    },
    {
        title: "晉峰",
        logoUrl: "/Images/Teams/RCFC_NEW_Logo_w.png"
    },
    {
        title: "深水埗",
        logoUrl: "/Images/Teams/ssp.png"
    },
    {
        title: "大埔",
        logoUrl: "/Images/Teams/tp.png"
    },
]


export const schemes = [
    {
        leftTeam: teams[9],
        rightTeam: teams[10],
        leftTeamScore: 0,
        rightTeamScore: 1,
        date: '2024-04-14',
        league: '中銀人壽香港超級聯賽'
    },
    {
        leftTeam: teams[5],
        rightTeam: teams[1],
        leftTeamScore: 4,
        rightTeamScore: 0,
        date: '2024-04-14',
        league: '中銀人壽香港超級聯賽'
    },
    {
        leftTeam: teams[6],
        rightTeam: teams[0],
        leftTeamScore: 1,
        rightTeamScore: 0,
        date: '2024-04-13',
        league: '中銀人壽香港超級聯賽'
    },
    {
        leftTeam: teams[2],
        rightTeam: teams[8],
        leftTeamScore: 5,
        rightTeamScore: 0,
        date: '2024-04-13',
        league: '中銀人壽香港超級聯賽'
    },
    {
        leftTeam: teams[1],
        rightTeam: teams[9],
        leftTeamScore: 4,
        rightTeamScore: 1,
        date: '2024-04-07',
        league: '中銀人壽香港超級聯賽'
    }
]

export const ranking = [
    {
        team: teams[5],
        played: 15,
        win: 12,
        draw: 2,
        lose: 1,
        goalGain: 48,
        goalLoss: 10,
        goalDiff: 38,
        point: 38
    },
    {
        team: teams[7],
        played: 14,
        win: 11,
        draw: 3,
        lose: 0,
        goalGain: 44,
        goalLoss: 13,
        goalDiff: 31,
        point: 36
    },
    {
        team: teams[10],
        played: 13,
        win: 10,
        draw: 1,
        lose: 2,
        goalGain: 28,
        goalLoss: 8,
        goalDiff: 20,
        point: 31
    },
    {
        team: teams[2],
        played: 15,
        win: 9,
        draw: 4,
        lose: 2,
        goalGain: 29,
        goalLoss: 9,
        goalDiff: 20,
        point: 31
    },
    {
        team: teams[6],
        played: 15,
        win: 9,
        draw: 3,
        lose: 3,
        goalGain: 36,
        goalLoss: 13,
        goalDiff: 23,
        point: 30
    },
    {
        team: teams[1],
        played: 14,
        win: 4,
        draw: 3,
        lose: 7,
        goalGain: 23,
        goalLoss: 32,
        goalDiff: -9,
        point: 15
    },
    {
        team: teams[0],
        played: 16,
        win: 5,
        draw: 0,
        lose: 11,
        goalGain: 33,
        goalLoss: 30,
        goalDiff: 3,
        point: 15
    },
    {
        team: teams[4],
        played: 14,
        win: 4,
        draw: 3,
        lose: 7,
        goalGain: 23,
        goalLoss: 32,
        goalDiff: -9,
        point: 15
    },
    {
        team: teams[9],
        played: 14,
        win: 2,
        draw: 1,
        lose: 11,
        goalGain: 14,
        goalLoss: 41,
        goalDiff: -27,
        point: 7
    },
    {
        team: teams[3],
        played: 15,
        win: 1,
        draw: 3,
        lose: 11,
        goalGain: 9,
        goalLoss: 50,
        goalDiff: -41,
        point: 6
    },
    {
        team: teams[8],
        played: 16,
        win: 1,
        draw: 2,
        lose: 13,
        goalGain: 10,
        goalLoss: 50,
        goalDiff: -40,
        point: 5
    },
]

export const rankHeaders = [
    '排名',
    '球隊',
    '場次',
    '勝',
    '和',
    '輸',
    '入球',
    '失球',
    '入球差異',
    '得分'
]

import banner1 from '../public/Images/EventBanners/Ground_Staff.png';
import banner2 from '../public/Images/EventBanners/HKFA_Web Banner_20230724.png';
import banner3 from '../public/Images/EventBanners/media.png';
import banner4 from '../public/Images/EventBanners/store.png';
import banner5 from '../public/Images/EventBanners/全運會HKG_Photo Contest 1140X540_webban_D2 test.png';
import banner6 from '../public/Images/EventBanners/全運會Opening Ceremony.jpeg';
import banner7 from '../public/Images/EventBanners/全運會Voting_bannerA_chi_0221-01-01.jpg';

export const singlePageSliderImages = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
]

import pattern from '../public/Images/Pattern/pattern.svg'

export const patternImage = pattern;

import calendar from '../public/Images/calendar.svg'

export const calendarImage = calendar;

import footballPitch from '../public/Images/footballPitch.svg'

export const footballPitchImage = footballPitch;
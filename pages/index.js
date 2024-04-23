import { Inter } from "next/font/google";
import s from "@/styles/Home.module.css";
import { 
  schemes, 
  teams, 
  rankHeaders, 
  ranking,
  singlePageSliderImages,
  patternImage,
  calendarImage,
  footballPitchImage,
  allFixtures
} from "./homePageConstants";
import Image from "next/image";
// core version + navigation, pagination modules:
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <div>
      <div className={s.sectionOneContainer}>
        <div className={s.sectionOneInnerContainer}>
          <div className={s.captionText}>
            <i>{'WHEN THERE IS A WILL'}</i>
            <br/>
            <i>{'THERE IS A WAY'}</i>
          </div>
          <div className={s.rightText}>
            <Image 
              src={calendarImage}
              className={s.calendarImage}
            />
            {'加入賽程至日曆'}
          </div>
          {console.log("jopjqwe", teams.map((item,index) => ({title: item.title, index})))}
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
          >
            {
              allFixtures.map(
                fixtures => (
                  <SwiperSlide>
                    <div className={s.scheduleSwiperContainer}>
                    {
                      fixtures.map(fixture => (
                        <div className={s.scheduleCard}>
                          <div className={s.scheduleCardDateTimeContainer}>
                            <div className={s.scheduleCardDateTime}>
                              <span>{fixture.date}</span>
                              <span 
                                style={{
                                  margin: '0 1rem'
                                }}
                              >
                                {'|'}
                              </span>
                              <span>{fixture.time}</span>
                            </div>
                            <div className={s.scheduleCardTimeZone}>
                              {fixture.timeZone}
                            </div>
                          </div>
                          <div className={s.scheduleCardLeagueTitle}>
                            {fixture.league}
                          </div>
                          <div className={s.scheduleCardVersusContainer}>
                            <div className={s.teamContainer}>
                              <div className={s.teamLogoContainer}>
                                <Image 
                                  src={fixture.leftTeam.logoUrl}
                                  width={71}
                                  height={71}
                                  className={s.teamLogo}
                                />
                              </div>
                              <div className={s.scheduleTeamTitle}>
                                {fixture.leftTeam.title}
                              </div>
                            </div>
                            <div
                              className={s.versusText}
                            >
                              {'VS'}
                            </div>
                            <div className={s.teamContainer}>
                              <div className={s.teamLogoContainer}>
                                <Image 
                                  src={fixture.rightTeam.logoUrl}
                                  width={71}
                                  height={71}
                                  className={s.teamLogo}
                                />
                              </div>
                              <div className={s.scheduleTeamTitle}>
                                {fixture.rightTeam.title}
                              </div>
                            </div>
                          </div>
                          <div className={s.scheduleCardLocation}>
                            <Image
                              src={footballPitchImage}
                              className={s.footballPitchImage}
                            />
                            <div className={s.scheduleCardLocationText}>{fixture.location}</div>
                          </div>
                        </div>
                      ))
                    }
                    </div>
                  </SwiperSlide>
                )
              )
            }
          </Swiper>
        </div>
      </div>
      <div className={s.singlePageSliderSection}>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={s.singlePageSliderContainer}>
              {
                singlePageSliderImages.map(item =>
                  <div className={s.eventBannerContainer}>
                    <Image
                      className={s.eventBanner}
                      src={item}
                    />
                  </div>
                )
              }
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.singlePageSliderContainer}>
              {
                singlePageSliderImages.map(item =>
                  <div className={s.eventBannerContainer}>
                    <Image
                      className={s.eventBanner}
                      src={item}
                    />
                  </div>
                )
              }
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={s.patternBar}>
          {
            [0,1,2,3].map(item =>
              <div className={s.patternContainer}>
                <Image
                  className={s.patternImage}
                  src={patternImage}
                />
                <div className={s.patternText}>
                  {'FOOTBALL ASSOCIATION OF HONG KONG, CHINA'}
                </div>
              </div>  
            )
          }
        </div>
      </div>
      <div className={s.sectionContainer}>
        {/* TODO: backdrop filter in front */}
        <div className={s.sectionBackground}/>
        <div className={s.contentContainer}>
          <h2 className={s.contentTitle}>
            中銀人壽香港超級聯賽
          </h2>
          <div className={s.redSeperatorContainer}>
            <div className={s.redSeperator}/>
          </div>
          <div className={s.teamsLogoContainer}>
            {
              teams.map(team => 
                <div className={s.teamContainer}>
                  <div className={s.teamLogoContainer}>
                    <Image 
                      src={team.logoUrl}
                      width={71}
                      height={71}
                      className={s.teamLogo}
                    />
                  </div>
                  <div className={s.teamTitle}>
                    {team.title}
                  </div>
                </div>  
              )
            }
          </div>
          <hr/>
          <h2 className={s.subContentTitle}>
            最新賽果
          </h2>
          <div className={s.redSeperatorContainer}>
            <div className={s.redSeperator}/>
          </div>
          <div className={s.matchResultRowsContainer}>
            {
              schemes.map(scheme => (
                <div className={s.matchResultRow}>
                  <div className={s.matchResultContainer}>
                    <div className={s.matchTeamContainer}>
                      <Image 
                        src={scheme.leftTeam.logoUrl}
                        width={71}
                        height={71}
                        className={s.teamLogo}
                      />
                      <div className={s.matchTeamTitle}>
                        {scheme.leftTeam.title}
                      </div>
                    </div>
                    <div className={s.centerMatchInfoContainer}>
                      <div className={s.matchDate}>
                        {scheme.date}
                      </div>
                      <div className={s.scoresContainer}>
                        <div className={s.scoresCell}>{scheme.leftTeamScore}</div>
                        <div className={s.scoresCell}>{scheme.rightTeamScore}</div>
                      </div>
                      <div className={s.leagueTitle}>
                        {scheme.league}
                      </div>
                    </div>
                    <div className={s.matchTeamContainer}>
                      <Image 
                        src={scheme.rightTeam.logoUrl}
                        width={71}
                        height={71}
                        className={s.teamLogo}
                      />
                      <div className={s.teamTitle}>
                        {scheme.rightTeam.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className={s.moreMatchTitle}>
            <a>{'更多賽事'}</a>
          </div>
          <div className={s.rankContainer}>
            <div className={s.rankGridRow}>
              {rankHeaders.map(header => (
                <div className={s.rankHeaderCell}>
                  {header}
                </div>
              ))}
            </div>
            {
              ranking.map((rank, index) => (
                <div 
                  className={s.rankGridRow}
                  style={{
                    backgroundColor: (index + 1) % 2 === 0 && 'hsla(0, 0%, 100%, .35)' 
                  }}
                >
                  {
                    [...Array(10).keys()].map(item => {
                      const keysOfRank = Object.keys(rank)
                      switch (item) {
                        case 0:
                          return (
                            <div className={s.rankCellContainer}>
                              {index + 1}
                            </div>
                          ) 
                        case 1:
                          return (
                            <div className={s.rankTeamCellContainer}>
                              <Image
                                src={rank.team.logoUrl}
                                width={48}
                                height={48}
                              />
                              <div className={s.rankTeamTitle}>
                                {rank.team.title}
                              </div>
                            </div>
                          )
                        default:
                          return (
                            <div className={s.rankCellContainer}>
                              {rank[keysOfRank[item - 1]]}
                            </div>
                          )
                      }
                    })
                  }
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

import { Inter } from "next/font/google";
import s from "@/styles/Home.module.css";
import { teams } from "./homePageConstants";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
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
          <div className={s.matchResultRow}>
            <div className={s.matchResultContainer}>
              <div className={s.matchTeamContainer}>
                <Image 
                  src={teams[0].logoUrl}
                  width={71}
                  height={71}
                  className={s.teamLogo}
                />
                <div className={s.matchTeamTitle}>
                  {teams[0].title}
                </div>
              </div>
              <div className={s.centerMatchInfoContainer}>
                <div className={s.matchDate}>
                  {'2024-04-07'}
                </div>
                <div className={s.scoresContainer}>
                  <div className={s.scoresCell}>{4}</div>
                  <div className={s.scoresCell}>{1}</div>
                </div>
                <div className={s.leagueTitle}>
                  {'中銀人壽香港超級聯賽'}
                </div>
              </div>
              <div className={s.matchTeamContainer}>
                <Image 
                  src={teams[0].logoUrl}
                  width={71}
                  height={71}
                  className={s.teamLogo}
                />
                <div className={s.teamTitle}>
                  {teams[0].title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

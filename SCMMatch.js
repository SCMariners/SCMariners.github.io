var scmMatch = [];
var TeamLogo = [];

TeamLogo["Default"] = "https://gestion.lffs.eu/lms_league_ws/public/img/default_club.png";
TeamLogo["MARINERS AUDERGHEM 1"] = "https://gestion.lffs.eu/lms_league_ws/public/img/uploads/club844/logo-mariners.png";
TeamLogo["MARINERS AUDERGHEM 4"] = "https://gestion.lffs.eu/lms_league_ws/public/img/uploads/club844/logo-mariners.png";
TeamLogo["MARINERS AUDERGHEM 8"] = "https://gestion.lffs.eu/lms_league_ws/public/img/uploads/club844/logo-mariners.png";
TeamLogo["COLOMBUS WEMMEL 3"] = "https://gestion.lffs.eu/lms_league_ws/public/img/uploads/club843/colombus-wemmel.jpg";
TeamLogo["OLYMP. VILVOORDE 1"] = "https://gestion.lffs.eu/lms_league_ws/public/img/uploads/club4657/7304.jpg";
TeamLogo["HERCULES BXL 1"] = "https://gestion.lffs.eu/lms_league_ws/public/img/uploads/club2537/5933.jpg";


scmMatch["BWP3E003"] = {Division: "3eme Provinciale E", Date: "Lu. 07/09/2020", Salle: "Salle Willegems", EqHome: "MARINERS AUDERGHEM 4", EqHomeScore: "3", EqAway: "COLOMBUS WEMMEL 3", EqAwayScore: "3"};
scmMatch["BWP4F076"] = {Division: "4eme Provinciale F", Date: "Mer. 09/09/2020", Salle: "Eurovolley Centrum", EqHome: "OLYMP. VILVOORDE 1", EqHomeScore: "2", EqAway: "MARINERS AUDERGHEM 8", EqAwayScore: "5"};
scmMatch["BWP2C010"] = {Division: "2eme Provinciale C", Date: "Lu. 14/09/2020", Salle: "Omnisportzaal", EqHome: "HERCULES BXL 1", EqHomeScore: "3", EqAway: "MARINERS AUDERGHEM 1", EqAwayScore: "5"};




function setMatchData(MatchId) {

    document.getElementById("MatchDiv").innerHTML = scmMatch[MatchId]["Division"];
    document.getElementById("MatchDate").innerHTML = scmMatch[MatchId]["Date"];
    document.getElementById("MatchSalle").innerHTML = scmMatch[MatchId]["Salle"];
    document.getElementById("MatchEqHome").innerHTML = scmMatch[MatchId]["EqHome"];
    document.getElementById("MatchEqAway").innerHTML = scmMatch[MatchId]["EqAway"];
    if (typeof (TeamLogo[scmMatch[MatchId]["EqHome"]]) != "undefined") {
        document.getElementById("MatchEqHomeLogo").src = TeamLogo[scmMatch[MatchId]["EqHome"]];
    } else {
        document.getElementById("MatchEqHomeLogo").src = TeamLogo["Default"];
    }

    if (typeof (TeamLogo[scmMatch[MatchId]["EqAway"]]) != "undefined") {
        document.getElementById("MatchEqAwayLogo").src = TeamLogo[scmMatch[MatchId]["EqAway"]];
    }
    else {
        document.getElementById("MatchEqAwayLogo").src = TeamLogo["Default"];
    }
    document.getElementById("MatchScore").innerHTML = scmMatch[MatchId]["EqHomeScore"] + " - " + scmMatch[MatchId]["EqAwayScore"];
}


var scmSpons = [];
var scmOldSpons = [];
var scmTeams = [];
var scmTroph = [];
var fbnews = [];
var lastnews = [];

// ******************
// * Headers Images *
// ******************s

var scmEq1Header = "https://lh3.googleusercontent.com/r2l5tvnINFu1LjrSo-Bf0WdssHMCtJlgnbFYFFwkaUkl1JBmJCUoPp1HDAb5PUc7jOv36z0qwQNWPRQyGGucgGtH9hqrFKyKCYReTL6BwNVVPtP7TPvAhfQAvtgy6fpfStJTA8GBD4qT0QtM3AAHfDgdNW3FE4OeMk8let8DfvOYNQyZC63nrPFBEC43rWwXefiu6LcjNopFmbcUMD8QZ-mvSQe-FKubDmx82K4UxbcdPEnmU9cxmqGRIeNs2paEp6A_no5vdV4P9WQkSc3hJWS1bXICSBFskyOj0QxUEMPx30qbcEmEoK6np-Z2pHEonCqtioZX8Mp3GXHtT6Gwk3wqo4-eB-e5DivDKYE_xAwK5HGRsOLRD8X0JwIctjyFVPF95Nuv3CMheVJKxloL3LxnbzGt0mYVPus1ZdjRPhmvT_APtLccdw5M6tOTwka-An23MyBHtN0rld2nd71i2oqVKMYT-BjP6hIDWN3UMHuXKETJYPbxOzZQEjjlHgB5idX1yJ5TkIILfFJXerv2ObbxkecebkWVXLFX-lLTtJsQ8l4hlY8aaFGUrT8sYRXkCzM-M24Ju2MytFfTSOQc0Pb8MbAB6K_gimw51PNvGkAet7mIkS5xGEc3WkUbWP2WlMk4e17LYeOyAbYqV15c6Y47SCya3SXM6-rYQp9y_QM4rU51mkTKvfTRiYr-yZXmlpkA3PmcY9jvQRrv3Zn9Bz8=w1015-h375-no?authuser=0";
var scmEq1Link = "https://lh3.googleusercontent.com/95XyBZy59JeHI7W4fckV7WEBfO2YwOmMdAj8V-O0-rX954p-LzkPqdtEw8PYtTSu6KIwRMMR9xYlnRztRkebHO7IT10Z3aHeDT5iYyhjBoMMYBLPOUxh1Z-p7aGui7ROC2so2dSjnd81vqcBl_Ut9hsjpc0uh9K-IEBakdH0aUY0rt_TjEhpQ-_0AAFP7OLXXbGndhEDKWYV6dlZgxJX-TnLMSFhwDwliUJGwKEOPwmBwBPrAlZ7mFcA1iRID6DCu4-U82j1mAFLA6mIH0WU9WWs74m6WNM94SKY1ro6qAJIbxjH4LN6gIy6foWUZyhOOUatNLyyOpkhwgh0YYLcnwbRsU-VGjydI6vSZEzA8A-t_IZSEtWNj8K9M9kIpnArnJxwiw5xqpEmiP2JoyUIGRfOuDqYFtmQqiqlNe1CZb18rkCUnmMFA4StwJjaeqejVwqrePo-5WcFtus1uv8V3IMOMC-AJ8ZwLjV4_SZG__l5RS1ns2sLS79Oijb4COpfbY98OKzgcSE5s3zrQC1xSXU8kFuIJRoA33qqhVKhn7CgfHNyZEE1MUVjWamE40v9cEhVeu8JZVRB0ZJkLprxEPf5EQaRiqLz81QAca2l7_-FkZxX2Wuilc86FdJPxdbXAJnOiuPzjRhi3rp8vVeDkVnVKATvl1u4n0L9cpIxH3nFQt9C34-D-X65AhlbCRsZcx5Mj2OTJrQlVB7NEgDdpOA=w236-h142-no?authuser=0";
var scmEq2Header = "https://lh3.googleusercontent.com/LNZh07oeqIk4FrakNdbGAOnAFEAinPiNjebNTIEcuXVNP3MssD_8SDVTtPYxAWnDKYi4REMZdRgfMZV_JLWFJulp7XI6fp5TEw2RhQnUpbyALahMHNjqvUq-Vw9JDvJoqu95X7U17qqovIR8Lp-UUqYyKrkC63dDqYLThWwcUDlVhMxpMJVaQaf1AFe2Qa48dPwBNj3ZoOQ6LDJLR7oFjbPyKjGVV2nJhOR8EKMv03geiC8cnN8McAgseCXZJ_a4FbDWfRny60wZEXCZEFxWC528uUoxLzV922iQen8XFPm606S_hpMThB-xYxu2MA6cC0_aMy4gfBprfE-4YaGPug8znBa39oQKGhas6Um4flD69ol2CB2dUnzW_QAxiPPqUDcHbdVhWzgKPpswP-gALiWoKaHyXrHkcGBb7Mp3hlCLv03ji1CvQSsbac02Zu8exxmRmCHOq_tVQU0BOv4jtAjt1U0k8OQbWs_IOJ6BVioVwamHFZDE55_XkJIEJckfX6-bAxY69_sUxqrgej1DRprDbchiswyIXoBENDvusDGWXauk8Xd_ReKB-ZJ27UthMeRc5FuCbK5lFdcVD_suuAU0iWJznXxtRpUO7yOW1YksajOHlj-vCr4_6Etfbolf35AnRetdPN-dL0djZJTCkXuTgdffQ0aJ3IXt01RUcftg0SLVjUZ2hZ5Y7Ba_-EGuSZCSsKg5eHWyYOwj918BjUA=w1015-h369-no?authuser=0";
var scmEq2Link = "https://lh3.googleusercontent.com/f9fV632_zuDy72eBeGXMS7GPbXkwKYq_mbxFrGBmL0jjwVibeI8zTNZXx1osMJqv6A4e33WdAVd584PJ_SgCr5a8u04qqEpUdlRC2QwEkmvJsqr5yRW-OeKmjgp_wkUcCq6GBbgYXPgj-Cf7S0V_haFfam_fNb7Fjj0LVj_VvSHM7BfdnIIQx4agH_zdTIuifqFP44nzxOqhIH5HfPJpRop456ji4N9TKP4BWMw-MfzDZbZY9R1eo-oIzQh8j-w1uERyVwIEr4owr1zyPD1Svk-zJIdVh_emSB_rsdCPIzPwEQsozfkc-I7fqBYhfzfOuO-qI-ialtfQ9ddac1abHtIKxoWzK-v26sSkV-QjCWMkn9QgMc0_3ev-jJW451x9JAlkM-zwTH9SSvufqK98Sdft2UkH4xjlYT6jjtwBL-KK12WiNb9IjcoI_CR8H9kI1SPeD-VZfF5otQufSM0PtZIzN8R8_YGhKJ5sKFbp3xecXzLtUf5c7QjU7zR6ID5vU57uhxTVbkMbmxyghGS2I0g-VPX6H6UPoXEczbY9DZ7-isRNPDnBw9Khnjcelvhebk4UMEVoIQd2Lw_6bDuYYCJbx9VMAovao1or0i0J-96EIdtANZ8iFFEMPYPGqh1EowRaKTIu6mU_I-LjGGaXK_Firw4U5T3yyr3hjgVIkBJGUcAVkL_FEHLjbh_j3hNHmnEfV0XJ4biZtlEgW1XMOiQ=w295-h190-no?authuser=0";
var scmEq3Header = "https://lh3.googleusercontent.com/ORFv7vbqgC4KZo8gokF4CrRcSMPOmScCR0whra2Ec68DoVIGtokn6R6asGepRJ5_uHx2G8fHaPgnY29rRknTd5X18tKvjCJQPY6oMQSKWpfsyDHyibkTESOQ8mzUkLjTklefpwfu4n3pWUIapfbsqWvoKfXALsWaSpBJVTeFeMIESiqGBbBW0nsDo7G1WMmUuj2CVXV06z8JtZP1MZ2fXw878vKl95RQ2FPcyZ_gkjtQnKeSiFtsm4c-MwNogyBrwBwNGkqNKY58xG6y63yVy4fCukalIygoQppkfV6nJfpCzY0kYIjWKQhl2ElbuGkAxsKi_cOtvX3-VG3NnvPcX53hACC3sf3LWtk9zVnor4m5SukM4N84quHShwjT8Pjs1w7GcAU7uVq9_FyyELna6ESbCDAdZFMXkCyjlGSZUnIbAgBLIrsmON81CutWDbreEBqSWrXkHT2-Y_bHFZOoebIS0CaHHHZTg10thGTOHVQMMxS8s-2DkjD47axX1GIh0yF8gnmfAWYyBCJS33YPbw1HUSay50W8U5gli0124UnqnX0pvra8zSlfinly7U5DcYNDaDDE-gpSvaLda4yd8KmpQjV-zNM1_4IEO7nraPAaAxr3zc1M8dTYnLn11RcXUDhIBnvG2xhrbQju0FtNmdEcQjLKbbRN57l4zziT_7vtynhcoxKYfTgRu43-l_0SgYK44gqtMGS8k_JhctL9zbA=w1015-h376-no?authuser=0";
var scmEq3Link = "https://lh3.googleusercontent.com/f5Nu_3KnP8QSVMEgq7d2CvaiMAPG2sM2AfXPDSCaduWdi6gxRoLdvaDsGCWqT4HsQyp6CElCWC_1tRuVo0lZa8LvSfg-aA638mxRCMTyhHEbUkWZlsQbJbG0SCewWHwDdApbasixeMVuO4CuMD6FE81S0b2Zx3xZisDIwe3TkLRmQRG_hOpMuRROAXioiKcRXLfgRO2yWPN5kZfPzsC0XDKrChcU0mrpdDzz2svaxGARMUfL6io3cwofQObcRi7dDBTcd3tOQktngoZe7y38PQ8i_uLVuiaFKsg76_Ef1pVTUHNjn8EOr1jI8BPcImuaGrvsyqGOBMrwx-prpNdn_XkS9JG5x-qZGYTAHkhz3jM1420eLbhJNU5ifK4JTutpi4LfXHMNl7hIODhadbfApHsa-8csEpf7gh4a0EKv8kp9E3fKjEZcLnAKt21_hp0WF7lklvwUgunz7rMztfse9evVrUBo9nQFFi4PSB85WsnuogTLQq-oAtbiV8CyqaQgQ3vhpZnVLBcNDKAmGuEsgYGSLviDzbBS484246N5cCkFQ8veiPWtWpwsqodyqWEIVcHqumnUp5VgNa4kEjWPOEPsTe-siR18zEFmE8UjSo5agYWFW5BMRdjcwwHQGTmahkEVClVsv2JnfAw7sQhDRLhBKyZYjhuzMYK1EGB3ebddjAdcg08Wdo89NUcAKmsD6k7BtvDgjl2Ybg-bwhUbINo=w314-h190-no?authuser=0";
var scmEq4Header = "https://lh3.googleusercontent.com/PWcMVHS0nTfgIiAL8ALg2tXMe9uoHB3xbqjZZBxoFlSldxzyJERYknaRudzk9rWi4Uchwyf8C3e6_f-hUS6XqyjSqzfwI9IhLfToi-2A4QoS2lS796cBjnn2JJUpx3-MkLf_3wG1LqZdY7vQNORSQL9mh5gxKBRtpPF06vzCgUMQzPoxhfQm8EBs8TEU1znPZbG6jrsJQWxNfOC-l4N3ZkVMRuse2YyyPLnP03zggT0rYj8MVkTDbGtnyJYxiB4FU8uDQXRfli5MUSPtfzCkezm4rFqwimuZ1uH0DhPSqBZlhphqbgF3x9AwTEi5bsGXMFdps55fVqjelHRq1xBbk5iqNhiG8FUeE6Vpyusl_u5EvTXFB0NgFO52b8ZCF1VBbdMhk37z6PDvYjur_71PETlS2oq6NTy9iq6MuX0zdgW2OCyQ6UdYvsI6_F2MjFPVxz0Avg6Y4Hqp0phKxpRJ2PUfmsQzrgrOXpQdPIf_badp4VtZmNdVjKT6ObiHWcVE9mMuCzF-ntrM05jgmpeks2w4ZO9NXCFKLrm7zdDODikOQwdpnx7oUbf3SFl5YGtdC7fI7CHjXew4LrEW0e4aB1jDLs9EssOdDPMUEjDLAX4GNegLZHtRpGSKuvtFGXPyvR4l6w8AMo1SfnmHVuE0MMaaFIpEH_c04wz_9KWbzEX-desZcRg7tc20E9GJy3Dmc0gjRcXeppyAvAvI54JPplE=w1015-h376-no?authuser=0";
var scmEq4Link = "https://lh3.googleusercontent.com/5gyynzNi8rx1tibEG-b6bWprOf7whb3oRys2iww2BsVeCpTNrp1yUJPuU49oxl__2M7cbaQ1RHeMR0l6GejYHYAs3PezThfZuzT4xJyBXy691HN1M3jMceTvKNu5Ukx_gMIuL7-YsJSbo4COzNKjKJ6H2UvkWE8HIqrk3UQ51B-ZYv1rX2ijvYruUff46akRy4dra_OZf-D3ButGZnBZ2UvqzqE7mkT9hgO6Ugw7_fla714URJhn4WUz7Pykv6i-pTHuZmgeYwDt0CG9v6mLAKF-nrjMOCSUWKi7CYOa-RA2vrPmNMDYGPG296AotChQAFYyYaaPLX0MHTcLQlTTU3Ud_2m2Xse89F-uZgjcygEQW7nKvsK4yMfA7uRpKAc6LiMj45XdhsF5yIgkUIfIYRFebHrweGMJ2UJPtjm9LVW_0r2qzrSwdpq6dodpGqlnKs97VvghTOZF3gV7DAQD7hvEPDiwgHIeAA7Fe5Zsw0lj9JCVrB_AY5-ev4nDD5d3svJr_q6e5iz8PPfTXSm9R9az1lrIGm5xknktLn-CWmgdTF-uC5pTd6hfFoXEK0csBCdMiM0odTWXMJ9a_ncwx3VYQXgjZdnu--6Bc9PKag5bB-N0RKynbORy2s0hgy051rKhJD_LyharIcsKEokOZnEhr4yc6utxJ0m11JKWVcqs-CBP-_2ad4mtKHAD98ojWhT99IfxfjWdZ9G2MlctabQ=w306-h190-no?authuser=0";
var scmEq5Header = "https://lh3.googleusercontent.com/fRaXee0cfluRZvUXT2uD3ak8MMd0HhNduOL0d5FJtev7s2dD2jCHqmdwXKK-j1TRuwvpvHg00sBputE7V6t_j1oUc5D9R-PCn2KLOtfu8DxIhNsA8hA18ZNiOcTEdruNkVQB2vEbpmQS9odmixK5hMr-c2gWtvMU9h6jAiGxdNWV51qqg5u6I30EcBulUmC2YcSHr-VjV5f1T-GlcemyftPxhGoix92c32LXLjYVlNbOLvDFIOAt7a8yzb8zsS9hRdeAxxhZq04hGHuQCs1JJvJcCMR8JnKKrWlppP-sZF1hC9EUHldABJ4DfxOzx1oTwHOfuTg6MT0Ax3j8iDEifcIhZ8Ed5NTy_qlxclMfHMdLS4kPDLW2Z4EXwua6KoREkvyXkUZPZVyWDqrBaAFwFKXopQqEY9k4QzyVDWfh97tEJjDJualtuzR412UjEzhKcVnpQaOJzvDBmgdqugFT3yUgKf9SxVN2E4Nx5TYlf25VochTPWovMwuZM9kdQXEYUCc0EmC42zT1O6oSf3Fc5anAfaNjfqQ4mbSGks4hp-3pomKfXWduuZKlxJ4nXcpfVX9AVda0oZfSZhZecVpZ6RLhdDlQKcVXAVHhI-I2PECtVrzdta_lbR2bTRYQCJXS2maU57pnKx25yJrGO5onIrCRQtIJVD4jeQpHim159xsSAt0NathCVXkj_fOdBhbfKLamdIVT80hphRCpvE7LbOc=w1015-h384-no?authuser=0";
var scmEq5Link = "https://lh3.googleusercontent.com/Ja8aoTvJhNbWapyYomyPu_DlYYUP5s3hAELksDlTCu2b6idyA0aEQqx7nv4OV1pM--_TKuPymc_ngqTe9t-LhPfPWRjMFSTAKYNe4Elfhg1dNqA3FRnGVL4XeARJRgwNiv1H7RFGUHwS1JxsRH1hvkl3eU5_mPj3M1eRmjFJR2LoX6nvdgwMvKIghk_QZPYrPKruQ2NpkYu08Sbb8Ic_mOlfGS9zqFE4EokRXFUZdkxFF6LmX8CNVbgYAhGTG704t73hxoBeMGWjMcpInykuStO79srWZTI26Ck1seg5QfLexLT7Bhr34Se1ZBnUnnO1X0GewOVUCHsPjzDn7-KjOd0iz5RLCOJQcorfOBHb0jFv_QVGhSIh-gbDoTcdp5ZB8t3ZXjs60Rwk3FO1xxH6mGwhip7Mk9KVC-NdT0yz9_U_w17zloKSSrUNCoTjRytDi505D6NvWbuq7IB5cP--FwJBTab8pkM4lLo8FHGmLRudXRr23fWoxhPNIM2-dZk916UkDeB2W6e8aNrlOj7xOFoCgSkTQpZ5mOrM6fB58UyxWBkrb1dnDCWAy0rP1_tQNehPnV1MfDvGj0NObSbUIoono8op5RTM_5VMsPhuuV9kY5fi5CUtUyC8tSRtgdnQvyC3D1855sJc3OGOqVBlnD6LSzB44L4cR43N6vS9YvgZf_drdTjavjuSJmHLGvwe1IO-2xImV_9PSC2rsALNo5M=w467-h296-no?authuser=0";
var scmEq6Header = "https://lh3.googleusercontent.com/ldTvzabHadImvXqE_fxAlzfrGc3ooCKzc3ZLxipF_FqurTiLE7HZWWiXPLWLxpjTaqoxOdOuvayVuPt6zZClBzYxP3lV6ngdvsnZz5veO4gWklDwhp6mWvCDOo6uBXI95HHLOKrVQUAQnKcMZsG8DOiW6TF-AEhSSsyAiIGiIvImD7OHCVgZ7xuAt1655Q8Kn1Bw4HkPiBVEGORsQsOzkjOZpd2SmaQrn6Xzi6ARXtAfEle6ez2wDo3P8aUffCH8Ig0wFjMRpUXR4jKE2u7lvWscOOsPL8U9gMonIliO8aFLfpsYIKyoZnra_ioIXS_gHd_T712rh7EgDTrzrl84XkVyy_SfXWGu2DlqkEHeYffRp0Q01Sw4F70uHG1_4zMbLFfYqeary0dJbAf06QSg_DZpHmNQw-ZSg5JGOI-uAM0GHNnQl09JqgO6x9cdYVhPXpPncebCgB2B1vD9ZchlzGaKSMp5GVLztQZhAkXXC518KBtgWlNVTYlcar0WLM63aW0UX8DunCRwxNbVn9k_1q6uzGu8czix869yrahOeNR6IFLJ0n8-1wAVvnwERgp1EIKocHF7vr3DwMw-KCo2S2Vr9E5nI7p8SnYn0ws1Cc0McmRwh-8rQuErZATHAp97Pz7rGizLi1mkDP9V7dAl2wa46P8rYsPOF284ttqGH_HYs98BJw689JCgupSy_JyxIcupWWKXTogfmKx9JTMCHbA=w1015-h379-no?authuser=0";
var scmEq6Link = "https://lh3.googleusercontent.com/JZX1Fs0tEv4SqdiAqIwFHYPSeZ7BcP01wpCt4DtgFi4PS7y86SMydQsVSH4TV2j6ux7merg4NL6cC2JpWuWJDbeP6x0tRZ5q8tt3raivQxi7jG2mhEkQZuQIJcSELFsHGEFxo0erva8Mtq6CQ3RXCQBha7q9Gy7pKgmONxwvR4XtNfRe5Az9v238NFsHYic8BTI6G_bCp4uoClIYRXvvijR8vHb0-DGEU31DMN1R5UvdiGZ5o_jcy0fg1H-N_nqyXNoQtuUJT8ayKAaIHPIgdMP_cT8fUK-wCFvr48njcuq5JcBdu9h6dGIOUaL_F4snwWqIN6_bCbFuv4Ako1dCRy021JcBsHv5kBmgVZzAfSxRM3A6L3Er3pWaURmWtD9vRotZ4i9HHlVN7LvIBAAo22aYFfA8vLmwGlAqQlBkTAK5TwCVJNwYjyonMNAe3NC1KadkmQoeTBFrgT3I21eM2NzzCl36P-fL9A_6z10L_t7oV0v1Wa9VOlNvaLshZTT__bcwtpqLU4Qc5_cOW-NUzcFVTB5oLotbSmtnXsMdw1qcNyw57URR5DcKnHC6_pRIXXbn8jbhY_HFtgWecbEwILFjZoNLvHFEDNtF9fNGjB3ofrGHDDlqOLDqw0gKZMFfB1Ub4z-iNcf7s3824h5woKvoyNvF_A1m41yPjCsPTz--b_GFFzbetMpeGMUBwH1_Lf1kXfJS3014WaKVB_Lo7Jw=w270-h190-no?authuser=0";
var scmEq7Header = "https://lh3.googleusercontent.com/iTnT49mHEc5o-RnKIIWFbJNFeaWCnGH1z03DdcnrFNMaEcPc5ltjcAGMCjINXY5ivtGo1yVYUFkiD2JIYU6coCQ_Jflq6nCURGUZKNIte9yU6iUw3ed9Veytkk4oAQ9Ac1o8txDl5bWCbKwvUs_DeNCBEaRarfvlmgiVlnKvCOg9H0lHr1knYhnW_XFfwCEoTeIZhra4dOhyxkHFz83LPOLfljtI7i1NCw5ZRrV5iU4nyPMgKvke9CFQL_ZR24rlTWn_2qI91DnCl0ehbPyvs-7BVTevwQwgZC5UgK6h47rppCmIzCBl7jtNmc93x5Zm1A0MCm6pEcSAEfym-laPMs2yEDdOy1QxaxoE4xilH-RI4_U0I2KLWdqJspwjDntuwQg4WeTn4TDeMa3q6EdzyOJ_yMIjWJxz_SHmf177PXd8xiapdrfSiCkHQKrS9oaBg978PwW3f99kEYwsnsfVamzMDAqO-vLg8oDGERX0695mSH2EU7yYguBzhglrC1DnIl1_fWZyZJ3qHvkjip6rSH_Z_hNpVMFxIviOsKpa_Evy9kKBgh-M9vZUKhefZVmE4E-cTWvnbfUIwxGGUWWWvCe5JomgiLl7uaPHI_wFpf11akwSIJ_NcfqRDEf3hB-KyuNCo19p06C4Zgqb3B3H9IB5SxtCnyRS59h49G441qOgnBVr4Y2xbQelJNuhVDD3nvj-wutnPo4KkPLrt5myUvo=w1015-h351-no?authuser=0";
var scmEq7Link = "https://lh3.googleusercontent.com/H57hr1PtO3b5_AyO77E-iz42eR-JcrFomo8qjoPESyA5pnYAJ9rnQDYKAr5d_2a9MV7ZMfFvxkfUG36s7zdwwCQbLHyFVe2C3fLCEiEP0NIPrg_-DB8JmFmUKha6bb7wWt1BRgfMspyugvfwvXFBcTFeXGVWisf1Hn98RQTUhVZCZmBYBh8M6Se3C4QKuoAV6hKVPIAt8Ni5-R590mwDuE4DR3iMgMiLXEwg5vUV-QlIBUolbthNGQA65WmC787fjIQuiqM--ck3UmUj-Mfa9Du6_VLLPUknouxywzi9enTH3NWrY-kDWpC9LznYDaQ2foc6ZL_1kOYzOG9xylB9VnQua3tjSUZhGWMHEJmVOLA_0HuOC9qrtlj1gGsngRj49ZH40xBieGDUFU0ciz-GExnfte2YvQFFN0in4gC84qdlsYA0cDZSIRCg2uq6Ptt1oVYK5aa_gwersbRuA2EKBZ8YR4S0tSnlZdctwaJvc2owsiMvBltN0AfrC3tS7bYSnQj5GS8eg4PNcyMP34jRWTWZxgKePKilJ4ae165bpllvqf6WAtOJLRQbBcjEERiKZHxRpotGiAyk_Zn-MqT6pkcknsman1aczPEiLaxUn6TgmQq7Y4GLPzNTxzzPWiwtpypREMT93EU5YJzPvxz3selou0SJyALm1TOueHvF3VovGVofUWgLt3vOkLTP9tWvzQ4COLhZkWNTauQhVon-rxE=w314-h190-no?authuser=0";
var scmEq8Header =
"https://lh3.googleusercontent.com/OksZGepuVXdG2Kyz4YPFv_Je8GKLOOR5BzCL30pwbG1NaDGQuIvrxsdZ0gOhYYOTADspajJgULQnBwI8AI8hX51ru_Iw-jXmhFeIOu67k5-phZOwnAQu6lHffgdTWu_KZk3rJ_tKBHTefBV2G9RrkHAd2KsAr1GDgmZvzbSoXcd4imCD64l73mi0Bcym_U8rUFAB784nShXAzhvwsdDMoJvYx9Bi5jb1kpkL_9kjIJulG-RTUT9AzaGOmmLx00CS7oJ3l9LVM66yH2j-fSNlEfXP_C8J9EMWJuBxogRqGIda4MRuSur3xT3PlJnJlh3zBpsjXFS-fURp-I4vD4f26UbdSQr0VcMEnDHOh-bAeMcJHPUakH_uZ7K330ooTKJC0gRzbue_q0AbCESOmL9WteYkI-j4BNjM-R9X59SyBD--huM7AYLwiCY6etRc7qR9qRhvIpjbTIowZkLSnqHNejKoZBilB-Tyj3DC0Gs-wMHmqauDNCLaEFPApPi2ZjaYL_f5-5YajC5amXFs1lSSYB74yho9rtzcq-JB7P9L08WL7YDiYCyimnIpP0YiGTTCawJ5VcC3jLdthQ6RyAch17Zouuxf_SkX8MELr15M3Cgs-UexY-jyNM23LyudE6L7VuZmSSXZS5bIx_YldprROI6Na1OO8FI4YSucJ5nifbRjpnYgZ87UN5Wqoks6X0h7l7UjO3qYyZCp28gl2OJdTSs=w1015-h373-no?authuser=0";
var scmEq8Link = "https://lh3.googleusercontent.com/1qoMlgZWeIIVaXbGrj_We8y2IaCYIEWx8ZpmZErwkRVW1s9A2A8dn-ViZ4njz85Pw1Tf2XLNLjO16pY2M_DwLO3d8i_pOvJJypLe-v0WJYgD0TkRZvi4-WRAQgh2CEaoxDQdHLPiXROt9HxtlRC8l3iowttf-TZ1sgkVUONBPqFcVdg-iZFk7-yDRKSVxDW5Ym8VeT0oZAgG1MAVyLtWi7p34WrUoREjmKD0S0Q1Un0LjnCorPy_6UN7wzz5Acbc-eY_aVq7lls0bU-dlh-xv48asuzxi6kxBzTXKtVvACIAYEFMvI6wgJgeo73Be5cf0VOMXc1D49ptxgLzJzUHGbgnHN4ked0MfIA7xE-BaSVeS1dcn075NU3Kk42vbMn_7UMZ4P_yiZB2uzI5LkpWxCI1J4uvL-GDx4UypsL-TxWw4G0EJtWnVIL-UymtSISR8jvD7uQWEAKzUGe_8tGb5NR9RZPpvK0606HDa8_3zhIcGaopavEB8HRh41PaS6a_8moHsuZE_taGUtrjhPwkpk9IaCQCCC6lkrgtnXB1hV-BNizIbeUz7GUBLvcXt8GFlKy0gnoqvaKKCxVmsdFn365sZyzVwKDFO-EKNNPeLEnTViwGQCOr9qlSY-79srOFDVbFb9hJkqlak5ZpIU1ifZOiGINjxPL31yjyowWDIa9kaT4zpqatnAyf0kOU_YAWUw8em9sy1jAzwcUONFuCPKQ=w302-h190-no?authuser=0";

var scmEqDAHeader = "https://lh3.googleusercontent.com/8lDaclKmZLvdENgvMUl9AMxdW17eZwgQGNYvKK_T05Yg2UhsjjuxNOc8shKI7lvFMIkRildAX0BKRxVdV5Hv9WkGBZO7fNRT9IjtGMu8sl9m5kcB5g3L5sEP_hLxWQpPtts8vAQD1hW3-247y0-r6n7JrD3XdLc2PpfnmuP8cmOK1a_1DigbFtlosd7R4dmB2BqDIVHVrPuozHWuMzUzrlZAeSJ8qOo7_5LbIsWLJHgrWUCXjcjANmlBBSuHnK3lFbnpekqBzcxWsRUZjxhcZDjn8IFFvRTtlau9ixLPVmWB2SM4m1nMXKKSulMp1QPpA5wAX1yP6dtXjqQqbJX_HxEfj_CkCJh7pQaU-zYnHLqOsSKC_Iv5CpTmAc9qeFAsJM5ij0wVfHDYWPiwHJg9SvASRBJx6WXbOdBQL9KHxBJkLWxOjyo4nbTEHj8jiaUOgrxqs3EZne8jePLKWvFWOhSqhJ91E7IvvTP106wcDd5F1yUPUN3QNDT1ak2_-P5dYrrbwnQ1qeh87CszzM5Yw24GzQYvYELiqfYso5TpEQbWRN3j5l_h19JtZ-cRs9-ygpC2v_q2gsl5wkLkS_kSqL2zswHUan1gNHDs2gg_vicfywM87O3gu0qvy98t5PMf2uvX0e_2nt4XpogyIo6N21DOFyNJI8l2_to1KmQbqx3F43UED0Uxjp-ZPNzIiZFURCKLvONBabuMld_AkEm2Rwk=w1015-h351-no?authuser=0";
var scmEqDALink = "https://lh3.googleusercontent.com/0fClOHa1lwEJ8LgbrnZ9da4gBOBTAqayssOfvZPhhu04E9J5pNo4zYaa2lyYnonfLshPQHIaFV1E023OLyTdInOjdhZ9fuPLxZNwZAQjPeHaOn6CqqFXdmny6zoGctm3FoQmIMzx9u8o1upTnX9CPF8idjQO-X9DuWclxO3iEHG0XGvDYyNVWlVh0zpCMxPt_hp1DnGVMY45vGpQld-iDnhU_s2YYD1xQnY0r17BGm4ZRWehyj7osPloFgLroO0yTI7N3Dsoi7rzwKVSJ1SZ4a3f-ZgChpOOz6BOxP-Zy0pdOac0ggIVvxdiRWs5hx_SnlCEhp-53HJRYlTzIyndEWBJ4TreLz4jTpGzip12qLvdLXw-GSinQd25CEWiVWpi2YEKG3z6ZjrQ9tfetk3U7OmEnVlFG0Nvd8jyXt-rYckDLPFidfx_a0qL3qdKbv7xQqalZRVBbezMfKhGnZ5HAeE-LR0YkP6mfKtLN3YYQNTT18AdaMS3lUBvcnkFRMEGssTCWmisQo6chnXb_lsad2lRf51r4ktgeafnBKEIJLloRyos8MuXnbJ4avJNdlPD0zCF9vikX5Wbgx2kVBIa5UY60XqNWVITzlHhmEzOBjtmS05LrZcVaZvpi0AF3_TYvi9tk-WtAQX99L_qpwxEJNiJTH9UfDwNua7M7WyNMuBObQQiXj9NjEL4RXSscMHuR_T06U3MKCAh1bJbWPiM1Tc=w242-h143-no?authuser=0";
var scmEqV1Header = "https://lh3.googleusercontent.com/MDJC1xoa6R0m9vblIt2hoOmXhBDII99OTsHWx3IBX0X6GSZkgzHHDrn7HeXPTpELcu75hQOyexxA69Qtz7OJtdDW4Ga-EnD0xLew-FMVIGdZ6kYAqNbzypGBAiAj8iieJGwSBP0LwJHZl82d4rt80GrXPbtl4YeaE062F0IAMpWPghr_dUN1ERXVCWF2FIZp8Dw9idtotmeZiJkeORHXPE4nyA8h3aYSoD98VARXO5CNz8ivBqpI0MPMyN_NSVqkAqECOgDyNV7C2FsQbykTBH7RDTvBLzxycXsfWU1zAH4VoGLQzbRFgKSeDJ2pfFdxM6EGMUjJ5kf6l_pY6czs6VNt7xWjCIp3PQAUEa6d_A7Rh5TopK-W1tqj5VoZTpIf1jUU1xbZtYtk3a3LzU3-6YoJkcuH2UpJp8RRAJOxKNgnfLdGOXLM8THd1u8V-y2lL4CLyqo1NseWQ-DwgTfR6Ex6uc-1mmlyk8EPDn32R4pdFFt9de-2le81qPAHPP6b-f3INanWVa3JsNMASna5P-FLGyF0TmROl_WeS05tYn3bhlHgsf7NIUEOpwDiQSEvvLAjvqd0i9mk4Rx65AyWF-Yrd8iYcPTGmtAExbo0rj5Zp5ksff5HI882PFyx8MQJ9ENZHlxKfkLlYMZgCNzA10wuhbesx8Qf6XToIzMHtCbt8u_XTV1_c7SqPQZ_RNWQqEAaOBHLORf9mFV7qcCK11I=w1015-h390-no?authuser=0";
var scmEqV1Link = "https://lh3.googleusercontent.com/BjqIf8-iPaorkipVcPg94yU2uLh2mhLNj_jB6iM5xE7Lonq5ZIal6JtgVQw0GrCftPeyZrUDpB5uxQsyUm0jgQEMYwaLqhMW31TuS4Ezmh0qN8eGNFgvVmXffEx7R1Dcx_eeSa4CSZgLWJRkmSKaq0ajfhrbzDE3EULgdPFFI5bEryMxYl6p8vWc1THXdkdNc_scChJZqZeQJxRAm_0TWK2PlAfQyjwpJS2eIyQwEZIGXcw0nkEVK9nHstudT983VI9S_ndaa50XuoYkl0k6rtKQYuJtr49DQw-fB-SjPcg7MnizTlCddlQH1iiYzQPvhkXCHMU3LcKiT-hpThuWyFsDUP2zeEI_Gn9zdlRFhvav87l9Ie6gct0_7oLcsJQBdQs73d_rNf_EsZVEnMg7Hbw0_RDQQFzZ31Zg00VInj1jFf9s0O-rEFQWrnKNal9UvbDMq9PFxqMu64qABB7haOgtgvu6Fb0EP-DoeZpO-7PZuuq8qajGBwPQ_RCIrCqQEPaNkMVrCCmn3R3yRJn1oiPoB-YwIeM4JfrL8T6Dvg083HDGRqeB0pMBE_rn0GaR6Co33jZ6fRVm4P9Fie6OIFL8ymmTBGYPYbewG1Pkm7N5mWNkjxRMliuCtMzRtOrFN5abHDG_ILc4t2ZPwwbWIDvS5it_lwZIsViNpeqmElIpvlpDG6Us0FnBybzmYt5DOTCyvklHvAW8fSWRYbiksdo=w466-h297-no?authuser=0";
var scmEqV2Header = "https://lh3.googleusercontent.com/Ruvxz-c3owqxieY5KGS27Vuk3LqyyE8k-dz9LEPPCvAzyycSx9mJZx-BBmGo6x-UiKxq5Gok0C79_X1s-xku9pPxkNrxnIMNsApdfmr8Z1_bxWgDKZDpXvUQqrBi_Zufx_cSH_zjhYt0eHfiB_ypur1yUzcKeMK6bOfJzYUxRZQlm54ZRQ0_iuq9kwDoHFxlIqocNWfOb9OB4jOMRSMheUCBVnY-ko41ir1dAiA2sT9Wb9UyNGO5TA5HGHpWJxyPU1NpI4MGvJ73Tp5TKkx6UCxS8mR5pe0xygXdjc8Fb-F0rRyj7TcZF2rZ8B5OjlqFhmfSPftGY2ynGp1bkIwqQ82BT1d1EpiceHjjp7SnNI-M-R1FlbR3i9uBmtYEqODEfh2XPHUpgvPerm5xfEZnEs88QXZgnxbSZe5nN8B1GAUwrOwmYwI4heRPzTHXthgP1lbfFyFWo-7yG-H_Ulj7Jo6p5DKXGB29gEC35Qg577lXCtgwS4qvYr5DfbGsgj0OFz9Zm0-UF6fH5oxWigxPyZ4GyjjqbT_wWqT_cPYLsJ2ueN2Fnbz4o-qVRokw5KPxAQk7iebYAnB0CvhgTkkGxZtSk_rBf8e_kXdwunri9j_ixC_d760AcHEN2yP6HNsTIVTAi_IeT5UHp6LvXORRaMH0OVMvVzbp4-ysPwRrSvnmQz9dJjTpQTovRjol_hwBM0h4WksiJ4O2r0ks7UQI8Jw=w1015-h373-no?authuser=0";
var scmEqV2Link = "https://lh3.googleusercontent.com/xbD0wBL1hzlVVFTrfHxSs9Nk79wBUwtauRTjrS4sVesYtYg-9pe3b5QRSK9cY2-n_7cg4SzkabhBAita2pLDh3gi4jd7CnpA2JcH6EAIbSnHpzqlQ1lmHA40hfvHRJDJC6R4qFHImYKGi0Urr3JsSHo6ibyy4lA1hD3t3Ls5byUzwaSkIO6QJLkG98v8DS4o2PVspPYNwKuZBjEi-jjWMZSaoECnlK2F1mZXvewosPYfqIJPBCocc6MD2j_vGaK6ESMP5GkisfQgFwSsAZQts5LlMFF29b_kNEUnswylLhRuA4hCNkqiAil-1Exs9WYcnxviDbI3uLCOgbCY4mNtOot2ZIaN1eY9Cw3j7GubisGxVWbhsLwkDww1Ti6PPwsg3811bRYaicLsi6zrI1W5ASjOCQpVfUG8Aw-GG0V0zyhY9KeB_JOtJ8vRnxkb7UGcDOzPoIN2Zkyv5fCoLCP185kEAk-Et0EhEOL23cPZwBOYKBO2Nwws_SwJe3MQWweuQ6AosWm2jxbP8Mt-AeDCE5fk1fpOyuzTfVZM64UHqoykxAmrw4t8TC3u8PGzZDWVBzxVZ6zzySARpMlLDrULGGsg9FNvoFkB6KpZihA93NLuudEObNOU4iwIcDYQEnN664QFCRrUTzsbZzHTgbtptDgrB7AV_03xtfayruPd8gW7bn3c3-v2Op_xnw6bE6h9GgIeeomkS36sXbmiWtaoDdk=w307-h190-no?authuser=0";



// ********
// * News *
// ********

var nbrNews = 0;
var newsdate = 0;
var newssrc = "";



newsdate = 190605;
newssrc = "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMarinersAuderghem%2Fposts%2F2332587523686658&width=400";
nbrNews = nbrNews + 1;
lastnews[nbrNews] = newsdate;
fbnews[newsdate] = { ndate: newsdate, src: newssrc };


newsdate = 190909;
newssrc = "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMarinersAuderghem%2Fposts%2F2403223019956441&width=400";
nbrNews = nbrNews + 1;
lastnews[nbrNews] = newsdate;
fbnews[newsdate] = { ndate: newsdate, src: newssrc };



var TeamsPageType = 1;
var TrophPageType = 2;
var SponsPagetYpe = 3;

// ************
// * Sponsors *
// ************

var nbrSpons = 0;

var Chal15Spons = [1];
var Chal16Spons = [1];
var Chal17Spons = [1];
var Chal18Spons = [1];
var Chal19Spons = [1];

Chal15Spons.pop();
Chal16Spons.pop();
Chal17Spons.pop();
Chal18Spons.pop();
Chal19Spons.pop();

nbrSpons = nbrSpons + 1;
var spLuxLimo = nbrSpons;
scmSpons[spLuxLimo] = { Name: "LuxLimo", src: "https://lh3.googleusercontent.com/emrVdlVeuTL_xNEXt45M0aIe_N5BPr8JOj-QcK2ZTahi7qXwJ0lCNUduR3QKgwooJkGFyK7lOaKnCA7-QECTzx83wSQok3FC1XMLd8EzaQ5qOsBv9Cwoe9uRJTTQZ64OZsjo1IX8dRaFU5OMAjcBvIzO6YOWVO0kPvzUwmL3ZniKczrJsmzI5Z-YHEZc9oKxOJUxykxBqW2CyVz2xjMGSZwZ1O9vKgvlLvgJb_8RwmrMjNIl4PW5aNvQF7UThcIacMTUAQhzMaXvggmge7CImVTGzo1D0Uyyxfb6qbOHuyUmpsQ0kn3gc6_21wBobA9Kf0oY6uhnqpBiCttuONJ_UeVabxOEP-c2Onh5MYd4kBYSPGdtya7B4GmXpCcleXIj3qIQZv7tBNf8iuwVS-2Pkjad-9jAesUpLEu9oorwjI-XjkMXH5uBbUWQ03LvKV7u7CTmRHbtCKGjIYgcIpixJuyS-poGonmoUKFQ8HRBy3pG2D3ZjvrZc7gMQsMP-WnmbSIXgfgEXnC88nY2S7Y3j92VK6e1P8DugISMTJTBNv7vLFpzvqNxwunNXFrB00wpW5tyhBEwRrZd7_1fq7lEEN92FoGzOb80nK_y0Q2ql7eLzT-H2hj2PSdfZV5lQhxDoqpM1Q-GkOzR_AbMDP5A_OfXkEBkVnjFhUjzbvykEXAiLt31gbp3YKbocGCZ4fi7jZYERU7_MTTzNU_FK4DS2U230LysWtbkdcxvszoJS4C4fl8=w901-h598-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/luxlimobelgium/", webname: "luxlimo.be", href: "http://www.luxlimo.be/", target: "_blank", texte: "LuxLimo Chauffeur Service", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal18Spons.push(spLuxLimo);
Chal19Spons.push(spLuxLimo);

nbrSpons = nbrSpons + 1;
var spCafeLisbonne = nbrSpons;
scmSpons[spCafeLisbonne] = { Name: "Cafe Lisbonne", src: "https://lh3.googleusercontent.com/x05BZDoS8Vdv17IlOeiFA0o9YkeRtNxgz28V_UqlYVmqtukl2zAb9fxe8vFLmuHKzQjlCj30CG2V8WJre0gkZrfvEE9ovTQEp4uWUAWQ6xKI3wpU5jf8no_A91RqeQxeQcqY72xwvqx0BALNP3L7Rb6jq9veDyEFknOdXyOgrQiRNCYND8y_uddUAFHyvFDxsHhZBpoBfJwkNxYhK-38lfkB_B9D_9TQolk7vaoSG54mbToA-5bM9pMnokTmvDnBeOiZzbml29DmDBMnnCwqO1w65CiPY0EFFBwBgMCGsXEtXBulE4Mb8Y4tQPyqR_x1V0krbJ2PyX8Vt_0Refq_jaTC9I65-i8wo2y93hPnST_kR_ITh1fWjrRfvdub_-_OOJoBc56d4U3VVv7_QgjIZKn4Qq3E9YgTmuxvoIe_MONoql0FDWnwuNYq627RX3hDj5lAiufvyLCr-LkzQVwricE5DJtkh_uxdUQXFiGWO827Vd4WYWr3CZlosCNSDtObp-RY77aa7D8LZHJQQmyAa0Df-elJKs6Vb8vfZozRLtdQBunUs4_dd4HPUoKL9xdlg223Ve0muSM5ofugYs_loZvmheQ2t6CtmaeSmQI=w178-h144-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/groups/633374760479323/", webname: "", href: "", target: "_blank", texte: "Cafe Lisbonne", infoAdr: "1050, Chee de Wavre 1160 Auderghem", infoTel: "02 8544917", infoMail: "", infodesc: ""
};
Chal18Spons.push(spCafeLisbonne);
Chal19Spons.push(spCafeLisbonne);

nbrSpons = nbrSpons + 1;
var spAuderghem = nbrSpons;
scmSpons[spAuderghem] = { Name: "Auderghem", src: "https://lh3.googleusercontent.com/dmTpYMMqJj96IddVNPgblIzlkVxSthzSV3Fdnrmz-khbluL3eha4zu9zV1gfQ-r9hX8s3ou1E_cIEiqkmrzKcB4o3bjFsYfqx1h4toQMHG8d5IesjyAQJSRjifq3zVDipogsMTS-crUFCqz1MJcQCr2Uzi0MTsFJoPG-rJSQtuEZaD2-ZyWHF6Q2PlSoHYtKhgj7PRiuouwDyTgTBB7ddSxCnLsX6O8uScKUtdw_kdK-WrtEuvSWFCs_r0B8KUwW1gvKw54U_KoE313BwV910SyTIeqtyo4HrUbQguTh4iHvzjtfZLMEPhh0aJvLyPmG-b4P1mVPg6-XbNLW8kiBJay-T890ZgXOq8z-jrN2fhzmpTZablll5a4_iWY4zcV8xkAH53kVA38DJgWSY4pXHImlA6tcr0h09B77Ll0Ai9PnZnpu2Tw537v5sVf9wkKvYeJb-vPoKsg1elcsFYwlcEuymaaapgOJPMSsBHfFTfUhO7F8VdIRL48UEvbAScJpwT8I0PibhHWv7QECNS__wqMJ7KR_9MzabTH7RNkV3YLHPs4wl6HyvH5cJmAaMjCrVBjl0DDdMlnNZ02MDUM-zew7jpcErVcWUnAj7VRdIXb_UPS6Iy89sul-vPzc5tc42FBaVFR-toF3np_aBS61zl0bSfBgNhFfGQBri4KSSQ4LwLK0Ebhi7SvPZ1Gb9TMuQd3mUWhGAPQHTytfDNhwhF5CTFemysUxe8AD1Num9TfFD6E=w550-h730-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/commissionsportsauderghem/", webname: "auderghem.be", href: "http://www.auderghem.be", target: "_blank", texte: "www.auderghem.be", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal16Spons.push(spAuderghem);
Chal17Spons.push(spAuderghem);
Chal18Spons.push(spAuderghem);
Chal19Spons.push(spAuderghem);

nbrSpons = nbrSpons + 1;
var spLeSaintPaul = nbrSpons;
scmSpons[spLeSaintPaul] = { Name: "Le Saint Paul", src: "https://lh3.googleusercontent.com/HR2cTYnrQI9qeZN-05aWjz8Ay60mUbrnjjlBXHkvpJ49mtlLM_pZcUYhOs9VV6BAhVuVFtp3utGt2ZTrVSja47z46F6pVQ92Tg01GSRaqPCq7uHASPveusz1_ZmGnHR8aC65hpCT6g=s200-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/RestaurantLeSaintPaul/", webname: "lesaintpaul.be", href: "https://lesaintpaul.be/", target: "_blank", texte: "", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal17Spons.push(spLeSaintPaul);
Chal18Spons.push(spLeSaintPaul);
Chal19Spons.push(spLeSaintPaul);

nbrSpons = nbrSpons + 1;
var spFunRadio = nbrSpons;
scmSpons[spFunRadio] = { Name: "Fun Radio", src: "https://lh3.googleusercontent.com/zOrGzYecmBuXOViBpJP41fpH6KMfjyUi5Bw5KbbfefhIUxyn52ItlHdCYAflVkiovZsWoLqZXYuVmBaR2DfNZLG51ohceYtFrW5bnGvxRSZcsMc57kGg9ucbl9GyWGvb84SeMCQpP95wK8ynRbuUkS2aK7VoCJXyIiTABwtWB4vFuR66Thrrt-GFVomcGGs2U0a3gm6k-MjxQK9MSEVj5hhuG0tk0Ln7W_1GXCRyyeteIDiAFUUe2xXadTU2aDtNjZ_L5RK7iSf50PkTTbtg0Q9Lb4n1-BMudTU0PpoRV7b9iudMiyudsvv6w8AE73vbA0RRW7k1F6DY3vZnq1KMzqmzg4mlgtZU2_Kf9r7tBisr06ETKBaCQfYoFVyJ4XmPOURzzVd9aiONRo383rBPkNLrRBgxHbUM_V-sXdCp3JMD2YQoyt25m18wCGfJ9MZIhYrEatF3YkcWCIBVNfb02I1ReVWjVnxjxGlwFwZVXMDAJ-VTRyB6XPnWKbpNZ-hC4A8YZcOWqBDT6ay86gxV19RrwtpomkLgz8hHsU0O6x2sUQFxUroJqh6NsMjcKpbCKDRKtQ5owdxmWerKQ0rfcrTlKnRobXyA3mQHQPb7Jcohka3Qs8k36cL7fenlV5s1IYBf-j3KU86CMwwFMFE0MjGH-f0WehSVuv6z6g4ykLj-90SFVn5GvbFhx6Lru0pSuPCAc48mgVDvFL-52yohDrOA-TXoiRzOwPtRqYQuvj0aZ-w=w901-h341-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/funradioBE/", webname: "funradio.be", href: "http://funradio.be/", target: "_blank", texte: "funradio.be", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal16Spons.push(spFunRadio);
Chal17Spons.push(spFunRadio);
Chal18Spons.push(spFunRadio);
Chal19Spons.push(spFunRadio);

nbrSpons = nbrSpons + 1;
var spOostens = nbrSpons;
scmSpons[spOostens] = { Name: "PM Oostens Assur", src: "https://lh3.googleusercontent.com/TXfnc01ZrmOEBpMtZyu3N-i2yZoh5XnJ2N9r-Nnqujpsb0AIPjcsrim5dUoeDTUik8DaFHMRcSMS9oXaF6WMqnuT8FutHZfbFFAH-XBm1rFxXOusqBWiKdcGeMwEo0wYA2ESMkzhk2laJcoYgaXnLBIjb0UNZb1zLSd1e699K_1qAEVWATtCTWfebLiY1XO2bD05h6nKCtVWv1J7BLPOe1Oz2rbrhY9iFl6u6MN50Zsjr_3VCWd6V7NPT6wsuIDGi4Kp6f4ABnmNvLiuoOk-3qlSZAQhNUuQBWzDgRp2cv0m5dKPlPHqRGjtT-NB-SohZYRUsqTKjxGQtgbJI7SN3tUl3R_6rsx-kWgqAUr08wO6dA3FhoucgXwDsgkuv5gYjNxa7SR-K33d-0AB21_kpu7kwBZYyKZrii7y3QSHb0SAthkJo48vRTcHr0QV-_8-gjoy6NLLLps3d1fvF1fYz3sVGMNY-KVueY068Kft2iKiN2dOFz9hv0AhKdj-5fN59Y0nZQ3g8Be6Cb7Rl3gihVymKAivGRI-NFpGDmpDxKYS-9sDx7QP9S_CyIDP0Jfea0ztJoQdZ6tdX2aO-hdQOoc1ooZt6yaEuaYOodq-qGhmEFB7PnfGJimA0zKxkJehUKsF5vdfWTvNiQxRW506JzWXHHvHP_kRmkCcFWu3kA4j03ATbKM5iSGdcnoKbHvXw-bULFcv-Udu-mnSRaZUhZb2ibUzIpgONhfE9tP5g7EyiZE=w232-h90-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/PMOostensAssurances/", webname: "pmoostensassur.be", href: "http://www.pmoostensassur.be", target: "_blank", texte: "www.pmoostensassur.be", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};

nbrSpons = nbrSpons + 1;
var spPepiniere = nbrSpons;
scmSpons[spPepiniere] = { Name: "Pepiniere de Boitsfort", src: "https://lh3.googleusercontent.com/jPD7hg9RVHOHEpOnt7y9JQoVEVEG-o2KsERHGmZej_dFJmSLe6sB9TO6lwP2WwrZfKaGcCXU2govF3yX1O0vrR7ss9pfqUiqjCEroIf7RIxWmDGgXzZZmVs38hETY3SW0JPQOuIdcOTQh_dm_aMIhs2bYtNfooxYHvL9jxy0UMc9oWG20HIHFkZJHv1r6eyoP2UptXiET6x_KQ-xxmTox9HeJgKYXb0gE5dYdHm4pBwDVdX-AU4xnYDAnsJTNdTYDW7SRjfv4wT9m2CUL_P4DmGk0KWNj2V2GXYaoZ4_wKa4fqxnVcyUVj_OhKXW0Veq66V-AwZsNKrGNq8ClA_qcrkqdRACkvIJJ5-SMc12WKaPfLdBgF2672Ye4hAPrVjuUW6NOUb_m0UEfs1tc9DOPstkk2DWjeIjmPRJFhkllu1OZ2CuOlCAQntpP9PjjKHwvNwthBuxjFykfqiXZlNHHgT8IsSm7Q4S3KSblSSG388dNk5UQD0F1HmP-aKw41qz9_dFsf9d2jn8LnikhbRuSxTNs6GZOjtZuJa8z40A4BMNuTdFwVbTR9AoyBSY_9oLRcLEi9Y9lwOIhyL4Oo4WJRjj9CsLfcU=w1003-h167-no"
, width: 220, fbname: "", fb: "https://www.facebook.com/Pepinieredeboitsfort/", webname: "pepiniere.be", href: "http://www.pepiniere.be", target: "_blank", texte: "www.pepiniere.be", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal16Spons.push(spPepiniere);
Chal17Spons.push(spPepiniere);
Chal18Spons.push(spPepiniere);
Chal19Spons.push(spPepiniere);

nbrSpons = nbrSpons + 1;
var spPrestige = nbrSpons;
scmSpons[spPrestige] = { Name: "Taverne Le Prestige", src: "https://lh3.googleusercontent.com/ybaRlf7LMfCL2V9fvCcbU2yexarCmbfNpOHUo-zWlWTHWAgW8Y7wdyfRSd5OCKo9ghvV8EIDZNT7CWxdGRnmbPJWpe_rZ50HUrR-7i_oWCIspo589-r8aBPUgnwfxc4fnGwoqvYfgQPP44zNAUNvqXUkz_aTGi89ajzTM8SI8YSj8xanel6XTpeKrF9m88p7v5nn9eB5YqRCkIU2irehg4LZ7rJLt-Kje648h3NRwMiV3oc-LfH5-uo_JbQ5f34lOqE7fXHlDeShXENetLl5YRsl0eb9MVvodAgzjDKgl8B6l_nUl7rZlC4mVvGy2XvGrcxpSKz3bcFvpUn5LjmBOis7W0H9X5HxzPUNo7-gmmvCC6BY3teYrveciZqiSIjSPSRwSKTCRwYs5-2eWUxYoRqDURmVOlp3mm4ftpc_xVN2U-jCyAovkKFe5qRBkCs24hoBWWOGQWapA28XpeXy7gm5xawtabw74WlgBbXgL3_3xY6Y6n5ucDSoIAP_M7Ii0C7k0A_Hp7J5fmVzUc9XfXwe7gVi5iKcg744RzF1luRObIsbhh9i6b1wzVqmCjxu5J1MwCGYCLZsOkNjSvJC8WaGmabxJ4NgQGurzqUXjLICftOBo14RmwAl3-mfeSKa9vIc-ek1B6Vw4-t32Am7zqIL2NWsjqCxmDewkpDUsFD-yWf4h409opBgjA96pqWMiUBM3QWFI7iyN-maPfc8VA3Ls7EmGd1X9NEg4es1UwKd7DU=w901-h517-no"
, width: 190, fbname: "", fb: "https://www.facebook.com/Le-Prestige-1382095941911177/", webname: "", href: "", target: "_blank", texte: "Le Prestige", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal18Spons.push(spPrestige);
Chal19Spons.push(spPrestige);

nbrSpons = nbrSpons + 1;
var spNextMove = nbrSpons;
scmSpons[spNextMove] = { Name: "NextMove", src: "https://lh3.googleusercontent.com/Aeq1p8x6RCJaed9bdcJ3y0A9e8AVQv26pAZwqT2kwOZnB6vOlDjIDMyfVmXXx1hNJlQjLq59BhKIJJ57Xc-uKgZZ0LIu4Or7jzP6rUDbYqkw_DaX7f3ML8lz5kraniJCz0ThUfrCks95PuwaTPs8Q854417bD203oBrQlhjbxovD40YO97eKJoedbz-VDL6JSG_rqxxzwbB6KBw4QPzH0jmzEp5Fhb6dE2XdBQdzfjNLGE6EkFAtihln17yyTIdFI6llrooPs7FTYy2BN-ef3FXA1diXj4ytVTA7LN5XhEdMF6wud0NuI5l9Bu1hUzW-C7NXJYtrOhnYrKR7hmQ8ZmGj_pBM7WJ8Un_3M4TEEw2gDv4TatpmuOe6CyaY1vRWVkO4FmdAgOJlUGqoC6jF0wuoSNIqX8JjA0mYPaiRKDG2XPwbkV-MmUW48netHAEBGK7KZKIRbMUygxf_5MnGoYIZ1_f8AnnK8W8PKLjo27OuHI3aAjZ4O149znNyDT6Pcp7nSwiwIUwWwZFI9FnIJV8nUL1YH7X7aTV-9-YZHOhBoRBecxcbzm8NQAVZbXhsC16--7NC7vfhVpfqJHMmiTlUYaWAVZA=w500-h172-no"
, width: 150, fbname: "", fb: "", webname: "nextmove.be", href: "http://www.nextmove.be", target: "_blank", texte: "www.nextmove.be", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal16Spons.push(spNextMove);
Chal17Spons.push(spNextMove);
Chal18Spons.push(spNextMove);
Chal19Spons.push(spNextMove);

nbrSpons = nbrSpons + 1;
var spThema = nbrSpons;
scmSpons[spThema] = { Name: "Architecture Thema", src: "https://lh3.googleusercontent.com/HbkVHUjH2Z0OP2GZzuBthQ8585U8LqOkSQWT-RpqITvo2LwugVSCoOqa-4ZxrpsNiRfEGkVGMY-RSJIud4yi6PgIe6bUhUUtDPmqgMNA7C51S1__iIGkz_0wpJkeu1T3b3FQ5J3OKcVsBezjhGT0ePpgx44sxIxmovNC1v8bmj6W18mQcpygTLN1p9NV3o4UiktQ2CMEg2lqZ3PYg9eJ0ey4wEo4S-jFzgAwLcMiTAaLdgtSGajG3JARYL8pk0d9Z5jkQwe-IPT2ztPDfSp29QMs9pxIEexdVpqDIywkIfqL8-sbt1GAgSjv3BP-2-6-bN-jHc_-LP8fjsd4F6Og9UEBpOTkmaMw9tDejNg7oRTDvgWiA2CN4dav6xr6G2Vxl2nR6ZwSzPcgX_40XyGkOOfE3sFch1mazMaH_W_rN_ZQuhpaP3ZyxJAs5XNjyQXa_LaQH5Yled_-Pvelh5DGjh2xq_17VNjZ_YEJURv_-Kp46jPv8_2sjELSYA0A6WjmQab8evDYbPFVrs-PUTFI76dZa_RwmnqbWIh45frCIL04WAdmAOW02j3JJL_gOiMO1whI-d01GwPYhAphRn_-7jxUCICy1u8=w567-h381-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/pages/Thema-Architecture-sprl/144519205601293?fref=ts", webname: "architecture-thema.net", href: "http://www.architecture-thema.net", target: "_blank", texte: "www.architecture-thema.net", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal16Spons.push(spThema);
Chal17Spons.push(spThema);
Chal18Spons.push(spThema);
Chal19Spons.push(spThema);

nbrSpons = nbrSpons + 1;
var spDestiny = nbrSpons;
scmSpons[spDestiny] = { Name: "Destiny", src: "https://lh3.googleusercontent.com/dQ5dB_3TPNzsGdmx16_zbZ8OycrKfnkHeZfx2kG2qCi-QleE_6zI8Ryv64zaOgN2jLRKePMLPIwiQx2jMXQwLIrnfVmUUP04HAjWkQcjOtTuFZbswOIHJGAZlNMui4JHgduKhDZfU3eF1WrLMyliWroBpwJ4FEX25_1axSmVC85SDIdE3Uchf-1qkO3pgGtZh3cmlqyYXk5R_Nv-zSmicKjhRAsRS11iLtXPWUqtpDwRpLeTYx3q60GWN7mXnd83vRL8WWRKwoVf83nrT62-YNTbdZ-GFGwy0O6FArdINZiYabP-TYw65yBuDzr6GrGtFORnHetMinVli56w7hYWtvxOqamGr3qenITBf5XT_1mpas8VZUJyChficUDIiC91jjACunpbHdZ8iVWDmOK58qdkSvcmFO31boSbkktZTyStcAkzB6sfxNhyeQEFOVzqMmusx4z-zC7nud7Zzwl1hfaExw2UsibRodzOqmWA8I8mRMAUFNSUuS8rI0_Wl-Mzx28V6oHui7eVNnh3oyzbTbdPdhlWFog7iXzGezMdJlj8AkevriogR1BwB3tHG_4zQh7Pv7otD1v3mC46S5mh0W4todODGjE=w640-h216-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/destinynv/", webname: "destiny.be", href: "http://www.destiny.be", target: "_blank", texte: "www.destiny.be", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal16Spons.push(spDestiny);
Chal17Spons.push(spDestiny);
Chal18Spons.push(spDestiny);
Chal19Spons.push(spDestiny);

nbrSpons = nbrSpons + 1;
var spLongchamp = nbrSpons;
scmSpons[spLongchamp] = { Name: "Taverne Longchamp", src: "https://lh3.googleusercontent.com/zIvZT2BFi3E9i45ZlROoMCIp-9Qu4Dzhg4YpxyccH5lMhqAHZh2O8aWtZ5PltvLjJhZOGTYE1uzXROkk_LgTeQm20rA4Q8rbdeKea30wuY9CZwhUvNythop1BlZ41IZHj6B5RPfsLzkRxX4pT3TRxUo45ZvNKt4pHYRZPP37k93bRTJBnjztYqsKCli6LmP1ekOqinrG6ag0cDyG1AAnh0Gevr0wklMQUAGyA619uw-_8faiwdAYMvjE_uhRKW24USwcInUcXG_qzVyM5hcUzARS7v5MGuZz-QI0dCTtmrP1hcUrAUtHkUsdbjtrMS7h4x3blZqtWFkmjoIzMS4LSOyAAkcxJh8yRuItSpz3_mfW5KTVr1gMHAnTeIVIbz3BALy-HswWaw5qAy6QgOGpgFAhhEOjyBwLeEw7V5PqYH-G4AgGj5NUgbh7y-QuWRsq_A3Mllobau_Owd_pCgzjJFGSQ__6gCW4LnGXwY4tFHXkszNFe2g8CERuSXG3d38wr0aQ210NUZGOf-WYw8X4RKMz_ImY5UJLYEyC9gMkfz1qjcsaHrb7Y-IURyo-Llx1Gr3uLNqWJLJ7v1QX41gRJL-hst9hH5mmNx-6zzDfleLKWdwMXt5Hgny0zP5thSFpC5sLAgLFNmn4Tl403dTFwD935PFpQMyPYolh7Nxm6ho5q2M-q2IhwWO6QgPzPug-UKVHoKOGJlOfPevsLGgodYibZAsK5ur5kfq2hU57lZr7N-I=w901-h421-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/pages/Taverne-Longchamp/116047109100970", webname: "", href: "", target: "_blank", texte: "", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal18Spons.push(spLongchamp);
Chal19Spons.push(spLongchamp);


nbrSpons = nbrSpons + 1;
var spArrosoir = nbrSpons;
scmSpons[spArrosoir] = { Name: "Brasserie l'Arrosoir ", src: "https://lh3.googleusercontent.com/usgtsbvt4WWgoD-mHAOZokKIsOn4C-U_mFHNCeB46Nwb4KdW26A-sxsr1Zjhs2xfSQT4cRXEAwdKX31P3Ibn3LAS7p8Z7sH4h7Oj3SZuKvwnM8qXv2R8UttZCMh9ksW-hLh5y9gyEzAafeE2N-x-03e8hBz8oSjpd0HZ7ppyqnxbklCPD0K2qW6fnwKyaG_IuwsTDKzW8LzzNFallPj8-Rz8PoTirpq7tiFRN9DbG-QVSpDZA-5PPIw-EEEUHyHnXmOmXfjYIFoWTcuheqgxnWtzQAUGSs3mWI6wIXkQQ5Xx4PGafptBVUCiOt-mg9jkJftS_IdGeTFlSC0Imq-Pn2t51HHy_bDdRZp1ZT0YoQYpLyEH4KOOO5_KWXjXA7mlsMQX3zKqbx0qr0iUbzt2ZjEgiWgsatquwEgH_oGZ-Qat7S3LtlXmp3c-fDZSzikVWDmW1gn5BuKKnCqKRSaFy7VHdpBnIvq27TveBA79JU_HnaEGKAczPd7G0kdUHhZMjGrJvQh6oeYnPcZuRthoXiKcaTpR2ocjxAJTXAB0dluZNSNaA4h64zRPtR8gOi0QysFr9FJRambGhLJDoAVu1kYgWF5KWig=w416-h53-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/Arrosoirauderghem", webname: "arrosoirauderghem.be", href: "http://www.arrosoirauderghem.be/", target: "_blank", texte: "www.arrosoirauderghem.be", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal16Spons.push(spArrosoir);
Chal17Spons.push(spArrosoir);
Chal18Spons.push(spArrosoir);
Chal19Spons.push(spArrosoir);

nbrSpons = nbrSpons + 1;
var spQuick = nbrSpons;
scmSpons[spQuick] = { Name: "Quick Kraainem", src: "https://lh3.googleusercontent.com/qt3W3-fQ2ynpklERpdoby-kpPFB2n0NEqCgWyATdHQ0wFyVaGZNqsyeHXpg6N3VmvIFQKfaTQ-aYrzqqnKddkdB5KHpSoRvLgMs_723XkWjcqGhSiYhZAjDEzp1-7oDxBE2ub8mIQ8iIvbuO9-ru6zoE5ybxWTRkSivlcFHmjMFyxcwO8FSDwWkXWciqDHzROVAsmxcHvwGlWrPkj21yt0AlSNMcd93HeQAYXuvchUSCFjPFB6UzbYz310X4ICuL9F5sgUShoKTmEDAKuKdPXYy3yIlrAHp_CU_PK_EWEoWDC6g44OrolQYk7Zj0sBTduVGdyqy6B7L7GV9bCmk4Tvh8eeCRJDvpE26WL90RchqLLuzgRwOpVCuqgLPxa1a2Oyore39LRsvLZD1CbRn9SGNEaGhojW8F_l6RjJ2Wn3abjCgrezbWGf7pA6pSQi8FoaIcenC9LPbHpFAMqRcIfP2yTtRBFQxethjqZnVcZBODfrjLboIuokGOUiOYgdhRHY1zfYFiInDdEaYq_F43BEyt89Vdq907xfRuVFJv4kaKplkjcd22WUH7-YM1luheoWfJ7R1Gi6XqW-sLh1sILvpUsLQFDfI=w999-h252-no"
, width: 220, fbname: "", fb: "", webname: "quick.be", href: "https://www.quick.be/fr/restaurant/kraainem", target: "_blank", texte: "Quick Kraainem", infoAdr: "Avenue de Kraainem 50, 1200 Bruxelles", infoTel: "02/772.74.59", infoMail: "", infodesc: "Hamburger Restaurant"
};

nbrSpons = nbrSpons + 1;
var spColorProperties = nbrSpons;
scmSpons[spColorProperties] = { Name: "Color Properties", src: "https://lh3.googleusercontent.com/X_bhesBaNzbEYJIbJ8k63mVghaLYfTci7Oicd5ht4eihcpUyXeH2F2rzRG4p4c05rYWtzawniK-jEmkc0WN1W4-gTsADTQXuOjp8sixgmu4V2wLye6CPbGr6u3-fQE87hzkb9VAoXD7aLVIxQQVc9KFwrY5tmwGuQQus-h-x052Izpcf1biHrElGfrrMgymP4-rebYrcLYq5SAQ3PYLL4APRyIZbIHRCSAqh7hC9eBM5oXc-gXLzt8hVVgYDg8GEgbn8_AApSMVcg-y-Y_kbDcS0RPLi305PxL5AQFoem6dHhT0FQWL0Tq3CHJbA8OkQ5unROE5Bbu5YVhmRhWyJ-sOVjLAR0dXpmpy3Bn8Ge9OfmBNWGc9rNz1FGTlJs04DfK94v97LbJpQNZ_nhy65buTeVbcmybBUOTfzY4yA6aaeas4FS928cWm1bN-RO7kKgolWN4zK1QORJiJFEn-rW9L-Y1L2HivJQkJaIW2YDQashj8nqchgP3NeiP6nL6bRiEVI9R_T4aaQViBuove2zErqpki1ncd7Gc3wkYwHjY-d5lASdYBMjjqiO7MHmNP6kGk5dF2ccA2dccK58J8t9tU5BSooUMopz7_nY01O0k7ziShW_kW3PpewqSkQa0Ss3WNw9aQVOxzuMByis-ZvVfAVcf4BgvCUnphwJ8wSVAlPOt9GIbPjIgs6dh69SoKIldchDrb3Uf9ZzGuWY57NkuFTmQ87BgNV06NNqqkySSJLps4=w901-h602-no"
, width: 150, fbname: "", fb: "", webname: "colorproperties.be", href: "http://www.colorproperties.be/", target: "_blank", texte: "www.colorproperties.be", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal16Spons.push(spColorProperties);
Chal17Spons.push(spColorProperties);
Chal18Spons.push(spColorProperties);
Chal19Spons.push(spColorProperties);

nbrSpons = nbrSpons + 1;
var spSirre = nbrSpons;
scmSpons[spSirre] = { Name: "Sirre", src: "https://lh3.googleusercontent.com/bcNEvF0nuxSxZKAL07ejn26W4AXFilLIyMM_LtWgIT815FOwvrQaLOGxv-jGvgKgVBlDPVyv9pl9JAsYiuah3Kop30X1Cq5i42etLOddKEhySUsEW0fLXxPi-VU2hxj-Cdbh949-7rkU9vjdU9U1iM8k5U2oa2vGkIF3jiNN_iC1gwMehBEdHvUxhh1SBKbLd7cxvYfj2iE7rzfhr3O2t40icBB-Q5bSKdWt8iqf91yVfe2G610lxwcWoqsxdBPS4UVtj_zT5RAZnUCQPv71YkZfkFE29n9D-lKAjlMc0EEZSHzAYMWvP7Vyh1-511cpqNR1sYB_Bp_98gjDDkjBqEptkUNGDxsm3GzVeY_kvCL67kCUP2WwcJjRUAhGzAZ5gshD5dcq6Bz9SGEB5_uoOiQGPsKGTSMyCu3xv1Bjpdb86D6Id52RlsoQl-nDL5rdLh5qOLnLWnVQ24DIEiGZDfGSuvaXDQ0gdNiguRrsaFN0E9-8iHuN3BmdMzgymHQNHtdxfIxA3YZYjN3zg6Ixni613bumIEQVVu6AbjQjQuj-7as07_lw4Jw2HK-y5gRd4uFGX6T6hOJsJnIluJNAPrxO5OXe5Es=w309-h168-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/patisseriesirre/", webname: "sirre.be", href: "http://www.sirre.be", target: "_blank", texte: "www.sirre.be", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal16Spons.push(spSirre);
Chal17Spons.push(spSirre);
Chal18Spons.push(spSirre);
Chal19Spons.push(spSirre);

nbrSpons = nbrSpons + 1;
var spBelsport = nbrSpons;
scmSpons[spBelsport] = { Name: "Belsport", src: "https://lh3.googleusercontent.com/TL5SM_TTkJNX56UMs_hFKiVAFPx4MBx5wR7RPr-T3xjs5JN0wnpef0bpDusHOpwmvFDVj8Mr1QIKhBkXurW43ahS7DKwxifCIfXzQE0LN7uAJvF5Ni_GaowoFREFy1TXuvYk0NMmr7tfpvnwIQhNkCDNGtm-jZCOqwYR32EN9pR7boMfJK0QvdNzVYEHL4mRoT6_5sf3jf63TsXN3tJk6Nt-8l9EsvASU8GNU_dF5p_LxEtMnKovxx2SxpLfCyxNkRQrWMYWt-dyy5_OqD6U42ejH3YC9T2r-bzSOPw_2cIg9M0kVOA2lm5Q2FRoh3OucRqffKCu4MtqI7kxOlbwIkfTfjgaxpuM_1JJwrS5wSKRJBCnxbCUZOtJgetxKxTpOqyaPd8P3cuOizBEQLqwRFHeUN9da1euR17JbMQTH86iT4SqnGf7dS5-ZUpb54woRW67M8oRrX5jMOBYsP3BRj2j9dS9q8SuUdNXfEMmtt8bqDiTrUpoOpTqlo-IsWzgvrAV_SuRChTbkVshwVG7TlNn3hIh41MmRLh3sJFfWELUbZ03k7ocL6IigKKg3Mt2ewkqETpwkCaxqjVG6_sNLYfjxA_WpgoS25udhi_ySJUbYcDi8-0JhvreiRsFLm8XMvM-1wAfjNMW1gKEFnlVGsKdMsDgB12q76U5cK6wrVGv6eTCfRIHcfzZxubxYbOPIZD10eg81hxjgq7vRn9VHhbnWgMK0eEu7qkQlykGHzbSZj8=w514-h135-no"
, width: 220, fbname: "", fb: "https://www.facebook.com/Belsportshop/", webname: "belsport.be", href: "http://www.belsport.be", target: "_blank", texte: "www.belsport.be", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal16Spons.push(spBelsport);
Chal17Spons.push(spBelsport);
Chal18Spons.push(spBelsport);
Chal19Spons.push(spBelsport);

nbrSpons = nbrSpons + 1;
var spAshfield = nbrSpons;
scmSpons[spAshfield] = { Name: "Ashfield", src: "https://lh3.googleusercontent.com/d7GkmJnkiPD_gSYBgQsPAoN6CDv4hfd3bamOIvnbAfCIy8ESDz3vqbzjgBeMKF15V9FZ7sRIqKGS1FshXuV_0P3toIooxBw8O2r6KAQVC55K9Ne0APVef-DgQgJEbOhYwuLYCSBVFLBanfvZYwZnYPeHp_hAQBwOlDEIBb2YI3hOWdaMtGlAg8CEojFcOUyfdTXFNxK4PMFjloR0WYUCvxGb8RcmnIc_WenYL7Uy2PAOn5z1bA1RmbzO7aDadec2t4ZaK5Jzy2I2SaGDptm9f_yWghOMgNIwQgOPadUpcn7f2ivk5Cp27BSvBKVoyD8IgiNPpC-V3EH7KvsQVCaWZDmhqyUNH63U8oLQxfwREWzOr9nvdZiExulHNLOj6b8RTHFw45ANuq0IfU9lR5FDqFuahtCNtDErFnmtyKZ66NAXJ4cgaTgjV8eJPdFiq3mrvlZQUSZqRH_vso1PX47pJGPwQFgndWJYJ54fdT2X4KNti3JkSE4r6W-1S-_8XqdPuwCxEpwSyDqPi3v0wrfY3ul8GAA03NPv1h_M3D9BF4hkVT7ZNPJokjfvxYY90xJ2jFhGMZxOqcuXI8SwSXEMavd47RQUJBN4g3788SvKCIXlYrIb0cqE9mfK=w982-h356-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/Ashfield-Commercial-Medical-Services-Belgium-379835762027473/", webname: "ashfieldhealthcare.com", href: "https://www.ashfieldhealthcare.com/fr/nos-bureaux/belgium/", target: "_blank", texte: "www.ashfieldhealthcare.com", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal17Spons.push(spAshfield);
Chal18Spons.push(spAshfield);
Chal19Spons.push(spAshfield);

nbrSpons = nbrSpons + 1;
var spGaufresMania = nbrSpons;
scmSpons[spGaufresMania] = { Name: "Gaufres-Mania", src: "https://lh3.googleusercontent.com/aVdw3-hjPDjb2xawMgDOY5BiuFo9Js2Bs6FwK3nlflE6RpWdJlCSeQHJf3hXGTWyjNv3YYEcEXAjs87h3nPCqKCrLPVBzMn6me1eayGmqR9ekz5NnSMwNXCJsHfI2SJ1ORzNuHvbOsJRY-hC3It6xZVdB8sppiuqesjJ_6UA1-qT1vvGAEdH3cWNn4inzRBRzPg7Y3_dHC7BCmpn9sDb4ytoE7MKWjpsrhEtNj_j6lT0BxBiJR_oYaPo-UOkRGVT6ZWsVGFfV1dXQnzABcu5ANcltXGNEbSGyvxoxn4jLnO097Dj8aKO9nJQGXGc_XqWKN23FH0eSygdj3_7zuZw_dLtrEU_tp5fPB1em2OdrULxpVcoUkGliw-yy3sKJmawe-R17bzAOyz0ofs9q8coX0Gv5L1U_UwsRXh8N0TfE7HIEEVORRE8DlE-PdXbxuTA_4bLtXyybDcSO7Zd71pdeA8lgO_3A0AKea3DAl845Y8acmH7kaCftxvJ4XPszY6PbK35x7e_XTukgX9hWDlONFHTmgQwNo1g5E_se7G3mWx8frv7KnxpKn85olk5iSMMhyZ4QQ3II2NFl7n6a4bUUZTgSirrGBVaLjRl9900kbKbEfjGe9zY=s425-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/gaufresmania2015/", webname: "gaufres-mania.be", href: "http://www.gaufres-mania.be/", target: "_blank", texte: "www.gaufres-mania.be", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal17Spons.push(spGaufresMania);
Chal18Spons.push(spGaufresMania);
Chal19Spons.push(spGaufresMania);

nbrSpons = nbrSpons + 1;
var spMTwice = nbrSpons;
scmSpons[spMTwice] = { Name: "M Twice", src: "https://lh3.googleusercontent.com/ky7_UvuOp8VUJ4ZgxKYLEmUSkIf4iRYOfS6cXNxT9OaS5c32SKEduQ9Q1gaFdX01EDxHpUOIfOjx05JRQoVGHGcXhFGoBz_TX54GB_YzOb_CNU2P-nvZ0vvBe9fgSC4T-zHDb4EdcEa5kqAb5zzRFlZLOq1TjMqtyZaDRUBEIz1ysg8K5SvrEYIogXKTHly_bRT69qACeYimQlbLDmxQ6cXuhhYa6vFzrbLBVoIenDojZFRIu7qxOYniRu3WoHZBgRbRWB4z7kysuOKCwoKpN4DLK0YbbBcC6oarCYAyysR0FpTar0OPyLIkOJZSBGgRpT60qGLyL3-I8-_apPY27DQ9-wDeDIStA3A8wHcw2GtgGK8x3IZqsmMmgrYeztzWF_wUS7zHuQa1pLRUo5taIcCLKtPOl6E_nE9yoWP8TKbM0Yr_iz3wmOtO9QiI_y8hwp_lyAfNdMvaE8EKudbGiLXwEa3yGGuOeiVz-nnCWkrZ8-GPQoiPIon00EDc1x7y0JbugCdKK5BQp8x3op7hxqqV3MQbRjMaJccQuOcHlPJeVtruJ13_9DRfLk-NjHKLnf00kax4N7Xg99bvmffucReDX2tk7wg=w959-h462-no"
, width: 150, fbname: "", fb: "", webname: "", href: "", target: "", texte: "M Twice SPRL", infoAdr: "Rue des Salanganes 32, 1428 Lillois", infoTel: "0471/12.80.22", infoMail: "massimo.melone@hotmail.com", infodesc: "Conseils de Gestion"
};
Chal16Spons.push(spMTwice);
Chal17Spons.push(spMTwice);
Chal18Spons.push(spMTwice);
Chal19Spons.push(spMTwice);

nbrSpons = nbrSpons + 1;
var spDemuynck = nbrSpons;
scmSpons[spDemuynck] = { Name: "Trophee Demuynck", src: "https://lh3.googleusercontent.com/CYfHWlhAsC8FYSMOwPMYWyC8_tHUGDNZhH-NMGJqUhn3t3iORFxvXSf_OcBVGAA3k9QvSH4g9t1F2kgy1Miik0YmlSL7zuWKwAh7mev6XBVnmlNuV_BVdI7aPXsKkbhM5zfxh0sIaq2es1E6l5gnXw9ZXhwps8rw_S1VVHa7azrYq0s1sM3tqE8O7Zt83iFjGQfg9nnTx7mu-HQdj0vhTkaZZz9uHzw1RvwmYGFLhdCdBe85xJ89-WgXiZksO-yhb--05x4VYOOkR-VJuij3CjU1JPFiMNSe5zX7VukFnCpLMWl7eoOyNmdyz0E9KuGzhY7eJP1kINI11iscu69QJDkQZzoRQpYIKg68JoMd70hJ1_801fnxa_saeYUA4Ve6bS9ZGR5l7ABJ71I0i3W-ziaPznDw2sQrqbHQHOhkXnyprYJr7OuiHfAj0yr11E-I-Ak1jE4J9fOSngn9e8j21c4edBmo3zS70S8UJTaZDsu0ksJ-fIv_nV0fwJ_COoEa9KgAP1HTSAZTdHXxv7Bs_krUc8VmQSR7d4W_alE_cqxDgza9xXjtJOTt0ykj4xSnBMehRYCrNmiH4gWcXbB2bqB8u5Poivc=w473-h158-no"
, width: 220, fbname: "", fb: "", webname: "trophee-demuynck.be", href: "http://www.trophee-demuynck.be", target: "_blank", texte: "www.trophee-demuynck.be", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal16Spons.push(spDemuynck);
Chal17Spons.push(spDemuynck);
Chal18Spons.push(spDemuynck);
Chal19Spons.push(spDemuynck);

nbrSpons = nbrSpons + 1;
var spHDE = nbrSpons;
scmSpons[spHDE] = { Name: "Happy Dolphins Encounters", src: "https://lh3.googleusercontent.com/WuDxioAkIR-ZYg9moUt2s3XPmbW3MmVLWa9jJ-WywfqASl2zlNJ5z9lmVWllOigWTn9GgOOHeAQOeyPoUUdhmKAm67maAUeRJWwqkgvM28-09cYNwgtZzJ6LQ0bFuon9doJqj-Zt_6IoZ7ZPkq0xR9_FC6pTgRXh6LK6QRzm74nvRSlbDLSzBn0NPGQxG59CgAxwSPq2k7WiAjWCWxXWN2dT3qBfTC13tZtcvjJGUZPhtqYAXHzlA_Ir6LXkMjqYi5I9YSdWk_Vh2zqdV9vmxNjmnHJYeeqIeCTPguvARvfbGZL8HuvSWf3mYzV59ekkH8Bje_uSGqlW1r0EHgFkY312R2s-nU-Wlt3lKNqoUmAommG51ZchXFP70zVyJw2keWHRDCLpDY9j7lQ_9rmY1MaPnQrD1vOrBkE3QL2ocPLD3xfWtM_o-mwFWK7sRuflGStUPHOKXA9KR8fdRVlUvCtU-dFvsrWNYYqJrBBBXsJNbFw6nlnRrOLe4IIBhCciLJmXvYu2-S_LjYu2D1JA9VyoAvkkWK2gezfcU4c4LQaFjk44A0GT9sdCsZ4sO34DFOx3QnY9wfHk_SynopGH_77vsYswweeaDhC8jSIDG68Y7qsYaK1zUFZWJHnTLUY29PjvF-rseWD-i-dWhY16ERmiE0c0QsQHBHExR0oxidAiHu2p-23wXPosO1hOLBRJiJGJz3wb0Hr5JOuPT4cZDvIY4TVwM6v9HcIobbqRNbedQMU=w901-h539-no", width: 150, fbname: "", fb: "https://www.facebook.com/Happy-Dolphins-Encounters-asbl-HDE-567818926574993/", webname: "", href: "", target: "_blank", texte: "https://www.facebook.com/Happy-Dolphins-Encounters-asbl-HDE-567818926574993/", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};

nbrSpons = nbrSpons + 1;
var spSoaveHotel = nbrSpons;
scmSpons[spSoaveHotel] = { Name: "Best Western Soave Hotel", src: "https://lh3.googleusercontent.com/Ma9uP-RpEPFU2aAWYTf4OdRKpA_a-1EjDqnvNdZJQcOm_sgoc5JlIID-fyph0hvpiaEEi4TopuxtowUCn9FaOBJR5FhX9lbtIDxm9Rgw0k0JXF9TfaFQUuujQp420UjUSfFZK35q67UlkLh2-X7e383doePgdttSaHx6QGA5t_mRkLeg6KyZ1T_yfJE4JLafndfC2GxW38DAVUB3cI7fAG-YrAc-oGG9gwAFJq_Ulsglb2vyG2HX58DBWQg2HJEgCXUoeAz50gjRpP5LIFPCB4EiL2GdTybjmB1H0STlUVqdCpx2IeD54pAcWizWmEIYslRoUVhXKSH2g7vhnisx9O2x4OowkCOIGt4eG0LI_hQWYyfaYyidZ6-NuHw2BuG98zOiwUOscyxqv3fQ4-sAbTQjYEn_t-xqgsS0LHetg9ch4_QNM8eqGPp-UKOufIbeShZPFMZF7IRL0z9_knHtbLWAoeVLVPKG2fHRP8yMlE-OeeuHN2iPy-_99sLlwi9KX2uZjAwwlox8CSjLVqOMCVnEO_3MfC_tUZNtsfi4kGCUupWRd1J69aV0VV76b8kZTPGNtpHxnQb0F1uE32yl0Wd4-NtFDDI=w260-h268-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/bestwestern.soavehotel.verona.sanbonifacio/", webname: "soavehotel.it", href: "http://www.soavehotel.it", target: "_blank", texte: "www.soavehotel.it", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};

nbrSpons = nbrSpons + 1;
var spJohnBarleycorn = nbrSpons;
scmSpons[spJohnBarleycorn] = { Name: "John Barleycorn Pub", src: "https://lh3.googleusercontent.com/4MxmkB5iyZYk8bA2Mw0OJKHPJ10R7EBHQzV8irDcDTeGBbcI7M8e_Q2xx7iOE-vmDMG6ebxlBxJ3EOnJyb-vvleblko-A9c3f_vL7PdFTHTto4Aj5q_C1G6M3qmdsLiupnDoHLJofUBDFyqpuGs0PJTMvAsHEDno7fhrS1BzXEDVR7tOG12mFaJEEqz8qB96e_tnPAVJYzrIzBZEhKo9kz6nkvJZpLLjaxeoMWBXPVZFyEwNYkCoIunp24v6HxHIGQfDDFwK5nz6I9ZidMgt0-lqLpOPo_3cE9CKPtL0rE_m-ld1mFOEelh6ZvSkf0GgJSPo7Gp3Al21FZUod3K53Vtwty1rHy1VBUvUz6X_k19PQaMkxQ2dDlfKVYt6Qm_8xwc50CEeXPH36l_24Gb1g5UGBQMeU3JR5SOZfj-hP_XXB4gG-4wVVf1J2gWLsg8LlczwFzhKziyWh7Vz15SdsZUTyhFuOqG4U7w8-hEWpy-OvfgNiF34izMOD_glCo-0bqnGGwtnekb_Z5pkqmSNJk0gx4yzYgAFE8lkHGT3c-3-UYY1rr76gH2p2wODsDbfKl7UIReGl9j4h00bZLT4tRWWKKmp7kY=w764-h663-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/johnbarleycornpub", webname: "", href: "", target: "_blank", texte: "John Barleycorn Pub", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};

nbrSpons = nbrSpons + 1;
var spIFabris = nbrSpons;
scmSpons[spIFabris] = { Name: "I Fabris", src: "https://lh3.googleusercontent.com/8bFTOA_wlQ3pe-v87-H0RgAy8SP9g8-c3bWt5pSQBkHzdgh_xgt76TzrZtPk7pV1tMK8FkpHgrCiIwOt0I_jl4WwjiYWrTp7qDKi3ovCWnhbi6EyMQqAWJ_mGWY74heuGOjFq0qWXWcZyQCK-hjGOjG5k6SH1DBxVsPuvU7OilekSxN-GrD0HG6Op4hfk-_cRbvRh2GZ9yfp1vHmLE2Jz8O1EE44vZVt4SMum5ann4lHCbcukByWKefPFnCYskgNa1fbeCJKh1hHOtwZh4ZdECqIdUYdkqVr28AWsoZQiIhwWRm8jecmZ6dVWx3K4Gb7CX0kCpYbnZtlJo7-oJHFD6qkW2Pk520-MQ-B8-Es3WTBcuoF-UL8hakG6EFPcdUFhxJSgMzua9PHRrjzdbC11S0WJAN8xPO5ILYEz8n89b_BqRCDX6-0s_N6DL9cOOzhT-fB6gi8c3N3vJr_LQEuyyx-WXK72bv6PkasyX9YqJpp5K8twCw7o4pGxvuv-IGN3HpQImalyIAfAug4AOjF-g11SkfYFA44_7DoPjFbdG3cfnKuf9TgBnvpm16wDpuxDVzaHUdFxWdizbToSDkTLSo4ce4EH_U=s354-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/parrucchieri.ifabris/", webname: "ifabris.it", href: "http://www.ifabris.it", target: "_blank", texte: "www.ifabris.it", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};

nbrSpons = nbrSpons + 1;
var spJackTheRipper = nbrSpons;
scmSpons[spJackTheRipper] = { Name: "Jack The Ripper", src: "https://lh3.googleusercontent.com/ErP84nCpgb7LHxARZnBxsHMn-WJZUdLsvwhIsU2SPR0uI1ZxEVNHAnJp1fJvALppXLzE3IcHUdMltgNHdbE0eDtQmJ34Hgu-vrxNfTO19IK5Xm7h3FG9fYd_QAUnhjKVlJpP36f7Lz94Q98L87xzKAtLRTR_fkEYQpyz8toqLXxe9FY3RlRx4UBxv8b6JJqmkzfDFcx1dmbPcLLEZx_V9pkZcdmE2wMsqjUtQEcOqBjdCniLQkSjfvmYX7wSHFZ7kkIhN_x4GiR2G8k2QmN4ojM-JJWSeaqGf3HbRtwdGb0_dU3odYUrQs2m8Rcvwk0Wswrn1XKtPzAea46K0HOkSEH05q0B-dHOkXFuoRChwf0VOt7jZtZPD7QpjCpuT5x9ZKVsfzs-dXhPVNY2YN22I3bkn-8GUfa0U6QzJ3krPDm1I9ZI1gNs4uEgcCy6prPqLPUoLD0DtrOAK14l3L5I6elHuiEumOaN1ECgp9_jHr50oC3uBe6OkATIqIOALQnJ2yLUREX3SRI_32YK7Ih1DmUEJhOpBR0IRr0iN-X8ir46stJjupZ92v51f-iNvw78WCNF4F1VR486-76X1lWFvf_fdQ241DThs3b2iwu88tS80M0qUq71vpp2lt4jSXOFOyRcYWnIKwVTC0AvUggGVZOP8ASnwQY-MwQxCTErwbwrs9qOR-dYGg3h_OVm_EiiBaXia4iggx76dvMr_IGtp1G4WVlFrlBJOxfFt-1bx-PwOiU=s730-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/jacktheripperpub/", webname: "jacktheripper.it", href: "http://www.jacktheripper.it", target: "_blank", texte: "www.jacktheripper.it", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};

nbrSpons = nbrSpons + 1;
var spAlPassaggio = nbrSpons;
scmSpons[spAlPassaggio] = { Name: "Trattoria Al Passeggio", src: "https://lh3.googleusercontent.com/8_JIA-taOIudC3QYruitaLfSE2sh91kroxPTTswJLiUKnvQaerYIZuH4cxsZTM_YGLXRqxdIqZ1Igas1oBEmjgytB7tq2aeH6yWyTmi0wcV9cRYkH_40cjP-vPMxhTuRE4WFxOlEixxTaNLajrTtGs2FGqIpVuew2xkO8tLDJjN1s037HI11bibhQyEE7umkEN_MrDoSpO0F3pNbZc9FeKWdHPyE2KoTCEqCTOhWaIy8QtuxE-3monPESB_W7cf-aL5rM7dmDTuOFGkhMBTltQThX0z2Zy7Fv3xsHibPsgmAj4w9fkEJMwlbdqo37fHWSs59WR_48nkHUJoojumUI5C-cvzdwixd1osUTo-OSKcgbMGoySAQdAM59-o6rNiMcwV_lgiVwV59UHVw73cPBZAYvppfUgY56Nv0tN7ImUP6GPqbvqzixvuGM3WLUMYXcyzqQDyOOoSIoYdcUXnajvygzecPiJid75z-IPNLMN0KiC8-9E9sWSANfvpgfA0LY0Ghn_lVag0gA4z_U78BeWiYUGWncTh09P1Z7OHBhnlItXX2JFrSfcfJWTavCE93XnKNggcQjXs--RG7cCtqwNVm9UaS7YFmf85VhuvKfMlE6ERDEyLepcgB3Y__7VJka-Nv2UhzHHKmLawbtjuuRaGYuoACBnaQhu0ucUTwwLGOkTJSuhjnUb7B4VS47iCl76k1MiSxFVAWTGC49f2iXN3hHB5_hc5GlcGg7qPLXzAnjqs=w167-h70-no"
, width: 220, fbname: "", fb: "", webname: "", href: "", target: "", texte: "Trattoria Al Passeggio", infoAdr: "Via Cavour 4/a, 36053 Gambellara (VI) Italia", infoTel: "+39/444 444 074", infoMail: "", infodesc: "Restaurant"
};

nbrSpons = nbrSpons + 1;
var spMystic = nbrSpons;
scmSpons[spMystic] = { Name: "Pizzeria Mystic", src: "https://lh3.googleusercontent.com/ofY4HHVigVykVyLMSlpVvWS5wixaLYlMtkFp45BvBAhMk4jRwO7qyqBo0kHwTPQa5dxoddgS5FclcdAtDCjoCBhtstjXF6g51XRxqA_vqlqjhtORNojomm9U8L2GyE20YH82PS62CPd1CyHhgjBsj3G5nRBKBGi68YEz5gw7Y1RF4WB3d4S9xO3gvCTxmn7TbMuaZ99WxWJZxmKu6SvseIllSfpd_0II5-Xz0wFn5_YqxZcX5Ncaz1xMNHupR-c2NoNKK5SxAfCEElCutmppRmRt9ZShQHXr1S_qvyDHkPjLVK7OzjsLF-1lY7N7HYk_btYFh8TiLgRyq-QtTEXfbeQHhdc5XFy59C9__Rb6iwIKCzl1aSQhpugFQREhTi7G0PosQbWIk-WQHtFNPXFENu39ThgBPFe4n8cyrii3PQPjJmiK4327Zk41mrkz26hMdw1x0Xdhr6WYpDy3W9GBnQA5YMbVgAlltRSe5Q6HgVtkrDXhpiqaGn9TON7VFS2bZpkwHySD1lTlbv4hMAHi-G4g8nKrB4xZ3Rvc5ro3QHZzy3RreF1IrX1CzyC8wb-mgxpDzYn8X_K7fnSoQ37k0-KoV6Yz4rW95y_tLAdngPNpAHPDuGhm4F6RnksEe8tXV655G_Nq-hSs_hZExdkIqC31lnNXn7hna9Ib8dWwPetP1FaoLpXoCn1s7qUbTvVIzIQbriHG_sq8t97o1QZUsBYLEZhh-kKYiCtQFSBWHs_sJ0c=w901-h438-no"
, width: 220, fbname: "", fb: "https://www.facebook.com/marco.tazzz/", webname: "", href: "", target: "", texte: "Pizzeria Mystic da Taz", infoAdr: "Piazza G. Marconi, 18, 36053 Gambellara (VI) - Italia", infoTel: "+39 0444 445182", infoMail: "", infodesc: "Pizzeria"
};

nbrSpons = nbrSpons + 1;
var spZonin = nbrSpons;
scmSpons[spZonin] = { Name: "Zonin", src: "https://lh3.googleusercontent.com/kr1mFXiMEMKnFwXf1ndK8Q-7X09pJx__4ZSNN2xeVhA8Hg2tWfdqnC4ki__bVGuVtgWyIBqb0EWESJ63cwrTCCifjE3dzjzQ17zhyVVduVSD8kUvr2ls9jLilJfbWA2-xwKj2Xip6oOOEYKpV96arIZ5fMOiEL1TEM6Iw51Gmfgu9A3GcCEaNgNgE_wZ-0YtmgiB7R4ye5UDBNYgChAc5xJGeMP-tqdLJd1CqLoLyA8vZcntpb2aO7YMFzyWvrU057RjmJ5ut3mVUW0-rZSR-d1njGdta-VzDYz8YBWW-SiZ8Pr-tKmeifDgu8okeGMtHqxR7VgWGppKE8cgl9a4xVCryd19qKTFOyjA6krl8RUHQP2aOA8A92WDD0fE84vvKjOLotc0Fa5Jc6lOE1SFY-3u2MOpDQZExN_wUu4kCSgMXBdQUrBsAFotmkSl-nvPaW-BYO7j_4OhVJ8_FO4jBL8-poj0fV_XjBEuaLIQqPjt_XhLtgWe_9b6UlqVr4KE5wtgWpTr0zNn7ofO0Iew8yXSO-WjvuacSXkSGhVNCkfMnkyPlRjZaJQGiUflPgP1aeqYnjjy9JHxZ3v8Nty8K6wP8deuL9VETt86A7xBU5SyIisaodIuPhuXsPXqjxzeoRYIffiUzf6THAeTn0ZF2O2em0VYLkT4jcG7_PWZNKoXmEmfb8wnR6f6FlqPL8X8OmHlCY-XIe3xPJINEe7voDQipCUvAut3vLY26SlwnnSp5oU=w901-h569-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/Zonin/", webname: "zonin1821.it", href: "http://www.zonin1821.it/", target: "_blank", texte: "CASA VINICOLA ZONIN SPA", infoAdr: "", infoTel: "...", infoMail: "", infodesc: ""
};

nbrSpons = nbrSpons + 1;
var spAntonello = nbrSpons;
scmSpons[spAntonello] = { Name: "Impianti Elettrici Antonello", src: "https://lh3.googleusercontent.com/ShlOrMeAF58-YMrOwIpgmeN7v8rnC5cwDs01WuH16-gSv6V5pihBSC5bmXoMNc7_B1kPerUJkJe_8Df2yDxrB6Yh60l7yJUWaTNADk0i7UpmzNYfo3nYoDPJSOAtrLVCl4S1fMqVK-DpZjr7uG0vpM-XVN-ppOfH3KFN00-VqMAPE4bnNv8DH-4BbqqqjGXG7Xq3Z_4M_bHWHkQhAAjkCqKMdnyN7bR0QsS1GlHj7YK3VToGm94EVa6v4SP4RHnMAsVU5ptOwm73_BYbVLHjoWHUsOLoQdjxSLra-FmLdep_4f4JBKFEMvbBl5rje_w7mp1rHyyVyabaRMAmvwpin8k6kuk1jwWXtxM1RVYFFdaY2Aw0IcLc62hEjO-TxN5Za1BlgXFv0NooDWYz9Mex9kRZruugyjvCrQWtYe84lf1gfpn7lCY4Grz_FfUzSSrKto4nL41gDdgZcKP1OMwGsdHgx2_IAr194wQDG_-osa80VHIAue5s0V18OwqIywDwt4xTr_jObds4mpioOCtBhsvhpMhTvAeIRaUkcUigQxpiFWDN0sUnhzI2EHep1rLRp3xXSprTBfCbkF3oZmVvhduMQTftduM=w402-h186-no"
, width: 150, fbname: "", fb: "", webname: "", href: "", target: "", texte: "IMPIANTI ELETTRICI ANTONELLO di ANTONELLO SIMONE & C. snc", infoAdr: " Via Borgolecco 31, 36053 Gambellara (VI) Italia", infoTel: "+39/444 444 042", infoMail: "", infodesc: "Installations Electriques"
};

nbrSpons = nbrSpons + 1;
var spSoare = nbrSpons;
scmSpons[spSoare] = { Name: "Soare Renovation", src: "https://lh3.googleusercontent.com/HoBJoS_pZ4qcCCAHu_GfTbrQBYT-8jPJ8hSpMndcRS1WBi2U3efVdfzfHTDe3yKVBS2w8Ql7P7E8hKLm8Hb5MOcGjzZbFfkn0sHzjZXC0kLZSub0bNsFpTJEKJU0jDGBOTYyIn4_sWoP5nNvgKe63lmQ3cLqKbhP9XE--ibvNzXi-wCz_KgUIYu9L3pZtVuidp-q2xOFY8joS3efnO5INdBUVfB-EXo-Vu7K5OuOtyWUPgBEOeX-GxLCh-EAtKQILmyJXNTUp9Oh87MJmXBMEpWe3iGzw60ppGCf03JWikwSoFCBquMfnfJ9xDEyQB71jbbqHwBkoL5yNrAGk4lsExDBmAdVVmhIJhE5NbTpxeAG37zLE7mM1Jm4QKCTKbzdG1oEhG45lUWIzIc-kF_g4DCfmsWeTGaGlSQI_A96OirseuAn5SFGnGoAcWqq-vDqnYmiXgCgbSGaFrmLDpq0OpfnqEHXbPWen2Sa9QieLHN5OqaSb3_4Yq6BqM2UQC79Ea0flWw33cWe1ONP0qUn7i3MZKOceTthVwl700QRHOF1q7vrsMiMBok2BuKqr3jjgfA04GGDqi3Yk3brNrfh1mwTETb-kdxq6mKTAxFcOh2FInitXbA77c03sF5sNvSUCrkZRgYuMHA8gy4oTgAPp0w7AjBtl6I=w322-h273-no"
, width: 150, fbname: "", fb: "", webname: "soarerenovation.be", href: "https://www.soarerenovation.be/", target: "_blank", texte: "SOARE RENOVATION", infoAdr: " ", infoTel: " ", infoMail: "", infodesc: " "
};
Chal19Spons.push(spSoare);

nbrSpons = nbrSpons + 1;
var spGailly = nbrSpons;
scmSpons[spGailly] = { Name: "Gailly sprl", src: "https://lh3.googleusercontent.com/Gucqcv2Pigejx0GCeKtravIylxjoC5wX9en5BA1CBt8EK3pxnudlrttk8xCIu7uojPcryrvS6BzqpDc9Gz8_EHHBUVcHgRpZ-doN1BctFygu6ZOV3fXajqkP8fjl6s9tLlIFM4ivmBiKta8FDEE9D86MNt970_hNu_3Jgk1erOwBhRD_lk_IOKtbK9FQgJjaIsyk4Vd5R2-8YqX-cCGFQPWWA1ENh59EBnkj-d5Q1T91M3I0qng7H5p7wEGSEp5_QTcnfFZ9H-k_8QJrjjLOiih0ZWpuaOagiFX_st_2-o1SYDuCTWTVDduIv0KzCDNbi_2n0DVPzRfwXn1zmr_GPMZWpKc9u3piKkU-61aYWIdoJ9XB78AZqGzoVtH7_64TbN8NW7WNkEZ3Rn07OX-TPDN_CyMoHgwR9oKXv-5ngpHTJ-qbVAaXpOPingZmFCowhrxuaA_lhqLhauTN-EuaKt4FwN0Z5QwmoH7gP-ZYwTROx0OESU8I6FPNCFlnNufDiayG_vu8znvQw1MqOu2TaTi5B_NmawpveWJ0U8CVroyPgAU20Fe1e1wq2AZ1ld_aEYq9v52iQNWnrQ1LlbapPDGNZ8avJDHf-d0q8EmeWxnbV7uKSeSFttgmWxPw0jJMzND19Fu7S_YcPbo1y3tvqoIUaYPHy34=w421-h179-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/GaillyChauffageSanitaire/", webname: "sa-gailly.com", href: "https://www.sa-gailly.com/", target: "_blank", texte: "GAILLY SPRL TRAVAUX ET MAINTENANCE", infoAdr: " ", infoTel: " ", infoMail: "", infodesc: " "
};
Chal19Spons.push(spGailly);

nbrSpons = nbrSpons + 1;
var spVigo = nbrSpons;
scmSpons[spVigo] = { Name: "Vigo", src: "https://lh3.googleusercontent.com/RsGVH3WAV3mwT_jsnkx_Hp3OQJlmMDvUfo2SZJoa78F4jwp5zXiVsvBawsJic87uCRxDPo0iQHJ8Fmi3RTBx5P_TDTbZu6R9BtQQOKqadtFL6s0uzF6y7xKCLUSkx3Xn4gGXZejjcmd-QtwF_3qgVWhXmZbjdGOHmwLb1kKwHGK_w8AlRvEOzp-ZGecjmQR-e5E6R5h8W4GEeAOyvClCBaTH5P1fLuOlqrx0w2n5ffRTIdAo05BM8vABkiX5u-GFEVKcvjiPXKHlp5x9Sgg60pop08qXS4NUbRQ_Fjpdpbhs-vlHxctstlO3Porv0EzWb35Put1zvCG8MEKtvbeu6J1jmcSQ1dkhC_LXsW2dZO7Rw2ibvH9YtUIYG_7SlNLN3Cy__RqajKmw8EYO9wGjEgN-lY5PxNuuGrj9v4TFR2Q9841pYqwG-am1Q8q7JkDxIxbDUplpW4ACb4uyOW3U15HpiB6vQgPqaZWjGvSZk_8X1MItwHTkw2T1IIdYODfByojAWgNO-P1DTUtn8e-fdmVMFvecNvIc11s_K_CShbGi_IZwvs_87cnHHGrYYmNmKzEn0p4VZbiQCINPVlKyonLqK_HI7u43Y6JoEUdUzlztApeiOSY0owcPARTdMtbzJlfG207_lpj1Xb-AK0Ck_mhjwKYEBJi-gCBKbe0gLr09NsEZzagE3VFzySRLuKil0QGzJfnVwjfPXDNFqkh4E2NO9TSdAu9L1ph569rmSL7flMk=w901-h339-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/vigobelgium", webname: "vigogroup.eu", href: "https://www.vigogroup.eu/fr-BE/", target: "_blank", texte: "VIGO", infoAdr: " ", infoTel: " ", infoMail: "", infodesc: " "
};

nbrSpons = nbrSpons + 1;
var spTorres = nbrSpons;
scmSpons[spTorres] = { Name: "Torres", src: "https://lh3.googleusercontent.com/NcY_owQP3lKJkUazOvxoSjF8xhAQcJ9EJm6tJ8hgc-iqZgBFifdp7AqHVVrq13S3Ad1fsRNUGTUjxoQfNuQ32qzb6B1UiPiu6eFHyJoHBQ2MVr40MrRpWU3aRVvuTt2sDhhbIOdzyKcKnP1Yjqz3mvdA7Ntb2hktYDGiS-HnnXutjTCq_5rweXiyAVxoQuSrqtMErXiYFAM3U_A27gWZ1m_RxONcLu68iY1iQrA5OUxbohZtH1UA3FJR_Qn5wBTShsDA9wvpHlLJ5zs1LigIpHX5oQNWxOZtT8tRsyQtWNPQ64q6rgR-OOgQ0x8XRxoken_DWpUuu7duG41HDpmsvShpmAWrFvDiFZ4pCrE6Bo6qZ3sLZLZ1qLJ_roSUSXdtmceKF9b84_NBP13t3n371yNFdpSpBjPYD_vNOxaoCAnY8bFIG-Pc9FFNrxbBr3UB-8gI2VW0WZDTg3pyBMcfLS0clkWGO0XBxRVdMKcbSSjvberjMCVWQDCZDydKLA8CbLEiYWHqnXKl3srPoiQRSQnoHf5qJk2KpB_B5bfAVDqB5fszT42J3flNvI_n-xHHLMvp2QwFEdIROeI6bW4mnF8fKpwgJmhIC_rD0wIbKzjLjFX2We2eC8y2O7wdqU_x7lSNBvL_h-bratlYv7fG24GZFRN_hQk=w649-h305-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/elagueur/", webname: "thierrytorres.be", href: "http://www.thierrytorres.be/", target: "_blank", texte: "TORRES", infoAdr: " ", infoTel: " ", infoMail: "", infodesc: " "
};
Chal18Spons.push(spTorres);
Chal19Spons.push(spTorres);

nbrSpons = nbrSpons + 1;
var spLeBienvenu = nbrSpons;
scmSpons[spLeBienvenu] = { Name: "Cafe Le Bienvenu", src: "https://lh3.googleusercontent.com/j_ntdkgmkaJpUktLjpEJhlOdWa-TF9S-I0Al4rVuZg-aMzEotJNwYqEM5M_75P8pCpRZUyIMNbXMpR8YKf-kAzCixenNh3T4PXrdeOP3eQpZICinovh4SMQDXHVcRyoSX7eEpAVpkMhEBOubvXlB-gOpqVTnpJ6CIS0cDqp6Lp2ZehD5jh8EWlBJZrRfPW4mX2f98yjALKDXmlcsc3jwgkppPhwyD4_jYMD3W4r7ht-D_-1spZ4Q5s2z8ZEsVgf0uV13dWmQ0Q9jBKgiTg2NSKQ6XFj11pbMQwAVt3zX0ToH3e-50U2waxPUs2qDA8H_tdELql0_Rjpy6QZLWK7A5eQXEgbEMvHebAUVgg_ZSHjGWW_cc8LE6S30kxPls0TYd6A7Z-A56s3d41nA143WvLB6ZZYmoB_RA-lKLlgdEBtkOyCTXL3L7rzcDifLm37MYJqfmPVGuMQWGJK51rItocKl8aamJBqhPuU-cInQW55jcjFt8EtHv0GE_8a26gXhgKONeaXC2_RPJaNGZTjxZ74-ofTo3L7CLyV4NiR2ZUr4mubEQVoML-FbTEeus0WUpb_mHEe1WvO_VRWa7ZIdFFAKcmYP92G8rKrOxfFw7Chj_M38eJVzKcY7sdgzyWR6hUYdiw5gz0kEE87NTDuW3VNTiqFsj4E=w163-h26-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/groups/366866140060450/", webname: "", href: "", target: "", texte: "LE BIENVENU", infoAdr: " ", infoTel: " ", infoMail: "", infodesc: " "
};
Chal19Spons.push(spLeBienvenu);

nbrSpons = nbrSpons + 1;
var spVincentBis = nbrSpons;
scmSpons[spVincentBis] = { Name: "Vincent Bis", src: "https://lh3.googleusercontent.com/H7lHDoH-OFIJf7rpACpv8cH7Vq9lgupYrPGCGxlbShOwfnlOs7xynMC1wC84yTrgoVVFzb9zUr9fCwQiYU6Y_LhMuPryKdSeuhtFtndumtT3LHyMFn94H9IVGM0vcxvbhOZsOSEXAf7fNrcQmP-43c_rQtEsgdRPsU_1uz0d27eeSq49_S21lyTY_YoM5zRYf-VQxdtuEarb0SkCepCjt_coT4Ek_n3ET9B0Nnh9-rxXjeOUrg_WGTHtUf0E0Xw5uAKLs4BFbhiRU_EZHuzoOplEtyt9SuowaAo4MwpAgcVuBHcPUW6r9vXsCl58q2b2o_uywIzlWN0NiuHuIhyNfD1eOqCG_Zmwp-7ODWeLoPOwrcKU5H4dfTnPSKjXDk5yzETnNRIvvDnn_DZ79hYVN2x01udDUTqPwx6qSF1nMkxHL3_9UTgPZQfKp33t04a3SNpPj4b6qJhaOIYOVNaKKyC_qTUrf4GI_2-VqR6Veea_upmeNxc6uduoHcM0Ux4rPANKzBofBUPnqjflvlS4dl50YM0oUh-NBSXQz7kqT0MJbSzWXG79mcREAATDqN1xVvGpD2V3HMWj9Cjsy2iTrjHT4f-VP8zMxD9dZHsDAe4pvFNmlNvXpUpmnqnTyPAM2-CDyM7zshDwRUk0AzKmaJzHspSQgM4=w281-h69-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/Vincent-bis-VB-1619713384979933/", webname: "", href: "", target: "", texte: "VINCENT BIS", infoAdr: " ", infoTel: " ", infoMail: "", infodesc: " "
};
Chal19Spons.push(spVincentBis);

nbrSpons = nbrSpons + 1;
var spVanvolsum = nbrSpons;
scmSpons[spVanvolsum] = { Name: "Vanvolsum Marc", src: "https://lh3.googleusercontent.com/TEBnZh2jBvgDLaEWy2VenWSW6xXjiBQNJSgy-7I1M4eI4SpCHiedgnEyINfc8MPnHPpcxHTRqzz9rEv1-g7yge4vGub6rqiQYqV6H1gnehmw5EzAyNQhcPSn48x_YwUIFHPd23g0tPnRn6v66iP-SsF0Da-Ss3Geu3noF6j_DLQ_nqJBN9l5gKhw0ZLL001UJMBw_rG-AaQ2DTSQIi96RbJavRsMhzoul0hF_h7QCl6jPi7xYt7MiTH-vSYQnuEjwjrKtwZLXewyLfUgkvLkLHH_HxMpq_Mih4Ob2Qg2GR1XwmQEcEo9vTIRz15nvWAFGzDG4SzVL5MfrhWFxpqsva_icUFzj-CH975Ufy9WVcIkh-5d4A9eZ_Cz6433RXirvrZpxcSs9bqLjnCQUcAKO5gw2x3GObkZ1TexsjqRouNTzCKybsj_UEziqy61WTK_4QfCGuUkdS4500Uy4j2yOPCEGhpBkPADxXjtXrnb16Iu-XAvk5yNqGDtID6UZvtAKq-xLAMOQ0yy-RO9S8d58sBlps95y8kCwOzDh2zjrX4Mae3mlT3fZHLnEYsdIiydwRyCMeKOFoijrdkFiHEsws4_1uHhmD4uAADlSmsE03LCaUHzPswSS-jFdTBLH4y3SHBIX9xUH5JeVfYzt3YmbZGlHLjjYmvVprBnd2MYLPyswNhJ5LbN505lG9JXoUOirpxrmNgVQ4XSVJ373ycs5wxciIuvIA5p-xuroKDKyF2YziM=w422-h230-no"
, width: 150, fbname: "", fb: "", webname: "", href: "", target: "", texte: "VANVOLSUM MARC", infoAdr: " ", infoTel: " ", infoMail: "", infodesc: " "
};
Chal19Spons.push(spVanvolsum);

nbrSpons = nbrSpons + 1;
var spChezBen = nbrSpons;
scmSpons[spChezBen] = { Name: "Chez Ben", src: "https://lh3.googleusercontent.com/Qlqm6rr_dv4vie88dFFmFK2cgA3bxM557nt-j0f5OF5YYeNZHMIOo5SpZG0_ycl8fRyX2HPbhXaFiGQvUh6sgNs5tLIC4Og3thrZ3RsLGjfySxwxgX06JrYXXq2DDBGy1plhoqFaP5HpxZgoukLQmV6EVgaUDVnwP3sGSX5VCB1YZ82gVjicKUvTUeDotQW2zNbGTo99EAYfSHgjNKq8hkConmztnLXMuHRkTAZ44TuDrqvukE3_9clMBQVh9TCoTUWo7Ce9k00Pk_-p24_vBnJFk_QSXKyK7EUakCMl_13w43TVt_VdIM-KaYmP3VgQoZ90oHBTjH5Zppu45d9Be-PQ1IhF-CK6OX7Bk4mgSi80zGpxabMoiaeg6YSbLUZldYZ-qlISDyPkTNSAjgLouJwpWM8lx0HPfv960AfVlIaLLoGbj56PTmPsjryuG4MNKQ-_qEplGY9dT-v1o3ti4Xm1IgAgQP9QSSInFVVgqsDNjccxyb-pMLBG_vbxHGId7MQv_iTWr8kyQKRPsmskkaDCtZVqwq2uWA7XLuJki7dxiaUDWQsHq_Rgkp14G5s-K_GRDYg4Z3ysrHqCcHZ9lT8j3e8CyNapXbsUMQ9qDXKDy6Z-UoQEkabMXas1UHJ5bS7gZatUFVz9ky2LVf35ERDNSO-p4C5O2PHiIzAq13mij3i7ONE2St3Eby8kH4gZbYC2xlNstUE9gcNO6_6wCnI5Q_60yhmDyC4HRvIjA2h9PG8=w519-h156-no"
, width: 150, fbname: "", fb: "", webname: "", href: "", target: "", texte: "CHEZ BEN", infoAdr: " ", infoTel: " ", infoMail: "", infodesc: " "
};
Chal19Spons.push(spChezBen);

nbrSpons = nbrSpons + 1;
var spStandingHouse = nbrSpons;
scmSpons[spStandingHouse] = { Name: "Standing House", src: "https://lh3.googleusercontent.com/UUSjqw14iknoSs8q3QnajfmUpHA3IYgFNmh5ssvlnYV-B6SS4y5srKmEPJp0TD3P2pTnGxRQmW0kGoXkPtCajguZjtGZzUs9eRNQ5wygc4cJO285wjNB4hWmSUr1gob2wyM70Q1_NPpdrLtM-wLOVGkIha5Ma7Mv0rF8oDTRM2-ngqwz8fU9swFaSt-Bdgr4C1GWm1C5V1JyBdoqLG3rvz9WaaNsIenIwydUk8S7kQitz1UjzWpK3_3zzYRIunPHS9VVWr3yq33NzGFXhtbOgHk69ln5PZxWj77pv1Mms_oEsWCEP8l2uX4r1xIB0S6tZr5Nqx8Co3a0C5LAAK3hjlNb0YPjoL2CRLroQ_1BN2cM87cKJkSAst31OzcdffZLC1dD2Y9RXJSXqyJIZDyzZblubP-F3wrGWwRs-D6gYtIhoiWbrM_k61UQ7QsvcVKsYTbYAJXyu1xlVJIaFTC0JBzm5ZqxR-OIhM71p1ogaDxwfD8gKZer2XD6_IfUl0TsxDRg0zXLOhTC3SwnMNG1qe55K59cn-LvELQLHZhxDLHi6B-d_T9g3cwCcxtn-lrNUgCrhv-5CLmM5oBXEIRKHGMn09VEPy_TIWULyyHEh69wc8NA7mbTW4ebcbPkbzdya3-TXQxQHassG9L7zxezz4WH4F_kwI38tlWMLpKdrjIekIyHWSR2hdRpA2xMk_OtMOQT5Z6VWVQZz5_w9SniRXXIKd-aBFNqGPOHnDydyQQ-WYo=w901-h596-no"
, width: 150, fbname: "", fb: "", webname: "standinghouse.be", href: "http://www.standinghouse.be/", target: "_blank", texte: "STANDING HOUSE", infoAdr: " ", infoTel: " ", infoMail: "", infodesc: " "
};
Chal17Spons.push(spStandingHouse);
Chal19Spons.push(spStandingHouse);

nbrSpons = nbrSpons + 1;
var spLeasyServices = nbrSpons;
scmSpons[spLeasyServices] = { Name: "Leasy Services", src: "https://lh3.googleusercontent.com/0TNnbdiYZikWPBnHwxyt0xXiHQERvnQEmh_G0dIAU4J51pQKX-ruGwQn5FNf6uzDCedjTDdADyyOm2PdrrMvWA-9TWR3jw6T8yJ4nswgCSFKGEeic5DBey0wd5qEQptWMuRisLUyZe99cR0ffJrX_51r1-JL8N683bWqoJuUVD7Wi-p1RTenv3yJucWcU7o25UzhhwOO-FW4oTAs1pDL5vz02qO1bBdZmzsWNh2weJxYoreo59l0yvUsCv-QeJKi7DfGe8hO413XZlG265wguKKpWv6It5xWAhXcDWWrpSIo-v1vLtEa-6ezmcClG2vdg9iAGaVLaP_m0YERIUPfsRTMbPPbBlceqtbvgbSacOlq8b51JErEujTdcZrH1GHMsunlrQz1TicJdRpif2AiUKG8bSCUbj0fS85KRYtNNpE_oJbyNPIVhLd1YmfgtJNI49L31joh9tGzrYE_vF7D5-wo8GRotaMjJrl22606BU63b23vspgAny3j9d-kCqa4p7Cw3giQb2Ftid--JDbj_Dczv8K2EnB1MMdq4oEZpmmxc6A0xI1ryr9-sVjpmV_BJiaCnRfXBUXGEcs1g2Ja4R32Bg0P2OvHfXGAGPuZDAvorE2vx63WrXWa9q_f860g7lP_eRKtDQMa0FPEhRz17b0aifHsJio=w498-h365-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/leasyservices/", webname: "leasyservices.com", href: "https://www.leasyservices.com/", target: "_blank", texte: "LEASY SERVICES", infoAdr: " ", infoTel: " ", infoMail: "", infodesc: " "
};
Chal19Spons.push(spLeasyServices);

nbrSpons = nbrSpons + 1;
var spTomTrieker = nbrSpons;
scmSpons[spTomTrieker] = { Name: "Tom Trieker", src: "https://lh3.googleusercontent.com/AN5hHTIb0uoRACK3nhpb4w_DSdROPf1rEvULNTrnnO979dy4pSI2_aUK62Ed7qmkwPaEDGUnb9hflc5H8g6n5wf17yPgQsFA_90pONaK3tH66QxPWNh7k5LESmRuJN7Lz9Q76TdXMgQSJrPBC80IHb1MWLZfLVQ13DTAlDfGUvfJDR5EGcuWhlKxFIFyamNW277EPmCMQHxM3YMDu7aax6IdABoJGV9ejxrvceQ09mQyEIx4mnU--QmyqdRYdfUQXQkDSrBKgOf3S48s2xQgdzdsZSLk4ijm995ntzD-PFxWkAgNJVtiGZSiNi_ui2rWFKxAFCotQhJaTp8pb8vmiUV9HMB2XQVPxlCDYT_wF7HDjk1uyDJub6MlbSPFE0bbzg2v4v1knvehNhJPuwK9Dygv_et_0_sZv20NvZzBMC4WEaHL8euWqxHti9Vtay20-qCgNTfxmlFjghKHQ0P76fTEhdvDIETV6-eKOvaGEfqhe0ReKj8EtaN_IS3dq-XHJIVN7CP1YT3uvPEyFlGDWmhp__L2f-kmrpkjLO5KG8WOcSdCfZWqficyjToMUmczSCdwc4EbCG7Rsl4h5pHC7dlelW6csgKJ8oz4E1bbuDrEh-SWZjirK3In3i8_PPzgNPF0La34BzyDtCPvW4YoW3ZEqH6mHvKgldQDiCOmMmuaYDCZPsmbKDqWrDRXC8vFrviaA0AXC3zCmCLD_OrPStkJo3P3sTTGLvFTKlmOHLp1lfQ=w901-h155-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/Tomtrieker/", webname: "tomtrieker.be", href: "https://www.tomtrieker.be/", target: "_blank", texte: "TOM TRIEKER", infoAdr: " ", infoTel: " ", infoMail: "", infodesc: " "
};
Chal19Spons.push(spTomTrieker);

nbrSpons = nbrSpons + 1;
var spARCarrelage = nbrSpons;
scmSpons[spARCarrelage] = { Name: "AR Carrelage", src: "https://lh3.googleusercontent.com/hpNDjZ9tw6MLue7dllJ26Yu1mUVzCpFqNYYcrILHcHLX3Bp8kSw518yHBoTaxUfuoKzJfPQzQXFdMJUulDqo-UswX9F9uE1rYMe6xQ6WD7rppg6IlqwpSH0T8J6--sImAvsxwaPOMCDGBk5pXOP5PfbeMJyPl7J21DSIcIhmQdYCDw3-HhdPKFaciWN_DiuISiilgG3UpCqewXJw7Uf8xX4PCdam5RRB641epdUyvf_N2eIjh_QQpp-Qi-QGLd24EJLlx6WtqWhCGrU5NUEaOBoEXBdl7RjNQ7kneS9GQ26uqkV39JUijjof0tO1dpl_1DRWWtIsdnjCIeK6xw9l8ZULbISv34wNzbQC1xNXQkgkSbseOqnU5vJXLajuDPs16JmmTMbv50WgUBanCDDPprtJUJTZ5N4hVmSK5cmI4X3GgYH5OFlQmlrhiIUfFrusA5EVgnfkxS0NRkiorCk0bncoscjbf89uZ9G5P_wz3CUTFcThA6XM1Ru13V2oj392k1m5FGOlGwzbYv_Fl1CLyFLaNZTLLKfcT1X2ebbfCo5vop_wdgRx_jLZAUkYkLWB3R6zmKKLp_0HoDCD4sMzr5oJ51zvgGbyOd-8ihnng6BOIeGXA9w-rS9gnFiiCIMR1SWsVjKclqLm6l9tFbr-cEJ5HHHhJygucJYygOUudjbJCi9amsQwSQ8OACiiJxYqqaHrWcos-nQI8z5WYoD18VlS6RfiC9nQB3DUB9PCyYSD4Fg=s730-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/ArnouldChristophecarrelage/", webname: "", href: "", target: "", texte: "AR CARRELAGE", infoAdr: " ", infoTel: " ", infoMail: "", infodesc: " "
};
Chal19Spons.push(spARCarrelage);

nbrSpons = nbrSpons + 1;
var spCharcot = nbrSpons;
scmSpons[spCharcot] = { Name: "Charcot", src: "https://lh3.googleusercontent.com/uQbCHF8jh4g3rRpMkNqwM6VUG36jW58EmIl4hBL8mw-juX1ni_sM6sVbSClz0o782YA_iOpVE7odNVpqmryNeIcRJsD4PufoIFWVeR3lVqgFJ34-wU3W2-jt_vioEnSWv8cLferq2WZZZFwbDNuwkmMZrqoEleAPP9lE8-xUfHzfuZrd9dHxTfudA217edoGTadn6t2nSu4DDYFs3inFVnaWqvNnHIi7cMB7vW9EwHmYWIEACDp7DvEuu3KZ6NSF30ScEwCTgpfg4hkw8eYaBhmfgIi8RJhwYi8gIAP7_cwv0_oBPZaZm99WneBSTw7D3eCbbrYYueNz3j2aQv4giWXi-eVfAL4sRkEs3LBGMpH-ELIYpVBlaxbf8bJjzOyOUIUZXZDjumG4u-I20cPTtJmzsJvnm6QwFvPnUNKecXQoA7-h-Iwn_jZekyD0q4CxI2nByzfbyACPrnZWjQRsr7LDNtlo-0MDd1D6ewpM6ZAYtu_ewj7iyKgHqR8FKecTryZIqcstX2qgggkmlPRIAFM_H3bvj01okzmBXci9J81i61kTAXnhMNIWlXoRmSNXoG4TdnmFJF7JkD6PMDiVFfWN47rkrz136DRWG65kFofnQJRLFF7UNL8C2tQjS03hxXw8lCEUSmUfPQC_4AYS7EiatAUFpFg=w707-h576-no"
, width: 150, fbname: "", fb: "", webname: "garagecharcot.be", href: "http://www.garagecharcot.be/", target: "_blank", texte: "CHARCOT", infoAdr: " ", infoTel: " ", infoMail: "", infodesc: " "
};
Chal19Spons.push(spCharcot);

nbrSpons = nbrSpons + 1;
var sp3Fontaines = nbrSpons;
scmSpons[sp3Fontaines] = { Name: "Auberge des 3 Fontaines", src: "https://lh3.googleusercontent.com/ZJUcTvK-vc1KpRAV_Cl5HWHDMmfI2XWbRgxgXibhoJM4QKOSKbVktWIrUIb3HARNJgSeOkTlvGQCFb3RCoQ62MVtrFtuVWDLGDzxt7985W6eFgAHoDUtWq9V0vV1Cdhm2luncIlbKpxE02sInLSkgBrqI5ZNGFQVjRCqg5UobwuI1ysWCHuyWLr0vtHJo68OZaJopVyfYjJA7KrdqJho-aKLwbqgwsSAfCSpag4UVsag6m4PmgfCt0-w31zHwVm_KbljF1Q9Qud73K37b5wXj_u6UzpbFlMSK0fC19B09k3gxOQrmhaN7KvxMNwMLpIOA624LtdDRRXVkF1oCmhcu6myVFd9lKTFHbKgRsYc-s8btlvsO4eMy8abpLZBoXHbyU8SrblKCBmlVqpNOS4Pejjj2AtBU-Yh1R5A-rWVgeqSoEZ9bWt_uR9GbtMys_xrldxAsL1olBLboopUp3Gy8DzF6nRlX20KlX6jIU9BicRckXRCbjOxv7gCMp02u5cX7rdDrpL_GUgEn-7cMZg1DI6WMLND9jImPGxdOUUS24polmZcPAm2s5sCHD5R-ofGcTIVIak4uRGziRR4wrMaJuTrWecFmiV12Ej69NgqWhlJq5fvIasRyjk-TvKNaNBdxv0wkKlFdVJBBzYa1knl1XedY9EQgn4=w240-h80-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/auberge3fontaines/", webname: "auberge3fontaines.be", href: "https://www.auberge3fontaines.be/fr/", target: "_blank", texte: "AUBERGE DES 3 FONTAINES", infoAdr: " ", infoTel: " ", infoMail: "", infodesc: " "
};
Chal19Spons.push(sp3Fontaines);

nbrSpons = nbrSpons + 1;
var spDesMainsAuxPieds = nbrSpons;
scmSpons[spDesMainsAuxPieds] = { Name: "Des Mains Aux Pieds", src: "https://lh3.googleusercontent.com/B61xcejulzeRR3vEbHptIgESQFiVkyxwurmi9oLGAUJof_5uDICLJPnHnu3-SQYbTv1kpKv5hhBBBrewpqKyNxTaSX4N5DOZIvPOxrHhFHkz64heER68ohpiMWu_53gtdFn82XSvJR0XJoENI4UGYqied6jX-B_gCYgsB7kjiGauBzvQzQQGq5BqTTDhjymE23QwKDO3NlH39Ivyey9VkPP8mXTTaLsOZ8TSKlALWbACLHASDjNW9P4mr40hJrTXAKzw36QrNmx1oR462c7jB6vp_Ohh5bBSTGkb-zqsq3AXwG1eHl195ohITcf9GMyUQvAJfiAsNI_AO9R3UrprNcga4VR8IaPCzttg5MA_0wBxYUuyz25L8ecPHU-l7RDCljFjPEHpz4KQlS4Xtbx1aPU6b42C3nHzsnXMUU1olzeXkx_87ZGmbHTDA20156qX9ukWlM-j2o4T78il98cfVQNQbH7WHRWbsHMxDL9Pzbziv7GCieGgroTdjDb9ztQ7QKioc9Kfvrq0iXdQABZtibmmb3GTiHGoyFeioONXOBukmVHirGP1vOZF4KBYq2OTZ0eacyFJd_4LNQyGERfrbE48G2zj2DRHYKxhJ0vM6vuQcEI1i9wT3Uqf5PTl6s-8hLxMnlabjaN4IRx3zDKkQoIMgbSgRwj8_muovhxWiauqu-WYWMcgoYCu4Cjapg7SDSMvnpkOGqBleEOCcPQVbJQn0L3RkFqpFMXXvzhEyxC-5Es=w828-h315-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/desmainsauxpieds/", webname: "", href: "", target: "", texte: "DES MAINS AUX PIEDS", infoAdr: " ", infoTel: " ", infoMail: "", infodesc: " "
};
Chal19Spons.push(spDesMainsAuxPieds);


// *****************
// * Par sympathie *
// *****************

nbrSpons = nbrSpons + 1;
var spScarsiDeco = nbrSpons;
scmSpons[spScarsiDeco] = { Name: "Scarsi Deco Sprl", src: "https://lh3.googleusercontent.com/4e3T5ZUwo_xdRv_5OS7UASlMScQzBEvePJWlRHwKB8hV5BI8ubOjuWz6Lbk9cinI2u3czduIrqqGNSQSBhNodnkJI-45mc36EYxet7ozlCh9CvlMsaVn5kFP3mbah3d9RgXMiox90zzIaYd0ln1UdnD99jqhbgZKojasqfPcmB3vC7ssrPKO6C3Uba5AYtCBN9WK5H7T9DY7njwHjdkYggiCmbUJu_Q73EtCnDE0SExdZEuD8OdMNASzdyEM4a8O94YMDbmqovNTT-XC3eyK2Ep5xElNLAsGLi0yjH_Y9N8P5LD2jro-EXFRz3sgH3hnLwNlneNz9z22J1MoizkBhNGe37sdPtV8iNSYDMVtDdUFrEzuENkfmxV1PObAVfSa9ysIownsluwK1AbM3eM65elW_mHPt-cWOATJ1Pl1YOr3lSiuKf3PF0lA82oy1rqotpuMFER10S6vxenqYGvxorX3gXJ7NckNRMbx-P3eWNO_3Av2MJ0HINld7YewzoLwmlB4uS4NuWbWCdpuA6c95h64CeWTuFkefqw4x86Avx-0LkPcQwl4nOVwif2GKqFitQOJPoutLgm8FCe3PC4a0dAtz2TYUPg=w748-h657-no"
, width: 150, fbname: "", fb: "", webname: "", href: "", target: "", texte: "Scarsi Deco Sprl", infoAdr: "Rue Renier Chalon 14, 1050 Bruxelles", infoTel: "02/343.50.28", infoMail: "sergioscarsi@hotmail.com", infodesc: "Peinture et Decoration"
};

nbrSpons = nbrSpons + 1;
var spAuxPetitsBouchons = nbrSpons;
scmSpons[spAuxPetitsBouchons] = { Name: "Aux Petits Bouchons", src: "https://lh3.googleusercontent.com/zv7_Wr8sH6KVuUFYB3FMDMSNh0rfZVqta-4nRn5R_CXs8ENU3qGN-1e5HWkm2fIk3nogHzChJCL6t6whIfvdO94TTTBRnPqvnPEHPqUKUozkUbWUSOAIefrai69c7j-8AwRU4YknQhyknvI_c7fTrzCTYTqyHphW2_gKZz4_sS5VQ2ngBAkv099xjvSdPQ72RlYgS3LuidDTKh2ZRJaYirAsIrP2DQydKF4hzSgr8gBAPkv5kX_OpjVVlyO6KQ5GDj9DpUbDtxGKu8xVAxc7dovsaQ9d7ysfGbRyCgjwEjlBHswXdq8f4Cwk4UobcJFUfCIWu2QiD8m_V59ZnUa7-l_l2QgvfErJWqyVJpkLS0fS0CmW592RgQ6m82E_u581zwKLR7Zy2A2bAEtRis8RK2WOegSjUgbRgEgKRWmH-_TcbGbKiaEwvIzv8ss_wBoGdnm8VDBKhnYAFWlC8tS6ZvNr6iD94PVVwVaK_ytu6dx30g3FRkSPmA735Rfb4_ego4aPU277umfWt6n0M30rMMmXT033U4iKMSfXosGJFlY21D1jUWSluHkTW3x9bT54HIgyk0-1aRabSMClPA8D6rFfQPEhqwSnzt7SaZeoDHNIKV_gCobeTacN=w758-h628-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/auxpetitsbouchons/", webname: "auxpetitsbouchons.be", href: "http://www.auxpetitsbouchons.be", target: "_blank", texte: "www.auxpetitsbouchons.be", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};


// *******
// * OLD *
// *******
var nbrOldSpons = nbrSpons;

nbrOldSpons = nbrOldSpons + 1;
var spBEenHarmonie = nbrOldSpons;
scmOldSpons[spBEenHarmonie] = { Name: "BE en Harmonie", src: "https://lh3.googleusercontent.com/cY2jERcb7WMi7tzgtEzVVVZcyf3RsXSuODhFU9kDR4LumiuzCsP3Yr1huK3zgOor9Kgj8LG6CJgKbXry7j5wktqQpZw8MJltClMX3wruUMFPsOzdbtDpWZauA7rsdgIj1HLNcXIPpINPwoU-qH7NjxD-hCZubNVbZRYrAnTuDkYUJbOO1CCIq2kVmtSj6SKej8zmWftxqjJdUTRAKJfGPa4Hq9McdbhZQ68hcbqEwE6_5-0F8o_zHfKCYyoNQ3SS5wImbZ7wwb2Sni5sSdzu5spTRd2EieeJOZY20lkW_63obTFuTMLd2nAdxMSUTBHp-08gK-CBw7XUFtKW0OAT0Jt5L3ILIq0ogETl-_9BVx6h69iM9VRldTUpGlV8umSBaHTDh5ti1DSpfhjX1HSp9Y3Hy0ayI-YprnHM7yojJOLaf-7H0tXAG-6BOGCB5XHTnzd38pAp49UuFRPT0gBpDGSReBaKyKMiZhURP-YoZDYBclD2sDCzYBE97ZmkvGWilH-kD3vZWZbnKAXNVkM23sA6XGy4reUR2D9gD6elmaSVnC64bBKQfMLKhCTL4OFyx8D0aj04N3Ofhpn1LTjwdxc0HhFUo-_dTwGCJJ8=w222-h99-no"
, width: 150, fbname: "", fb: "", webname: "", href: "", target: "", texte: "be-en-harmonie.be", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal18Spons.push(spBEenHarmonie);


nbrOldSpons = nbrOldSpons + 1;
var spNutritism = nbrOldSpons;
scmOldSpons[spNutritism] = { Name: "Nutritism", src: "https://lh3.googleusercontent.com/L3fsgWfEdj43y_0JFMh9GsECcESyR_Kl3Owc_pklm7N19r7zjOoMlYEGiic7tjuOZCCVMzmH7O6ePnd2FdL3BuGDj6wp8MtQ3w6aB544f4La2RmhxNEC9po_Z6Q4oBDdvIB2c3HKVjrD0MvdUA2pKwwWknGG4ALAm_q5lGyKV4MGqMx9ZoXLVVL7qT7dydFBeXgr68bQYse7JEVGpGbUUkz4RCcCQ3zvEWOGDw5V0JDIe1RjeaipPgHJepfmM1KzX9qwKBvNa7s1EmqYtXiniHsEgETNPTeNv49Gg4qtivUVccKX7RGfPMnDuGhzdqha8EOoRZLZm7PV6EU_lp8S2Na7xBZuYlBPrPOGhkfht8OEWx4UDYhEu2Pi50H911W1jF5vi0Xwy6GwBobpcG47NSflXu7Y0bluDNWtCf7cRiBNC8gfTSVA9N8hUDWIOcEOcpiGK8vauXXD7DkSKZYpZ-zWQxAjzmd8i8eRHT0aZGIuGmFTlCMMrzc0FtYhmIq1K0U70gDZA7fKVtKGY5v_hM9Y-exMd9o4YtuoDCV1RupP4sL6cF_dhd1dyiQb6b74om8lvKNi9hvLoZ5rthJ3HADHurPUnyDn8rsUR0M=w936-h662-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/nutritismbelgium/", webname: "", href: "", target: "_blank", texte: "Nutritism", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal18Spons.push(spNutritism);


nbrOldSpons = nbrOldSpons + 1;
var spTevarom = nbrOldSpons;
scmOldSpons[spTevarom] = { Name: "Tevarom", src: "https://lh3.googleusercontent.com/8PoGXINeqMJzg-XB6VRPlsFeIZDoG4jrzbR1pyVbmrkSczcSio7fha0KcS9b61PpLAjpi8-Oh4D3_PxWsRL8dxixhzrcqcFrqRR0DTNC09U3Sn3YCU1z6VS7xEEB5HCHzhGfWME4AQ-qq5Bdo0JaDcxj1UshWaBKxsT72KhB-5ZaURekB9-TIyoibemmFZd3AJNz4hIApY1B4kvyPafDKM9J5guLdc2sxb1WKqUT9oXkzDccf1tz23W7qGFRqOPvSJ2WSLkCjpz0fUptY0WXFnU4Kyhn4UVXJcXeLPIBmms2K2YglrcOcEw8ifG1CjhkPr0c3wfvNKiBQGIdBxkNh1Ef2bJlCSlTqas4XoQlOCWtXvNyekqWQxIAUGMxfRaA8MIko8NSuVwClMZwrpxEl_M-kpsuE0Ec2vR-XTAEcxA9yGWeGj6EoeFQc7wXaQl1roxWAZnOngh9APQWlYv38RtgOI1QK9FErcgD3GeFp3Pr3cWr2aovF7yi0HZ1KAklYVyNnZKUKyGch8-Z1O_-NzeLcvNLv4C9dGdYqDktV4_x_En_aAhhcxiP0iS7T2EXzL79EVj0AJtbxbaLUIi2cc5x_QbGdqBnu6ovqPw=w400-h160-no"
, width: 150, fbname: "", fb: "", webname: "tevarom.com", href: "https://www.tevarom.com", target: "_blank", texte: "Tevarom", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal18Spons.push(spTevarom);


nbrOldSpons = nbrOldSpons + 1;
var spFoodIngredients = nbrOldSpons;
scmOldSpons[spFoodIngredients] = { Name: "Food Ingredients Technologies", src: "https://lh3.googleusercontent.com/zFCdy0HkZqMkSUNigjwgOJH5Ub5YbZK7e4hgvsX1cuAAeXfF-1Dq0-her8nZQjgbkyJ6WUhP9MH0S4Ph5egz7Ba2YqaeRmHcrF7B3oNCaVh3k9IgNJJH6z7WVWi59CE3NdUlyyAPHmCBtlJ-QLBtFwAjS5ASTCbNskW4cRyj95_0OdiO7a0zU8vD3_HpxhdLJo-dbFBebqOh02xQH6kZuSufEVU29z1i-nMTlO7urDtygbe0beThJCIPQ9wuwCi1HosGk5ZmlVfpU1iERVyLi-QSLwSWS5WYfJNdVOmASPA9u_SWcZfMQg_LFh3LompHaaXA9f5nlCxvathxvA7QZ7LBf5kAi6JIo9M-4XVgiALLCC2nIBcrLOwwpzvBQg9Ao0vdPTMczS9eDhC8k-G7pMiS4EobUPBm3GbglIDM5dct_gRQJrC7D9HGL7vjD_yRvc345LZYS_1ufuy4EitiQvLGwcW0udp3thglT1qdb7SgxVFiS1vjD6tf85q4FTI7YFXQOfZ3wYPXuCCTqZxPeGYz1jhRt9Z-ehS4JDpXu6bEEjWzURFLf4NoCqQdEqTIj9h-Ia3MEo4ZkNnP7CCbxEv6eUwLZOGVTCrzWAhQFvgixqiijaMHD0ekLylTBrNFzUrtl0swj64ijYqD5ySJ2BedWPD6xSWp=w432-h167-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/Fit-185258971663626/", webname: "", href: "", target: "_blank", texte: "Food Ingredients Technologies", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal18Spons.push(spFoodIngredients);

/*
nbrSpons = nbrSpons + 1;
var spAngolo = nbrSpons;
scmSpons[spAngolo] = { Name: "L'Angolo", src: "https://lh3.googleusercontent.com/eA5P4vxZCmSIrILyH5I2OQVZdQB2Uh2H5xA5gvlqkfxulmOpwW8JttthzItYMf3eMHqZ7jDZDkF_A757sSkzScrmh1sx04vevksiuZc1Ejrnfp2Z1A-OUhowsCSGKHJshfPYfEE4BLGvJc3101XDKvcs0rJFBF5-UwxoC5cC1u_cfrK9AkxpIJC2z88gKUTH-GTU4FDuxlB-QnC51iPZ7SyNLus92PQdZ38i43LLB-tPcnVB2WhdZiv3BgwkkuvQsiwkw6iKmHkJVTdMUbYn-Q1Yojs-t7AmmqsjfkNmL7fpF01gPuf-InW7gixONdlotCMS0lgKTREurspU8dGWveZT94S8myf8GGmlFCOD5PNBk0tjP3MsWpkDV1cpqSgr8bel677-om8i8XUdi0MFyc-3dB8ht644OfT6lUABMlKxO2Ll_VqopNIH51ay_45gxJ6mYjVSP4I6q1mCUVPcE0RadYPaTdouJ-kIDnKKomr8J23pvEn73afwnHeShM4ymsBXIvJHGNsZOAFvviZPDfDBNZR9iGRr-vnkG8lk-gTFgsbEh04reZYcuOZA7dtClog5AtOrFABxr1f00zl4IeY9iktm2bvJzn1-2zgSlw=w427-h222-no"
, width: 150, fbname: "", fb: "https://www.facebook.com/pages/Restaurant-Langolo/253220131363656", webname:"", href: "", target: "_blank", texte: "angolo", infoAdr: "", infoTel: "", infoMail: "", infodesc: "" };
*/


nbrOldSpons = nbrOldSpons + 1;
var spLapperre = nbrOldSpons;
scmOldSpons[spLapperre] = { Name: "Lapperre", src: "https://lh3.googleusercontent.com/5yUsld-ItXg20jgxSgk7Op_qn00aPDBdEiABt6ii94kvQBLY1YUNTuwi9tPb-J3fUeM1Dtrb4H4S9NUhVrKeRDWCVtquPkGRoAsBzDg7tneXcVnlO-DjsNEXmGxUsbuRKKhpM3IBF3ZL_r4jxflT8BHS9vHI4UGK8LP51MjhCqQCpKXpt4EZwJMwMm7huwLx1CdnPnFdCJr-1qcXVZe-Gu3QgGcO0Y5Vh3ma6VB4rxOfuMsvngYeoceuAGsCocA6iqVB4xCH8kipcz3Uw1Im0CKNQ5xm3PgVNLXQDhSoULvfDAsEgw3gZhDvxfBIhyLgz8uOY-UmRFmRZWqb6i8YqPUXC-Ft46ULgU3__uDu__x1qWHMb3WI5B86NXYrDI7CJzfxqd90MYyJAuo9AEBPI0aHGQ2M_s4NPAxSUrBjoad6OKp_Cxdpg_mA1imOpaj0dhh0LiOOjKRO3EcDI4AzI_OxWpbsCLDM1hQJLiLeVEbzFG3PF5t6JahcOrUCqNId3Gpzuy7r9b3c_HOUgPH1Ye4NhF41CxlS26OXzvCHp9FN2mrGhoHWTLyk1IeCrBAyrBIiqjeWCo5pYxGR-jAs0TiCLxZ7IAI=w773-h298-no"
, width: 220, fbname: "", fb: "", webname: "lapperre.be", href: "http://www.lapperre.be", target: "_blank", texte: "www.lapperre.be", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal16Spons.push(spLapperre);
Chal17Spons.push(spLapperre);
Chal18Spons.push(spLapperre);



nbrOldSpons = nbrOldSpons + 1;
var spPaveca = nbrOldSpons;
scmOldSpons[spPaveca] = { Name: "Paveca", src: "https://lh3.googleusercontent.com/aj-QzgJ8NllEdjjvbUYmG4-LNrSN_mTtDYdS_Az-jMi0cUjsHWSV5sbMMaRG7nnw3eHUj65QsWPgDYviSmfbVX1nbhzmRBQj5tVsul5Dae1IImnqynVyv7H0pt9ljDDj4XweUlNfzpcWQVAW6Y1kbMbyUBpXUjkVDJbk3ZNA10MePOsvuwjPBhsy7lN7VEWcO_k8fAVJ3eHT1apINM0E9zzgO7GdXbKri_nVzHmgtgR-XqoNRmLRCL5ZOzF2qiroda-2TnDuHF2ARbVUpvQ6c82Q0C5zh54pUsiv_HmEfPy3LCOE3_bGpyj-KyNTa5tpTbfHUK1u0dcXC9yvii0-TeZ7j9BrOAo3uLsu72jY7ppm0Nmb8Gs0lQBOZ5ffdrqPPOQMQaj44B6mtEh5Zh4hV1qOh1Z2bb867s8zxU7Chl8Rk4JazpbBy2Lh4S2RvDPMgRv3_UyN0QBcil3CU06U6J979arqEwM9wwlJV5NZblSbUk-tq36_8KQwMxAHCKcObi3blg9hRLY6FZGMEqVxhd_tSB1J1J45H0eK6vSnm0FULMnQO3B33ZddIDyUJfPSjLpQJAYe_XvdbvzsOizC78bB-CIKNTA=w760-h677-no"
, width: 220, fbname: "", fb: "", webname: "paveca.be", href: "http://www.paveca.be/", target: "_blank", texte: "www.paveca.be", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal16Spons.push(spPaveca);
Chal17Spons.push(spPaveca);
Chal18Spons.push(spPaveca);


nbrOldSpons = nbrOldSpons + 1;
var spPhonak = nbrOldSpons;
scmOldSpons[spPhonak] = { Name: "Phonak", src: "https://lh3.googleusercontent.com/6bAd-_BAOVFMoIU8DmxLiLzp4r3oyyH7fH2GHWkRe_-9zqFhpAAP4lQgC59YC8RnNCb2uDtOW7xeie42XyFFIevWTNIf_BTydicQf9F_x7iFUiZHR-jv2prAMhdn7k_x_QVQWw9v_D1NffFYg0Yg0uaVYIIXHxQuejvlILDADT_qZ8Vyi3BUfTjuMH_uBvVMRv2-tn1LHgsPAOICqWNjbHihZK1WsdO56fppz3yuWEYy-6EIN4aX1qjOp1iwOaqR_FOhG37h0AMACWgjQNFWVFHYlZE6dXTDEHoNZdRz-7Mi-RklYvgTEMH9zU9bk-GMITCX0Hn0hu7g5fAMIM-waSjaTfnHoe7JWRTMw1FaJ0AKcZNV_G7lyBJazbggsDowPMVwG3p2tK8UuyIa9-hIPxZuaZl1EX6IysbsBSbu1JD28dFKKVaVxmXtQ1nPHBeGMPR9L0UhhjTBQ7eNvfYTIY1j6yc8z3X4NAIdZM6xHajOcyXAjQjuG3BmtyMRzzW-O5K_Mq6gYYKxkfz1Od_4n16npF1FE4Of6hTdZMIxhaILxVYZovbXDvHUUVj_NIqxRD_4ZF4CK0_QPF3lDoVdw4e0Y2a3NrU=w512-h352-no"
, width: 150, fbname: "", fb: "", webname: "phonak.com", href: "https://www.phonak.com/be/fr.html", target: "_blank", texte: "www.phonak.com", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal16Spons.push(spPhonak);
Chal17Spons.push(spPhonak);
Chal18Spons.push(spPhonak);


nbrOldSpons = nbrOldSpons + 1;
var spManufast = nbrOldSpons;
scmOldSpons[spManufast] = { Name: "Manufast", src: "https://lh3.googleusercontent.com/2jQOrBoraAAZy2uFSEvD-vvNmzvHO1ZnTIxtO8UKiGyqVKEyD07ziHS7oZfkjwnXRLWy8eXgzt0Nu0uUoRczArJlxi4NEaes7FSpTHecbISJsq6wLeaFGie1rxMEYAIoG_qDIX2OcroZaYTds-DketdiKVYTQ4QL1gw4M9XLBJSsW-BT4cP9ocxzc1gguCU-z6KiEoHnTczGIuaSkhUTc9Oj_C3i064K2kwk5wgdbJrNcUuz2xWD6egHDjmBn0gftwGxZpkTfKBUz-0OcZW2KANwjwVdnjh9igRt96-edgiKbbZUYijkQCwJdaTG7FX95FDKhsT791ynG7JXyufPXJuuGaYXA3IHsnAwsKplPZ7v7ngEazyDJACmy1-NPD9QXLAHYXJZMcOOsWuxDDpVz6tft64TCF_6OiOnPKpFiEDp8zMfq1ZcAkUFtMFpk1mvmIyjFanBMVizHMHodcEeZM3r4rWIBmVxKE0O3KTWjGZV43R2cu7Gl_qS5Y9dR93jD8zpLhsYHhJQN8IEWRFbDn7VwKIvdaxo4bDulZF7TeT1mevZOn7Dfc30mZqaH8gVRm660h_xMwY26JpxbQJQsWbtv7HO34ApWDaKLgjJDHsjsUdmcfIZUG_U=w569-h239-no"
, width: 150, fbname: "", fb: "", webname: "manufast.be", href: "http://www.manufast.be/", target: "_blank", texte: "manufast.be", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
};
Chal17Spons.push(spManufast);
Chal18Spons.push(spManufast);


nbrOldSpons = nbrOldSpons + 1;
var spRMIConsult = nbrOldSpons;
scmOldSpons[spRMIConsult] = { Name: "RMI Consult", src: "https://lh3.googleusercontent.com/4eRtqpo2iHBPCVlpuXcBR-K1PIFe0lFHWhTzIDG5loic7DHlWiE-3awejaJTC3PACm1j2gmriRUWj8ZWW014CH-5TKJRpRdoBqtC6TUgqE6LqG7BAQKTkc053DWyKFyBp-AEFICFu50B7uAfwJRz7cIJJm_V2k-449ID-iKpKDSwmQLLa34rI5F4IKET270qUWuyDJjR3xjZvnWOxtm9HYWCPfYB3GCbidQZ7DKPdGRiuudtXw02IcOqgHZtDeq0r8sf7iculwB7P6JUyi6M6mwavv0nEYBuAY8CAzQE59Kf9ySB__i_O8wiHHp8fVMsAEbTc8mZXDZ4jivyaTvIp5LTB0lLBBpmbe9uaO-0jY4qTr8N6tAQx8Rjz_D4RTrJSYokIF6mAA0HKMNg1we8nwBYOoTfhvv8ncjWKoXql5KijmDvRAg-BLOBxxfi17WkVR3DDP6YmTOPMhUPKx6D0cCfLsXXQ8FKH_jqSsIgDj4gFoQvXYknoMIOEl5fG5DL0SVk2Fgk0IQIUZO7jNPsuJzP1_2aGIUHYKdkrgSthpVT8GMJSCEZADBv2-aj1mW2rnqj2bX4Gi7fYGzyZNzRewGWTEOOZdA=w639-h386-no"
, width: 150, fbname: "", fb: "", webname: "", href: "", target: "", texte: "RMI Consult", infoAdr: "Avenue Jean Monnet 18, 1200 Woluwe-Saint-Lambert", infoTel: "0473/96.45.86", infoMail: "valenti.riccardo@gmail.com", infodesc: "Conseil de Gestion"
};
Chal17Spons.push(spRMIConsult);
Chal18Spons.push(spRMIConsult);


// ****************
// * A RECHERCHER *
// ****************

// nbrOldSpons = nbrOldSpons + 1;
// var spCredeco = nbrOldSpons;
// scmOldSpons[spCredeco] = { Name: "Credeco", src: ""
//, width: 150, fbname: "", fb: "", webname: "", href: "", target: "", texte: "Credeco", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
// };
// Chal16Spons.push(spCredeco);
// Chal17Spons.push(spCredeco);

// nbrOldSpons = nbrOldSpons + 1;
// var spOasis = nbrOldSpons;
// scmOldSpons[spOasis] = { Name: "Oasis", src: ""
//, width: 150, fbname: "", fb: "", webname: "", href: "", target: "", texte: "Oasis", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
// };
// Chal16Spons.push(spOasis);
// Chal17Spons.push(spOasis);

// nbrOldSpons = nbrOldSpons + 1;
// var spSchweppes = nbrOldSpons;
// scmOldSpons[spSchweppes] = { Name: "Schweppes", src: ""
//, width: 150, fbname: "", fb: "", webname: "", href: "", target: "", texte: "Schweppes", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
// };
// Chal16Spons.push(spSchweppes);
// Chal17Spons.push(spSchweppes);

// nbrOldSpons = nbrOldSpons + 1;
// var spCDrone = nbrOldSpons;
// scmOldSpons[spCDrone] = { Name: "C-Drone", src: ""
//, width: 150, fbname: "", fb: "", webname: "", href: "", target: "", texte: "C-Drone", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
// };
// Chal16Spons.push(spCDrone);
// Chal17Spons.push(spCDrone);

// nbrOldSpons = nbrOldSpons + 1;
// var spMenuiserieScarsi = nbrOldSpons;
// scmOldSpons[spMenuiserieScarsi] = { Name: "Menuiserie Scarsi", src: ""
//, width: 150, fbname: "", fb: "", webname: "", href: "", target: "", texte: "Menuiserie Scarsi", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
// };
// Chal16Spons.push(spMenuiserieScarsi);
// Chal17Spons.push(spMenuiserieScarsi);

// nbrOldSpons = nbrOldSpons + 1;
// var spFederal = nbrOldSpons;
// scmOldSpons[spFederal] = { Name: "Federal", src: ""
//, width: 150, fbname: "", fb: "", webname: "", href: "", target: "", texte: "Federal", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
// };
// Chal17Spons.push(spFederal);


// nbrOldSpons = nbrOldSpons + 1;
// var spKhalid = nbrOldSpons;
// scmOldSpons[spKhalid] = { Name: "La Tradition Khalid", src: ""
//, width: 150, fbname: "", fb: "", webname: "", href: "", target: "", texte: "La Tradition Khalid", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
// };
// Chal16Spons.push(spKhalid);

// nbrOldSpons = nbrOldSpons + 1;
// var spTsuki = nbrOldSpons;
// scmOldSpons[spTsuki] = { Name: "Tsuki", src: ""
//, width: 150, fbname: "", fb: "", webname: "", href: "", target: "", texte: "Tsuki", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
// };
// Chal16Spons.push(spTsuki);
// Chal17Spons.push(spTsuki);

// nbrOldSpons = nbrOldSpons + 1;
// var spEvoo = nbrOldSpons;
// scmOldSpons[spEvoo] = { Name: "Evoo", src: ""
//, width: 150, fbname: "", fb: "", webname: "", href: "", target: "", texte: "Evoo", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
// };
// Chal16Spons.push(spEvoo);

// nbrOldSpons = nbrOldSpons + 1;
// var spLeJardinAsie = nbrOldSpons;
// scmOldSpons[spLeJardinAsie] = { Name: "Le Jardin d'Asie", src: ""
//, width: 150, fbname: "", fb: "", webname: "", href: "", target: "", texte: "Le Jardin d'Asie", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
// };
// Chal16Spons.push(spLeJardinAsie);

// nbrOldSpons = nbrOldSpons + 1;
// var spCityFacade = nbrOldSpons;
// scmOldSpons[spCityFacade] = { Name: "City Facade", src: ""
//, width: 150, fbname: "", fb: "", webname: "", href: "", target: "", texte: "City Facade", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
// };
// Chal16Spons.push(spCityFacade);

// nbrOldSpons = nbrOldSpons + 1;
// var spGritServices = nbrOldSpons;
// scmOldSpons[spGritServices] = { Name: "Grit Services", src: ""
//, width: 150, fbname: "", fb: "", webname: "", href: "", target: "", texte: "Grit Services", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
// };
// Chal16Spons.push(spGritServices);

// nbrOldSpons = nbrOldSpons + 1;
// var spAtelierLegumes = nbrOldSpons;
// scmOldSpons[spAtelierLegumes] = { Name: "L'Atelier des Legumes", src: ""
//, width: 150, fbname: "", fb: "", webname: "", href: "", target: "", texte: "L'Atelier des Legumes", infoAdr: "", infoTel: "", infoMail: "", infodesc: ""
// };
// Chal16Spons.push(spAtelierLegumes);

// **********************************
// * A GARDER COMME VALEUR INITIALE *
// **********************************
scmSpons[0] = { Name: "Mariners", src: "https://lh3.googleusercontent.com/-6I4Xrh5Zu80/V06nhqdfu0I/AAAAAAAACIk/Ttr4En9rapg1zUoJtSHCftW9cfNRsTo5wCCo/s311/Lapperre.png"
, width: 220, fbname: "", fb: "", webname: "scmariners.net", href: "http://www.scmariners.net", target: "_blank", texte: "www.scmariners.net"
};


// **************
// * Photos Eq. *
// **************

var scmTeamsNbr = 0;

// A METTRE A JOUR !!!!!!!

// 2021-2022
// ********* 

scmTeamsNbr = scmTeamsNbr + 1;
var scm2122Eq8 = scmTeamsNbr;
scmTeams[scm2122Eq8] = { Saison: "2021-2022", Name: "Mariners 8", Event: "Saison 2021-2022"
, src: "https://lh3.googleusercontent.com/pw/AM-JKLVy6YFjZEWBUyEuFD2MaALj-453tzNEjS87PxXvYb_X_vcg9zOO34XV6ieppuANmJG1O6vfW4t4Ubh8Lvv92tWzV_889Qt3r35KFs8j381vDgCtLuAkKZ0wFSc7ZxUjSzMvcyO-s-GyPY-kmAQ6w_5d=w879-h647-no?authuser=0", width: 400, target: "_blank",
    texte: "5ème Provinciale B",
    desch: "",
    descb: ""
};

// 2020-2021
// ********* 

scmTeamsNbr = scmTeamsNbr + 1;
var scm2021Eq9 = scmTeamsNbr;
scmTeams[scm2021Eq9] = { Saison: "2020-2021", Name: "Mariners 9", Event: "Saison 2020-2021"
, src: "https://lh3.googleusercontent.com/pw/ACtC-3e1a4QyNGnFJIu3bRvgRlobHjxuf52ZCoLG2IbUpYxdpKZm7cHkykLYhh3d6uOIOB1-HmQmXR3A0lWcWR6yEPpIakYVsyQyU9bVV4k6sbnacvwJsZWCK9tsJsI5V33b3HIrdNlWMpx8LWfJ_lBnZzbX=w775-h730-no?authuser=0", width: 400, target: "_blank",
    texte: "5ème Provinciale I",
    desch: "",
    descb: ""
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm2021Eq5 = scmTeamsNbr;
scmTeams[scm2021Eq5] = { Saison: "2020-2021", Name: "Mariners 5", Event: "Saison 2020-2021"
, src: "https://lh3.googleusercontent.com/pw/ACtC-3d9eHqAyX7Ot1c220557sGWXjldrHR5CNg214GIjOLhjmq9e8QtEsZ7ZyD43bh4x-3T8D5RWIYzdm0a53KH7CoQA-eDdk4-OIz2fOkrKac98WA4c1OoVWzCCmF6n32F_HJ90OuvOZSgqruRI3ovJia7=w901-h609-no?authuser=0", width: 400, target: "_blank",
    texte: "4ème Provinciale I",
    desch: "",
    descb: ""
};

// 2019-2020
// *********

scmTeamsNbr = scmTeamsNbr + 1;
var scm1920EqV2 = scmTeamsNbr;
scmTeams[scm1920EqV2] = { Saison: "2019-2020", Name: "Mariners V2", Event: "Saison 2019-2020"
, src: "https://lh3.googleusercontent.com/pw/ACtC-3fsd5DGcZmZDcisgzvhbKFu0WYeWq2jWiXfTzSy5juLUMQp_A05nEIELoUCbOmUmAMUzPjPnpjBc7s9c4HEMT8qUzYTe8gM20UniaQByJLG2kwaMP4k3GN1r06573SK9WqHSGLTCudMD3rsIQqQ3spG=w901-h438-no?authuser=0", width: 400, target: "_blank",
    texte: "Division 3 - Vétérans",
    desch: "",
    descb: ""
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1920Eq8b = scmTeamsNbr;
scmTeams[scm1920Eq8b] = { Saison: "2019-2020", Name: "Mariners 8", Event: "Saison 2019-2020"
, src: "https://lh3.googleusercontent.com/pw/ACtC-3eHnjN4dkO8gXj45tXUnP5eX2-2a-sTmvaWcXqZx6gpccuegwJnmTiFs7pZRmX11Bmml74mShHz3XRB1wynXdeXYsBJ9Tck1scBuYSJjRfHscFlRPqgjNRoAJ7hwQgCxsaUfXMYt7kl3XO1n1EkRazu=w901-h676-no?authuser=0", width: 400, target: "_blank",
    texte: "5ème Provinciale C - Champions",
    desch: "",
    descb: ""
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1920Eq8 = scmTeamsNbr;
scmTeams[scm1920Eq8] = { Saison: "2019-2020", Name: "Mariners 8", Event: "Saison 2019-2020"
, src: "https://lh3.googleusercontent.com/pw/ACtC-3eDO07urq5RRs6B52X6CbioJTphh6M7YARWfjFZLj8G-y62dbkkWMsu3o8rF-Z30IyGUAAhz5uNmi38xiVRnhcWPkmBdc8CjEV1CLLMzKz01Su4ZtzkN1llWM_ejHs4SJNPFiqIRtEc18scECTLoJMY=w901-h676-no?authuser=0", width: 400, target: "_blank",
    texte: "5ème Provinciale C - Champions",
    desch: "",
    descb: ""
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1920EqDA = scmTeamsNbr;
scmTeams[scm1920EqDA] = { Saison: "2019-2020", Name: "Dames", Event: "Saison 2019-2020"
, src: "https://lh3.googleusercontent.com/pw/ACtC-3e3UpuhBJBhGk33Tt_y8PysKqwBcylUdr3uqwfQS-t1869X8JbDfvfOhM6r7vgQ1Jx-966i7f51BvdakQHCXIfKeqOad0Ajn_56lWDqaPwVuDRspvxK7zztHw6DZ5kNvM86xPnd07I535gL0FIKZSQ4=w901-h676-no?authuser=0", width: 400, target: "_blank",
    texte: "Division 2",
    desch: "Pauline - Céline - Line (C) - Benoît (Coach) - Priscilla - Clémentine (G) - Fanny (Deleguée)",
    descb: "Shauna - Marine - Alessandra"
};

// 2018-2019
// *********

scmTeamsNbr = scmTeamsNbr + 1;
var scm1819Eq2 = scmTeamsNbr;
scmTeams[scm1819Eq2] = { Saison: "2018-2019", Name: "Mariners 2", Event: "Saison 2018-2019"
, src: "https://lh3.googleusercontent.com/cVQHewpteCBA6wcqUjIDHKRoSeODW5wmC5FICG2RqA09Uy3UZzVnz84SZPqXtAzqo47HXC6z8QMmXNgU4N0EQCJRd3gaagYsAQ9Pvbjk44AiIqoL475Q5af0_g0NRwj0GJ4QRZXxdVA5QMGvvulJHUyBdNJtfc1DVSjh3JPCom2uy9cXzaszsCJPi74c7-dxaKdIA9XbZWXZNOQsms0IGaDvClMYzvnnXvFQlg3pYObZ3HlYxAbcNpUygonPrfmGxi2H8VJjnyrbYrYoNukPl36xl9x-QhQXnbFxGEhlTkocaNgcS8BQc0E8crlYYBoGAWS7k8cwhrx9q_MfeEwMtFLSeOAIvweymjT50Z2cF-81WPESZ6hAXodgjO5M_aHJ9DDfajQkh7ahL2DZVslr0lHrdW9N_7hJzYlLygM1H6d1qF7vd5d9B8yEX-VYXVM_wi3DSxhS5oBAxJpubBZmqxlj2pOCWV1VjKtz26U4-O8uYQw5_fl-YUDYNw3UT8Hp2RolDpLLajBvlF6XhFC8imM3b30aneWoryOza7QRarS3-0cGHfaEpKlhBaxlLeGqiTB8NMcUjuVZXC_vx6wXsjUHpEZTgUAS6Dk21jQew-eNpJ65s_ovh3rsw_T3LLsaYKL4F9NyA5qGOYWYeUfWvXJsBXwzWsjj_g83dUZyDox5fIiNEzuqYi-qXgq3TCKC9JA5fM7LxgysmoAbUf5ikjU0=w901-h676-no", width: 400, target: "_blank",
    texte: "3eme Provinciale C",
    desch: "Geo (G) - Mika - Claudiu (C) - Jona - Alex",
    descb: "Samy - Kev - Anis - Dav Seg"
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1819Eq7 = scmTeamsNbr;
scmTeams[scm1819Eq7] = { Saison: "2018-2019", Name: "Mariners 7", Event: "Saison 2018-2019"
, src: "https://lh3.googleusercontent.com/2s1Jv4Dz1IEOUmbKbUw4ncSkbS1pPaWXffnm51wkOGWYBxT9fXHQaFo7ugS8q8TPtOkXErvzYYxeu0QAlWqBKbtASfgjiqCNXfS3Zf2bzN1qoqcQnkpvX_586sEavJnh1vDzgElZoMYG5dMhWHYheTM1elEU44mxSLPIJ2DOV7fRYiTGCS4mPncBnacFTpe35QOhOqBMhlDvVonxopzrQHFp_59iZzLGW81aphRfTy92u9H9l_bqmJbeKYBxgGY_ufA2MrBtwnPpoFiqpWSxrli9_ihn1Awg6K1S21gpo-N9rk9njOS54IZWXDWZTbEoGic9sBLiZS1PhqG3LAOGT2tDAV5QXn9etkjHx1QZAjAzusJVyRmFGZRH7o6P_5YPRXhskOP_jlQ0syjga99ZJ_Wdg1ihViHcH2Y-aHWWxadWuO-nA2YruUN31MIyjqyj6CZzjAiIvfhbxZeF5cOxk-4GvlDwtl6ZAjqbu78ZCdoP3RUrTk4ZE-aMq6Om0NiHgr5YulZibWw7NmCM8lRx3OKUYmqPeMOVtjRv48_VLkCC2XBwOUNaiJffoD7v3-gJyXNlT5wfIoUXOfJpkOY2i_oLf8NIfNBCxoOC4X_a-rYYyWDbpXXHFmp2SxUtIhipixLwQ0AoYgTneycd8UjEDkqmNpXaH6zfAOqRE2wr32K-392dV3mtilVrL1Ubf3kRoF0yOOQWQGOw0VlERtYJ4x8_=w624-h478-no", width: 400, target: "_blank",
    texte: "5eme Provinciale H - Champions",
    desch: "",
    descb: ""
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1819EqV1 = scmTeamsNbr;
scmTeams[scm1819EqV1] = { Saison: "2018-2019", Name: "Veterans 1", Event: "Saison 2018-2019"
, src: "https://lh3.googleusercontent.com/cm2TaPNRdp_evPOqDEGV_9u9raleYkqHKTY56TOr8VJ8m-Afcy17I9XuLx7O8ficN4KAE4x1QyRiDvj7xdcnePIO0kDiIy643eoDbwYPq9EJCtxi8guY3Qu3Wml4xw5pkvXl2o5JAWl4mUwxhtiA6lNyplYca5I8JIB4t3ZnLEg09b9mUm_GNFZ_9O9boIfXar-gpX38_lWF7qH3PaXV1u6xiS7g3TxQ6FYtbGxjb8MSVP9tGdFWDabNOghJ8zcQjJW5Sl2Hmq_CeAbMmgn7Zl63Up_fC6VDo72zCogCbriOL35QFEoKtCesFeH_5dOP3azh-NxTT5wkLQIhOUAzAaA8oYQzqSA_SWXTE_OzjZQWYOZPxiqAlQ_QrcjrUaKPLColfAPLTqNMGEiUdDz6_eF5jFT2Nmfo529nmnAgpdtTl_ntrvWKhC2wSqjOuaiKL27oFSyLZ1nRSvt_I8oQYXKt3LvhGwo9AEf0BJJVLimB9UEBpeF5FIYcxF3e1ieoz5Bms38y9h3AtyP7n9n3iwoVk30ufQYlHiabN1sH9VD4QvKUnKlEwTDvIcG4mSnidGFc1UgfH03tBWyCxMYc0mAQ3QF9KllpYJ0IFTjmYWRnYApt5hEMd9TMmnEMW_1vRiCsUR3a7z_mCvyINUv8HpBXHtEdMLoJGVladRuhtE7ftww2hWOh1lGz-Ek3kot5QzZ2d8dUocXUyhiLBn6H8XUf=w901-h676-no", width: 400, target: "_blank",
    texte: "Division 1",
    desch: "Piet - Nedim - Guy - Xav",
    descb: "Dav Seg - Luky - Dav Robocop - Fab"
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1819EqV2 = scmTeamsNbr;
scmTeams[scm1819EqV2] = { Saison: "2018-2019", Name: "Veterans 2", Event: "Saison 2018-2019"
, src: "https://lh3.googleusercontent.com/OUl4sFbud5DtJI9smw3noolyJ5Uij3UnYfB5vqjgaKT2D2C7yPTgQsNyC3TJvohzXLmiSwn8ofVnRsKL-vKZ4ZwNxDT6JSEveh92poWO35D0rl7KLvtGj2tV1WWGHWuzM7a18lt-7r-gmN7XT1GXuThnuhHet322II9MZk50_vikEBj_MKp4CtglhWpHz6zfskECRfTUjvkSLj_7iC-YfVPhjLrGp8anVOcStlPELbhg5hDcjYBZQK2u6hqdQ4CBO8HxuMx7xDW-12JuUTZyp1R1r2SBWk2B9de624V46ThcTNKfKBOqXmFQm1nRDzDG4VFz0LZWlbp2tsk9IbE9nPgkdYGOfQymw9PEB27lhnwZPWE5UMK3Vgm07N_ztviG6zwIGD2_g2gIkx_ey3tzA8X3J_WOA7plkpvYEsmRV209CXIluqIBNEv7S4ZxbDX1wDfFUa4OdAEvPAqqztHk-OsJATZ1EwEBXKwf7ZzlBDlZPfzL5R3yyvDIaB7i9Usz7xJ4eTyGL4hNeEi1t3W2kTxqBWcOhOBjn69JDUMId-j7qv-OUby0LbtkVpFw_HaDhbDnspJx_cH2sQ9-F-vLocni3Klf9ijQZoO0ND-4Dy8oURk0zCmmEMFhNw13V74Q7Sgr3CW_fYZYrTAtBhQqCHuBGYBryXgPemL6cCQu1pzFbulRhs7sRM3A=w967-h646-no", width: 400, target: "_blank",
    texte: "Division 3",
    desch: "Hakim - Jesus - Karine (D) - JP (G) - Ahmed E - Ahmed B - Haçik",
    descb: "Guy (C) - Jean - Ahmed EY - Gaetano"
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1819EqDA = scmTeamsNbr;
scmTeams[scm1819EqDA] = { Saison: "2018-2019", Name: "Dames", Event: "Saison 2018-2019"
, src: "https://lh3.googleusercontent.com/Sdp8bLDNAeVZC5ZvoKEEkxRzXd8oOBIJYfBHimFvhHGXegUG6BubUS_LCes2VrC6WRu9LfOHcbMSmCqbaPfsTsoA0hGfaPOJJIEdQgBNlQsQpdZFj9NzpWRvM8NAFXXpOu70-6K-cVDiXJcddIO1iP5u8UMWMFty2Ldu0wnyCIvrnuqO5dt10i1FQyOwO-Gxj5tn_yfqLqpqAhR0FKeHFJQC8hDGIuRiU8Wvv-VF60GdiyxPUFrupEdpkQBwvetMvEjLhrftATbpgt6npKEGudau-I5YtQPUqhJeNqNoUGgxYGD1GH1ordAlnLFfi4ell0WqoV45hK4ONC1EUcXFMCj0DLS6UWQ7PAUPVm1WpLsptgnpEhj5Y2ECz64NlhOuQ8Wi5ZdkrQdtYpeuaVQmvGWs_VO43tNTNlNGBx2uRUbRJNAagQ2dAUJv9Gxv5WMXhBcBUjKbbFN-vqKPkXMfC7G4jTUsN05c9cGi8fLV2MGYNitZvaYDZSylgPTEAb3xMJQeZcLZjYXUTCicYtvx-FxAlFK6X-jkRC6Acjzuy0mbcwK6lc4A0UQ1pRWomtsOVKWjRSyRu1zW9rpK25X2Zm2yhvWgoRrxoL6KdxlMyRcF07S6h3DZC9rONz1v94B189RoLMedHp8_P0iqs7ZrKcwniGSNfRv4n4ha53gRXpToU_FyBr0_Faz4bki6_JXCM2T56sAhS4l_DenN_VoTjmi8=w901-h676-no", width: 400, target: "_blank",
    texte: "Division 1",
    desch: "",
    descb: ""
};


// 2017-2018
// *********

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta18a = scmTeamsNbr;
scmTeams[scmIta18a] = { Saison: "2017-2018", Name: "Marinieri", Event: "Eurotorneo 2018 (ITA)"
, src: "https://lh3.googleusercontent.com/DK9PvREPho3HopSvBCDRxsh63tmGcgiPUaQRinVLBUjkRVPUAmLoP4wyRHapESyC0yMkUp6aq4sLc7BVD7qCI5YWuCafXT4AEC7lT2HJB2LWo8PYs4wcU3feVJB9aJqGFOzFc4pyUvUG_TJIRpFV6N7AdgAXwSTPUIRTn6nP4qCRIGYvHaaa8BXiR4F9XTqanc9oUEHrN6KOZTbEneyzFGFLPUWdJFg01ONBUdIJT9-47RCoOwVZvEszeBiX_abJ2cGDErgBI9eH4Kf-p3u-i3Lx_vhMf5jgXVUm3jo6UdcF6hiSMtHrWq_bVadDU6x6xVM3zp9hT-cxrWY4JrlyP4F-adxkVn2r958iV6nwGkmGYwMwPXjcogemhzC9iiJLto1-SFujiw4T3Hn4NNmL5t6yYTylkx91Oqm672SYRxaRdJVbUR4KSENeC-r6G6MKZqGb22OukSw9gJJPE-WS_esOmriiv_9YypoMYEupYBgfDB-XTpxjA3oqNOAlqb5sDnnUa1CXWYNJ2XcwoS6z-DuYjZl5vLgDtPT5qtjkGgJoXNLUoAqSAA6E9KFJ3tRPHsz8X0Mb07Aq-qOd8y4xuSKi-3l55-fEQ5JIpOp4sjIZTLAq3TY6mYfA_8vh7HY0GLuOABVbNefTMKv8zcoIz77NKlvS0IBY=w1366-h585-no", width: 400, target: "_blank",
    texte: "Equipes 1 et 2",
    desch: "Nico B - Geof - Fred V - Nico G - Tom - Micka - Gig - Dav B - Omar - Fab - Gonz - Jona",
    descb: "Raph - Alex B - Claudiu - Alex G - Dav Sc - Dav Seg - Gigi - Samy - Kev - Stefi"
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta18b = scmTeamsNbr;
scmTeams[scmIta18b] = { Saison: "2017-2018", Name: "Marinieri", Event: "Eurotorneo 2018 (ITA)"
, src: "https://lh3.googleusercontent.com/0_6PYf5KiPGqHctwl0NAmveJ9TFxGoC0pgCBvoJLx1yp8GBu8oAv2q4hLg2_H3upx1B5l0FWOm5ZjpE1TasGL17WLd0M4Cp6zrS84spgubbkGmfL0dVLuNzwuAD4rjsI5Zp4EevapQ=w1229-h521-no", width: 400, target: "_blank",
    texte: "Equipes 1 et 2",
    desch: "Fab - Nico B - Jona - Gig - Micka - Guy - Claudiu - Fred V - Gigi - Samy - Mich - Omar",
    descb: "Kev - Geof - Alex B - Nico B - Raph - Tom - Dav B - Dav Sc - Dav Seg - Alex G - Gonz - Stefi"
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta18c = scmTeamsNbr;
scmTeams[scmIta18c] = { Saison: "2017-2018", Name: "Marinieri", Event: "Eurotorneo 2018 (ITA)"
, src: "https://lh3.googleusercontent.com/f9hC0DNj0gTgkZ0nE2GBZkEYDJNNteatFejzlo2o9qDkAFWo8rlSIFiMMISNPMYf18cc4fBWvYa572EpKKTTzYh49Rb8LDJe47IQ5kB3hF6R6IbwGxQuUC2ndXfGpwHpz5ZVtDf-CncF85b7NDVGJcRtaIdRNNvF7e6QE-91FfEIshzA6mQFbXBo-cEIQ9W_OF-d8E5VuFToKXA_I6M5PV09nEweGhAnr30P7V6qoCGAhX2acqbl_rPtKBh6erv4H7t39uXOv5pX7pHPxqk3gZ-IynUzNJE1B4F9vXyyuTqeGDIO8SEsvNfLE_c5k00bAUV_4YbQMoPyhRHUPJ-WVpYkdYQykK1bMLAr9Y-M-sZt_ugaj6MpCT-xFaVUCS0qOHTiKyGeDFnyk0DV5Tm-BUqRDwZEQzyer6pWVPEsY9FVspErxbENKLY4AM1JNApektgqWX-bujGv7o5TKH0iKAfjluWyTg4T76kwZdVcLMJnhabauPiihnDc8iMja_F76lMMKyKWc-CEwEtyJSBK4VAOaJlWE6X124iA_eIdb19jxH_mBEfDMXlVx_PwwAtBfQMQFwqIAb3eu9Cz4Bd9mp7y3zqhnnI1kvYM1RSmDa6hfugApm97McP1KuFw96mF7o6KpnWzUcmEj5Y_jRikEeB8TzWh2kMn=w1366-h632-no", width: 400, target: "_blank",
    texte: "Avec Fulvio Soave au Best Western Soave Hotel",
    desch: "",
    descb: ""
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta18d = scmTeamsNbr;
scmTeams[scmIta18d] = { Saison: "2017-2018", Name: "Mariners 1", Event: "Eurotorneo 2018 (ITA)"
, src: "https://lh3.googleusercontent.com/e5nK3oG2GmNVJHdxe6Nio1l0m_FiuGbGbvsMn6cgbHAyfTLf8d6vXC2473A1R417u17te5BSNszLFNozGv_oJZZ93v_d3RElQuYY8Vj_2-myF8Efjcz18rBOyGK_cRsuBQXaUG6YcPS2htPNH7Nw4J4W_QQsCkUqbJlMkAOLCjL9UgenFRoSgkDF0TwJMs8KUcj_REDxfYD7g8YRRbtj3zttQSMSLAasQAzLvmd0oeREb8nUz5bcbdD2g_BgLpjK-Cb-gTcrvBS9z-vYwz-hhkwuzBVGZJYiGYpSyo6hXe8dABXayQUwE0jUW-iJIEoiyqV-hEtgq82WheqaY7CzUMPBG5WFYtHbuIAIuEkGfUiiUzjeHaUxt_FcZ7nbPC1DJuaYUIn5PFFJXC2M4avqQG8yBMeYI1vvnJRiqtzMLVwifc8f30WdeYg9GkX3qR_kKhruGCMCvbyHNb5sVwtdq0qGhP82MV_xeiJwQUR1wFPSOKM_mpXzcj7Bg0phhOupUbLVm9XJyJXKX4hnnQNKW_1aW6O2mxl-8NLUu8Ri8UUWbx1BfmlzXNOYD8HUJuNkt8QQqy0FkCMa9cEYTMbhht2x6g1O3pF1Q-lkb41rJ7KruXU4dwWQNkOTGxsGYYwnZfIPvR5rWO6O65LRRmJdWCd6zG7Zcimx=w934-h662-no", width: 400, target: "_blank",
    texte: "3eme place",
    desch: "Claudiu - Guy - Omar - Fred V - Tom - Stefi",
    descb: "Dav B - Dav Sc - Gigi - Raph - Fab - Gonz"
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta18e = scmTeamsNbr;
scmTeams[scmIta18e] = { Saison: "2017-2018", Name: "Mariners 2", Event: "Eurotorneo 2018 (ITA)"
, src: "https://lh3.googleusercontent.com/EXLKQhuoC0iixhfu-phGibnRmjGFfoQiyiyKFcdERak6N3RUReUpdjKAItt_mE4E7cHY3p5k91E_tPlZCO9Wl2t7MMADdEqoKoOxcNsKNDxqnmcZPnv5RimnZiAMiOw7HtRK1WNdfqod2YVqKMcsNq8su_SiN3hYu72Y1b9m4O4Kp-Lz1AoMREdA0dy1FW1rEJQ5hVuwZsa8rrUyA63pS54vH6Xsaroxh2uQIE-l41mW_fAS_YjSis4AcQ4P7rIXYc5JWl0o5TGcOE43zMLuU-Ja8ydHuqYV1NM8_mvaUQDS69hYbYdenSgxq4NGhRwDdQZ9Bi5iCFNmulfItnjVS6OZaPCOEs_D0YBSLRM3npHz52AFIh2bIF_vhVFU0h-2AIELPkZWCVPz_UEXbBm4MQZCzDs0npcew1OHthM1_hPfbTF8VuslzXOiS6ADJYpGZuPWkGBd1PQzJ7dqRbbdKV8OL4lDW8gB6F93bOm29lDjmmSMxAct3DBiMbyOBSgC2jMWCYhCZ-iHiLxOy0eQutRG9PdvuC3xNIEBhbz5ASADGVz9tDCKWJ86cgLzljtj8aBjWggVLbBaQ4wSO4jDmRvIPqo1lYTVdqqXSWit6wdCW8f-7IjKUjxpf4PWVFaYObIGUNi0gJMOLqHw0CAHwAkZV5IOCGiX=w934-h662-no", width: 400, target: "_blank",
    texte: "2eme place",
    desch: "Jona - Micka - Guy - Gig - Alex G - Nico B",
    descb: "Nico G - Dav Seg - Kev - Alex B - Geof - Samy"
};


scmTeamsNbr = scmTeamsNbr + 1;
var scmChal18Eq1 = scmTeamsNbr;
scmTeams[scmChal18Eq1] = { Saison: "2017-2018", Name: "Mariners 1", Event: "Challenge Mariners 2018"
, src: "https://lh3.googleusercontent.com/gsNlv2tX2ijdAibyyWoYXy9NiL3Hc9h6d5JkOdfzttWxgIv1LIJTyEFftK6gkoBZQ7m0BEuMBqbyRezerkLiqGPCKuGlp9FHuPgYhiccLSrCb22e4n7Iq-WPKyCrmWL_kXYFDi_MMQ=w699-h521-no", width: 400, target: "_blank",
    texte: "",
    desch: "Tom B. - Nico G. - Gig - Fred V. - X",
    descb: "Dav Seg. - Dav B. - Fab D. - Raph G."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal18Eq2 = scmTeamsNbr;
scmTeams[scmChal18Eq2] = { Saison: "2017-2018", Name: "Mariners 2", Event: "Challenge Mariners 2018"
, src: "https://lh3.googleusercontent.com/czE865Z2b8FwX23Ga_LLxttRBHCgHbR2xDejDfXct2bAQf7GuT5xylvvqZdn6U8Sl6F8kesQmTVl5BvLAKkrXK4zMG4WzSeefkXXm32fSW2L8coY0rYpRbrphsQ4KmnLD5_qz2WuBw=w694-h521-no", width: 400, target: "_blank",
    texte: "",
    desch: "X - Nori O. - Nico G. - Geof V. - X",
    descb: "Anis - Gonz - Dav Seg. - Samy"
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal18Eq3 = scmTeamsNbr;
scmTeams[scmChal18Eq3] = { Saison: "2017-2018", Name: "Mariners 3", Event: "Challenge Mariners 2018"
, src: "https://lh3.googleusercontent.com/HrZt9IcdDLRNJoAzGDfIE2bYwjGgNeEoFsIAwI0rtnt9z9ZGajLhoZKI5e4CTp4enSZAozFvRw9fUCUqUPNXzB7m2mv_VQscaWAcklml-28atMd0eTEU87HZDs8i9dqWzh15jeQGIQ=w745-h521-no", width: 400, target: "_blank",
    texte: "",
    desch: "X - Nico M. - X - Alan T. - X",
    descb: "X - X - X"
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal18Eq4 = scmTeamsNbr;
scmTeams[scmChal18Eq4] = { Saison: "2017-2018", Name: "Mariners 4", Event: "Challenge Mariners 2018"
, src: "https://lh3.googleusercontent.com/OiNGDo0KSkWe89BxkN6BOuC3Rrb_z-8HQdsCIMYnJDBug8OWnSflzULSaBdkv63sNYr7gO06WiVKDLYOmkW8CKgcq4dZ16QUo5Scj-yENKP-pqUxa1wKm8XNSMrgXHE_DR7k2ZbN3g=w756-h521-no", width: 400, target: "_blank",
    texte: "",
    desch: "Serge V. - Nico B - Mickel G. - X - X - Sebastien V. - Alex B.",
    descb: ""
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal18Eq5 = scmTeamsNbr;
scmTeams[scmChal18Eq5] = { Saison: "2017-2018", Name: "Mariners 5", Event: "Challenge Mariners 2018"
, src: "https://lh3.googleusercontent.com/g4X5ZGxUegm70PvxAIGe50Fll5JhZIcon9fXve4si9YhodEq_V8t6gmyGZ89rb6D-eP3qiH98t_lRyPpMKRv2_4zpKE9hrb6DwmQtIeQzBpGT8q1Nn6UB5rIs_YhSCjcVOl-SifvQQ=w693-h521-no", width: 400, target: "_blank",
    texte: "",
    desch: "X - Michael D. - Pierre-Alexandre C. - Thomas R. - X",
    descb: "X - X - Mohamed"
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal18Eq6 = scmTeamsNbr;
scmTeams[scmChal18Eq6] = { Saison: "2017-2018", Name: "Mariners 6", Event: "Challenge Mariners 2018"
, src: "https://lh3.googleusercontent.com/SWXqtocKNu6_N14h7cRtJb2R_99tX3QjCnKVV3uPt6P4osYDaiEPygIOevNK5c3vrHzx2usaBf3a3rsCD6HdNOndYKvFiwtmxnLX3pef2WOyMRZl02U0xF6-a1OLn8CtKOfOFurHtA=w749-h521-no", width: 400, target: "_blank",
    texte: "",
    desch: "Cedric S. - Jerome A. - Gregory L. - X",
    descb: "X - Maxime H. - X"
};


scmTeamsNbr = scmTeamsNbr + 1;
var scmChal18Eq7 = scmTeamsNbr;
scmTeams[scmChal18Eq7] = { Saison: "2017-2018", Name: "Mariners 7", Event: "Challenge Mariners 2018"
, src: "https://lh3.googleusercontent.com/t7VlTH6VKBiivnZIcagG4PEldgBzldbDU45_ivnecMYHNv0eHp5kTh1ahw2Qp55phxf2fVdNZoNQ7ga3NU8awJWpo3dzwOTk4o8DUGRCNaram2bctf_5DICzucsSMIV7PFwZcc_JsQ=w708-h521-no", width: 400, target: "_blank",
    texte: "United Vilvoorde",
    desch: "X - X - X - X - X",
    descb: "X - X - X"
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal18EqV1 = scmTeamsNbr;
scmTeams[scmChal18EqV1] = { Saison: "2017-2018", Name: "Veterans 1", Event: "Challenge Mariners 2018"
, src: "https://lh3.googleusercontent.com/H0IhIO7dR3vNA_HkTbUn7C-wZptggwDtMVl-u01qV7XxFRZI7DbY4Q_oUbf4lKsmhpcq7ooqgZTd8KFte8zzh6A4xCNKpupsqhB1xdmTi_IMhEaiEeardXiEbHeSWnUJc17Ip6dIQQ=w711-h521-no", width: 400, target: "_blank",
    texte: "1ere place",
    desch: "Xavier G. - Gig - Tom B. - Fred V. - Guy G. - Moussa E. - Dav Sc.",
    descb: "Gonz - Luc C. Samy - Nico G. - Dav Seg. - Gigi"
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal18EqV2 = scmTeamsNbr;
scmTeams[scmChal18EqV2] = { Saison: "2017-2018", Name: "Veterans 2", Event: "Challenge Mariners 2018"
, src: "https://lh3.googleusercontent.com/QlQB6pyv0jpq-u8P4jIj-fyq0X9F74h2HZpqcQ2OO0cmdX9cu8Q-bDr5yIIHMi6xIpqSa5YvPFTC4RJPXytd9i9BGaH7MQkD_vleMtyRWO_8ui6MZj0ueDXDHscAcigqsSNsezBp2w=w706-h521-no", width: 400, target: "_blank",
    texte: "",
    desch: "X - Jean-Pierre S. - X - X - Ahmed E.",
    descb: "Jean B. - Luc C. - Guy B. - X"
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal18EqVI = scmTeamsNbr;
scmTeams[scmChal18EqVI] = { Saison: "2017-2018", Name: "Mariners Vintage", Event: "Challenge Mariners 2018"
, src: "https://lh3.googleusercontent.com/vNjokB0lYUp246rM_bCY8RimWko11pRYd1pyQtzc-6cEOI9T3ZeN17NeTCl0f7KBmLF80SvnmzdgBF9g1uNqyprrLo21sAFpnuqhZx4_9RUkDE4yXOqI59qpktD880HXLt6zYE-wYQ=w722-h521-no", width: 400, target: "_blank",
    texte: "",
    desch: "Jean-Christophe Z. - Michel H. - Guy G. - Renaud V. - Hakim E.",
    descb: "André V. - Pistache - Dav Sc. - Cataldo C."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1718EqE = scmTeamsNbr;
scmTeams[scm1718EqE] = { Saison: "2017-2018", Name: "Mariners 5", Event: "Saison 2017-2018"
, src: "https://lh3.googleusercontent.com/xa1UN0fzzTm8ZyjtLWO22H_Zkhv_0wVna2bWVWTA-7BokLuJ3hJ4_ipxyE2kqfQ-cB0ltMhCBLqQyEQe8dFuPrhu6dLxGh2BNoIoJ28SOtNPjHB0OwgucJDo6Dp2QRlxnrj0ZcVqXD_dokgsqQcKT1V1Hum8ZQQ2VyraIYVSNLtLBVIn6zKScdCzwgxbdbrnDF-U4TkCCvyPfHJLhvvRkihf49ZOPHwnpYrVLEToXgY4qI19eNAwxbLnwOAoBlSnSDFjxzAZh2LquAG3WX0AV-Gdmjavy_uXgR4Kq3URsmXgQ2jn0iKc7FuEJd5M3S9T0xZIUYfFsQ3HeVxbQjqdpCbe4mWLNCwm4lqVkyd5lqtCc_QB8GaqyuUcw_cgUkFi_nMr8BOtPAQ5NbW7tI9d3tGS4_rUND6JxHeojzn0Elb91x9ILt_Mt1t4_4jsfymdXGA_-J80A8yJoTsqNrVykzQdEUX_NCgD-2qD_XKX110cLDgf4g4G3jmKTaZmzyv9IU3myb7eHePU-3_bxtUiKW2FcG9IVstqtMt1Jg4N2Wv0tNjKwMMRxkFyuk6dLElEMF8ACEEaAuHAj_K9HacbFbPHvsdo508qdalIk-o3Xq21O__YL029N1IISzBn3T4rzu3VpL2GTghhJgVArEmi83pMpB4hNJxV=w883-h662-no", width: 400, target: "_blank",
    texte: "4eme Provinciale H - Vice-champions",
    desch: "Alain (Délégué) - Michael - Thomas - Dario - Pierre-Alexandre",
    descb: "Mohamed - Anthony - Simon (G) - Lucas"
};


scmTeamsNbr = scmTeamsNbr + 1;
var scm1718EqAEqV1 = scmTeamsNbr;
scmTeams[scm1718EqAEqV1] = { Saison: "2017-2018", Name: "Mariners 1 et Veterans 1", Event: "Saison 2017-2018"
, src: "https://lh3.googleusercontent.com/XwmMPg6KlgKNux5Jd34HQTSRaalX0dLsC3NlqxfNCFEl1XqmJC3HZNA40B-82OzzzBnZNLexhj_4042MmvRWCxQG_FWGuxYfjbOFTKjHWUiKdYt8OdniAl4pJNMptOJ-0UpEGRuJ60gO7BQpoykrYTohrUVWYZSXzENGySjQoSgQyBeQAvB-H_IDyjcudnnW-z728gQAXvw6P45R5Ge8Uz7yxQgIbLdCMu6Hp1loyfKgKbrDB1WJQD70N6KIL6PzJ13uU4hmVsRXUaW1GmlBv4-qK6xcfDAJClDpfq2dqzG5zRhVVojl8jaVklRF8GmQDtRl2YAXDfiyKks3Dm3xUkzfT4CAQfD3ilnrQvtqIg93CMFOP15wNYBGowVFaAIQuTTKYD2CK83iEqoBXMungCoN-N8q1Iq1I4BUA-eIGOOWeqxDRwZT8FhBipQ9335A3tyeDThDyTv5fDrweseTUTDZ3VYsm_drBbfysMnkxN_NwC_LVK3q3mbpivfznb_hOHGKrFj1sN0IGFuL5D40eAoMkn6ifRArhItGgzugqklkTKJn8LHZuyGRCs4e29zYEzI2AA1rc3fxvvz2hgu67hUKrjAKTLFcSgyWRouO0EmA661x2O6P7mDHA9eOdlS1yo5d8_atH2Wa2z8dS2e54T8Ok4Un44CO=w815-h611-no", width: 400, target: "_blank",
    texte: "4eme Provinciale I et Division 1",
    desch: "Nori O. (A) - Nicolas S. (A) - Omar E. (A+V1) - Sebastiano G. (A+V1) - Frederic Fulvo (A+V1) - Fabian D. (A+V1) - Nicolas G. (A+V1)",
    descb: "Moussa E. (V1) - Luc C. (V1) - David B. (A) - Davide S. (A+V1) - David S. (B+V1)"
};

// 2016-2017
// *********


scmTeamsNbr = scmTeamsNbr + 1;
var scmIta17e = scmTeamsNbr;
scmTeams[scmIta17e] = { Saison: "2016-2017", Name: "Marinieri", Event: "Eurotorneo 2017 (ITA)"
, src: "https://lh3.googleusercontent.com/ZwxuPWU0pRWx_81Es6y7qPQSvLzY3m-c3irzNtJruKNUJElAQaujIFsNfuGO67KW4ZDzJxe2ZjGKgUVtQtgXivvWXo6sMnwYl5M9GPm3p10sGOF0chk7gorNRFp8FExA85etM9chZQuuDgtD6DElTwJRUaSMipIDYnVx3yQRp5ykFxLg1kGfcm7DijBzJfioGmPWBqnw_ljRs8EbzNZZvn3xGT5gJkdE3zBT74lq_iHoLXyugX9MXtc7edrjcCDWpuKoAJ-pugVIohrcuLblu_NFYr9wCezSiKnvHQMTiq8SFglP5CQ-uwpLPwaGUCLVAs3XmnV7IaXnX-YoX_gLBnyZ4VT6uuT7Tm-31YomZKnSQRiY8GO-dZJ-SNdps8RfLNM5n0R4Fx2RIjaonDujUaAJyfC0Zqv159mvxGiaFoGja9OBFBOZME4wbBvDGqlsgi6_P-GTzFruf1Bqj7nHNmERSXv5F-XBHXWMIHFn3b06DbBd4tMeOJMlF7ur53-DTGUhpk-lNddd1x0CatV-AaaCNdgjQ2_hWzSCnLkTjI0I_3NFSrB025LeZz4u16clR13w9TKMMlKhqMV08hrvuKgYrA02quotYWuJzUn_O5L645YsHjI1mtVKtOZovdOwm-AuudOlmWXtI8Uitp9I6-zKpUcMn0u_RxOJZSOiy-YLhA=w480-h636-no", width: 400, target: "_blank",
    texte: "Le Comité",
    desch: "",
    descb: ""
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta17d = scmTeamsNbr;
scmTeams[scmIta17d] = { Saison: "2016-2017", Name: "Marinieri et Gambellara", Event: "Eurotorneo 2017 (ITA)"
, src: "https://lh3.googleusercontent.com/fybpHVS1YLPkTSmM6t0DJUARZwgjBH5grwE9ymfuU8xJuAKbmwD2e8XLUc3GtNAnB7p8RU2ZqDsFPSS3cKwUZmf3G6yiAdTf7TzlmS0MQuvtl7p-Wsa_GfjB64W6XaI1AuyDZQpmzHyb1bMSAsVKu6W71vfvd562NtqbmwRznsBw_t8nXDxR5RR5GeO_8aUhlu_UDEtdsk5V0dR0WJ5dtrBQXKHXsIthTid5B5pJA8WkMSR3gGbIXiMn3UPhDxiZXzfJkk9q-ZirjET1jPTlDgsDG0EBTcFuwnDGNrlfUeyxc8INVlbBXfxC3CWZco0jNlPVA__ZXyCkAAnrNZr8-gvLDMGZGULwAb7Z_wSN6vDenB7dShBEBzZar104zF_K1d3sG_KyolOOe7TaYSIAfaFwcW7CR_N_rinLn-FJA5MpPksH3R1kr-RHzYwPdylQq8mAMuT8uA2NdOd5-bAOOWC07jU6gKC0TPI4u8IDup8_SlAMWqgE7HOhYoe8vmUrN-uHdIA_xc9_CljPIOhKVybS88KzhnRw9AhcWeBUhCdcyOsUeKG61AZUevFyEZphK89MNTD8JXI6vxUZNj1v28L8MFKxc7CCjmmDRrZbELuWBzr1KoVjhVD700C5xRLihKZ2UV6nrDssY_00iejWT-5wdRTW0sIvaB0ZnNOmPMM2JA=w480-h360-no", width: 400, target: "_blank",
    texte: "Hommage Patrick",
    desch: "",
    descb: ""
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta17c = scmTeamsNbr;
scmTeams[scmIta17c] = { Saison: "2016-2017", Name: "Marinieri", Event: "Eurotorneo 2017 (ITA)"
, src: "https://lh3.googleusercontent.com/ln-d5lkO9VGkllpUCPHLcRbDeRLMuRCyccpdDRufUHZFZ6A0rG1QIZGTTs4n3cevZcGh95HWyoe1lUNDsu7TYhLrrvCQIrzZNTzidPx-JSbEbwUViUzj4io11Hvfad3e4RTDNfKiAsbCLjvz0C7E2kWTxtpE__SeLsk_ihHZz-H8EGOeqvE1U5FeVT272tdA9_PO_z4SDx7GG8Na62FrqgNVpeiiauHl9FpZS7_jORz3wbPbZGjmNXN9g5N61t2ZfgeD_NFca-Z9um1xn5iv6opk4PDwCEan6cRzP9HbqoT8HxW8V95gQulXOKEk3xG_96zz4at_fMX-BXoPFQHE7mUsMQpCM5bj-35V_uWOTn_bs3yuVbFiF6OZekrFWitLh5ORfHnu9c024yycRIOmMjs1MdtBB2M7kKosKkA-V7KDnQ8tJAggl-XCxQv97fZXBbXREpxUGRAigSiQndywpadxfgTHsuk5zXr86fC47kfHU_SOE8jadzxSeqs6JrMOOQsNleDtMVzThG5zGWCYVnfzpmO1VmDMNOTuzimPMQkGAfGYaoiMNP-H546wE86YYIygvEZiPjxeeX_NZTEgJiZHWkOj5kPQpqOBSwglrNQfrPHTx3Pe_94XwQDFcqh3lxTErY_sObHXgUf_NHZlcaPz-SKYbhFBKuFtxfJ61VVw5A=w480-h357-no", width: 400, target: "_blank",
    texte: "One Name, One Team, One Family",
    desch: "",
    descb: ""
};



scmTeamsNbr = scmTeamsNbr + 1;
var scmIta17a = scmTeamsNbr;
scmTeams[scmIta17a] = { Saison: "2016-2017", Name: "Marinieri", Event: "Eurotorneo 2017 (ITA)"
, src: "https://lh3.googleusercontent.com/5sr8iY-NAPtP77OebeyPwJVhs4bnH4YJF6BhYmO_JsFv5i7nj0ECEotW9LExRkg4Ud7Gmtd3juXO1n-_KmUJF3_TR5Ake-UBPPSpEY80C7w0AD0BnyCk_Fx-Jo_waI7OpqfM_NHfg1M9wduBO_-LZ_mmPuZEtH4H7hMDDAtJdVKP_HYE6UR0I-4i2Xra6AN8U6kP13-8p2-G8YiXs6LtGeGURYtiVsQwqCESzNqnCsoPmL2YfVetYWbPhDQDetLJZbAlK_YN1FvZPmKdE_ooYGzoZ5yQAHE_t8pfR189pZJ67LEM5mvNyTEznRzaXED5m2DnOKQ7DKzHo3dmqntJRUZas7umCSj1SMivgpoJiFHq5V4aFBJYQ1f1-vqXWNNCmdX5IB-HaZpZB85cGwUWcuupL6Tl_IEEtStJg01nOs9ENpx4QedxyXkjirT1qNabbXAnOCZ5C803mxx-8mUDcUg5tbASxBuOLOlEeZFVhvklb_54TstyH8flKZavfEf0G8ejthpmftM-4AQ5YyNbtPptieu5ar8D7eDC8M70JhGVKbKM3hnM4iftXT3ZCcY0h7F5DJ48ARa23m-PvrKbDILIvA-ViKzawlKUlrKghyusJ1kpuxbe1vxPosSdAt_MSwX3Mj3uZFjOPB0bfQ0C_9V9HlzZAALxkPKm-DQaBj5P2g=w1336-h662-no", width: 400, target: "_blank",
    texte: "Equipes 1 et 2, 2eme et 4eme places",
    desch: "Nicolas B. - Tom B. - Frederic V. - Moussa E. - Sebastiano G. - Guy G. - David S. - Arthur K. - Alan T. - Fabian D.",
    descb: "Samy V. - Kevin N. - David B. - Davide S. - Nicolas G. - Nadia S. - Alexandre B. - Claudiu S. - Alexandre G. - Gonzalo F. - Photo : Anthony (Tonio Fossa) S."
};


scmTeamsNbr = scmTeamsNbr + 1;
var scmChal17Finalistes = scmTeamsNbr;
scmTeams[scmChal17Finalistes] = { Saison: "2016-2017", Name: "Mariners 1 - Bardot Berchem", Event: "Challenge Mariners 2017"
, src: "https://lh3.googleusercontent.com/M9co5dpNaf6irnD2ZSoZx7KwxVLl5rcgkVvfbxCW59H4TUnQ_89JX1OOk0EZJUCgtK3liWRmo4GeYFHLp36Domahcxkm99VOeYAUhJdPsgvPDtmWYJS1cXyaMuAAyNaSapzMkpursYx8AsBdJpoQTbuhZT3ozXAQdV7rqvcURACnIpn8ABuY2kQon3VVdi8RonoCmHlEu_K17wCYz6SRWn31WDOnfxWEkmW8SukxFYfvRy6AA0ZQ-n0OR887LbzfIK-e7Bgw3d5KZxCMSVUcxNGjtUxJLCHcQAV2vY60BHpgCWafVfbLZRt1bJWMnEoc_pXFpld4h32RbsDu-w6S0i_ZvqNeajRSHUyvVhAA7EzN3TR_ab9wJHfHoJFy1JYAbNpSmSELxtKmO1ALmaC5tcARlyOiyYKutFO8Y8K5L32dR2ftlyPiNH8Uw8EcFWOdvuGw1PVxo8WZRQT69nuh2y5IBMhhL4DtwIlh9QR2LqTJq2paVXJvPsQDlCRjM87-Bc472shIy7RWuAW6ooqLV1vrs0yaRg4dH1BfXsFH0d2lR6JUn6865mK_bvg3vueuaHNPyI1Nsil-skz1JWoc7TK9go6UHyZIHrxYB9yM8cYzGCN-hijh2UoPnYvQXrhgC9claWoYEoaMD7HvmDECWCaVnHkMOkSrfZaOvKB03_UKGw=w883-h662-no", width: 400, target: "_blank",
    texte: "Les finalistes - Hommage Patrick",
    desch: "",
    descb: ""
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal17Eq3 = scmTeamsNbr;
scmTeams[scmChal17Eq3] = { Saison: "2016-2017", Name: "Mariners 3", Event: "Challenge Mariners 2017"
, src: "https://lh3.googleusercontent.com/OgYTwSz6yhcP2dyvIn3UOI1-ZPJ9IsEnLm1uQhEMpUNJYamb1qGZWSh-njndL1xeDIOkB8ihCXfRlnWBrepNV7D4ljuFERVtb6GDuhDnvo8vHmRFeeNoFf4uClPIg2SQCYzHER_rkJN9yR1NryY_YdQVGOWYTgVkkECxrFpc_ALJeOUT0joal6wqAPflbCgZ_y8g77fA15RPO1c0nkpvj6k2N6dUXI_ddL4_FoD4flUiMdlzJDhPVvFNwr4ZMNcVLolrQVKTuu_2pIFhxBZ3WlYqr2Y1MlKi7MxiMeby5q063_LUdntCn9aVheOyCrNTraRjOCO0m0ZTxULSAdmReuCy10GVx91nANb7Q5H0U64lr3I1_v_BdyB-XI-lFyUjbom5kbi5K7Z_eyHh216gcFoqTwcFkULLwSwEBPIwDZRdzjNSAHeS1e0FF4hcS5RplkA9zoWtC-PSo6hs7oDw6Zn0K5ORCkH4as5TDmz98RyF3eXYuezO8b_e06EYFowIQCods1pT0RsiyUYpN9QZZBMmozmMsbw-oWQMkFe3FXRBBGIJ7GEyAcivPq79V1VtMiXc6w78gmdSP_2WzCihBjGoQdozkvPzuZyArJ4bOJKTYSDv5bqZUdQyze_O_I0N9HyaFxd8-VWN5M5XJrw9dCllKF6a7D15StdVb4IBJsAH1g=w792-h662-no", width: 400, target: "_blank",
    texte: "",
    desch: "",
    descb: ""
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal17Eq6 = scmTeamsNbr;
scmTeams[scmChal17Eq6] = { Saison: "2016-2017", Name: "Mariners 6", Event: "Challenge Mariners 2017"
, src: "https://lh3.googleusercontent.com/yh43138zoZ32-oc43nmF3YGFVPS376ZvrwIGpc_Rw8q4HnB01mspUkZIt8D5lORaSaHwoisuQn2sGmh_uCpjLLVzhPbFAVP-R3JqfaEAkgAbTZofDXofSHXDbzW-aw6yzV76OIMjGGweBXh9BJ0M6qOepwad3JPRHlowMooG88oOpdF1ttMeilU_3XvHmrmh27VmOAAadYdHHO1zjFrFfpis6l1O8cFJGSyJikqDxZR8NBU8-LHtCX-eA-Cb-eUYGMTs_Zzxtij7ZK2iVXoNsQactI_alxNMccZuYjiqiqEyFOh57uj1tCwmbFjmogy7Zb_3hoflg798omKajWL2XIAht0qMp43tYlo71IjC2TELCarA0S8slqgbyJAdwkZjq7wk84DPNMbO1BcC1H4LWmwUIdjRCAwAaTsw9M3MiB6V7sq-Az9ViNqyNFfVV0BI1lBMBCz8089FGt23XXBuDWJsqHAIhkabCBCgbj7jBpgS__n0SXIpO4XVouiaONexAM5ZoPf03KkeyH9LMKzA-SS1OPzpp-kwRqM0H5uiuJixZgWaiLSUHpspGDCWtbCIUCvnYeVh6QPKG-euuk-FPvnY3iao5ADbaav73XNsWw5dK_AI2PofvrVNXMt12HYta91ZDp_cCiTMJ3B2PYhNtd7GCDM5L5hyXyfveTzewid5WQ=w930-h662-no", width: 400, target: "_blank",
    texte: "",
    desch: "X - Cedric S. - Jerome A. - Gregory L. - X",
    descb: "Mathieu A. - X - X"
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal17EqV = scmTeamsNbr;
scmTeams[scmChal17EqV] = { Saison: "2016-2017", Name: "Veterans 1", Event: "Challenge Mariners 2017"
, src: "https://lh3.googleusercontent.com/-d6-ExjGaWvGeUwQeT5-XUJBT3I3fWs4B_AZkKG_3XpBzPL8UgEgqhOjmAvTxayA5sVNB8VesMbqWHcifOdDX_IqGxAvxT6KBfTaQ7l2RFquDwRR2txFNDPPZdYkSWwizLaPj3gcOrnKaOxRQrmSpGIXh4gxlgvpjV85RlSZJ6HKY4cbsjcLnE-ZdHAU_qmMKuDqIF_KY62bub32CPHRop6SFZZjbuz507klC-Q-n50KPPw2ODfoWXgWspH_9QOxI5jt85rodZLmEKNFYvt8TeEmetDOAx4obpqcfWLVVSoGtCmK-BKGgMeWfrk7aYmadsNOdgsxmycE75dboUZwcok6BGuqTpuMnWwwZg65fszAVlYY7dANNMOHkcrhWIEiA7hok6PJGM873iiwfmQJ95RqXCBKvUVC16R4DwTt5cRJPo_EEIqBN1TaZ2v9W8Fob-7_fE51dNzZWxhNgkOzTu779oIaxm6SUpto-xCl1OVzZ3fqCMTHHe1eF2977owkLg9buQBn7liD37GiQ-f33mLrJfr6EiGIMfe2_FRC2uCy_4gjCRyUXpUep3KfLvobT7wxF4do1JKm6Py9BOILa8F33crwEDQoGHWYz5RIOw67FJn-rbrr_sr0BwxCy094smbLK95dwFURd2awiqLefmWSmmLwI9XvFDU6TKURkt0cKQ=w932-h662-no", width: 400, target: "_blank",
    texte: "",
    desch: "Vincent D. - Guy G. - Hakim E.",
    descb: "David S. - Gonzalo F. - Nicolas G."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal17Eq1 = scmTeamsNbr;
scmTeams[scmChal17Eq1] = { Saison: "2016-2017", Name: "Mariners 1", Event: "Challenge Mariners 2017"
, src: "https://lh3.googleusercontent.com/z0j_x7FgwOwdfTqS6q6PiWmrVZ1G38BR57V0BlWrm3KoWtuxkk1JtNQTwOfspdxkerWutsu6tm-8lHUKM20r-I1GARYeLv-ilDiQW-SSm2dmOQshdXoZdvMd0fH0g_aKgE0ZvBvIiQy3nlp0ztQGSv31bx1WXd_lZhd0o6dBRy5NISw0lMSy2FxDJNRfoPuVjT8OjMAkp1tch0TJ_1YduwZIJ6duxJgz001b7kJvAAgU6JmGJ3BYUWSVDDbKpOP2T5IcYwcN2NlW_5oqtgYnbTNOzGdutIKbTIrY706GKBibHd_Ulfz3foXmEbJVQvdymQWgJ-zYmPZii4urlk2K4HbKQTWgdaCXe6y_Q8Gki3BbSwpE7P9-tTGtsC3FYvlpzx0ekOXppDFJnVpH3IKGBJN8K_azzx-Kw1F_WDb4QhH8x0MtHl1-i4LEVBGpRypNsbi0d7Iuobj4Ev_6ibh8YRQbWfYmVkDJTI2x3bsI3VFR9-GHfNmfT2f8sw5Wwbmkxg-qdKu5f9WI0Y86c_kX2mX80yVVNHkaOFqnB35bFYjwAThWobDTOvEQhnVgKLirOmeuOCsNFO3F5fo3o50HeRIMNAADU0u04bBtACJdnjuURV4WO66PCnI1OfOc30TOKxT-8k6bDfMVfivV7SoW6FO0JfYcvO0D_KKhpJRHDoc4Yg=w933-h662-no", width: 400, target: "_blank",
    texte: "2eme place",
    desch: "X - Sebastien V. - Nicolas S. - Tom B. - Frederic V. - Nori O.",
    descb: "Alexandre B."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal17Eq5 = scmTeamsNbr;
scmTeams[scmChal17Eq5] = { Saison: "2016-2017", Name: "Mariners 5", Event: "Challenge Mariners 2017"
, src: "https://lh3.googleusercontent.com/FTk6td18uJ4qGStUTNzSRX-G1liYMuAuJ9GWbyAfqCXHJ3XROu6ITGezCd0ZQR-X2f35onvQbrHTOn4g0DnlYRfwpYucNuExAoW1J5cJWS_yGGpQx3uBBXpsM0QZCdACKyyUhHdlh9HYdGuqsx7chLo12IR26mttXn2D5xMbNd9SEz368-y8wb7lRnRNW1v-v0oukWTTm5Cn02IH5YkB7c_w4TFsfdcZwTJTYPUtzzqabRuN_RgBnGJ0t8eO45lWHuezPtS58svQ1He9ToIZrEyolgdn6NRN4OkKEEJXYZS649HslXWhYGu-_jpDeSeW-Oon77SRPjjv3yAPDmy026oSZfK8-WBUG4-rRJYeC95IF-wKlZ6xey7nQKlJreZfXkekx0Vcub7pG-PeaQyQ_28AV3Y7dp9CmLwMuESy3wRNPbg-9rA48ZSgQiK2p3GDwBzBowtX_lhwy8jdpeeZELWIoYfR7Uar6FYyQMmEI4KXrx5jijEVkiwYXlB_sUqMQQubOibNcXB4M37kzk4bH5OqQ3Bb_li04q_-bCBAp11JutsORYGqv5TA1l37DIQOlYz6aQBUHwZiP2lSF53DgBVdnTJZRTPy5BvDa7ACO_ApAJcf0LQz6KAqHK1Jr7-4fdew3CTpxj7slvcB1-KJ23u4n6s-9CitOoUMQEtiGIkAdQ=w869-h662-no", width: 400, target: "_blank",
    texte: "",
    desch: "",
    descb: ""
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal17Eq4 = scmTeamsNbr;
scmTeams[scmChal17Eq4] = { Saison: "2016-2017", Name: "SC Mariners 4", Event: "Challenge Mariners 2017"
, src: "https://lh3.googleusercontent.com/M50GQzlJ2JhW1LFyhWVIyKRJuIhol2zCVERA84iibaMWGUjZCO_hDby4UALFPnjZc6a0mY5xQyfsd-t6CwBJOBYpMdla1nC1FKUbYoNpR314HBR3yUji9qWBhnwAsfZAlshN188kOY8beOIeOFwMC9NnLdunCPx0ePzyUAVvq6nENDTiAOrsQmPMOeDXvR-CRUHm6qozhsgzGhMC0yJLk5boU_f-TZ4aWuN8IoBcnPtFegcJHYGirNnfJKlLPZx_E8zuIlQt5hXrAFSFweG-EhmEcOyWRzKGSRF_34o3rPN4hphfua3kSew85DcGRJolbYTivI9A_TpZlXD-h-sk-O7bFOLrL7fQn3pqn2H0Vq6v5PCTJoK2n3hGKnYWDK-Rt-EvBHQACDcZWvI2fItyBY5-fG45fJDWTraEtY-_gvZKk45p3hbHUWmmFpTYCDcUf2PvfivDWivpwhSQ0OFwZzoAGCCO7sNKsDhM8iGpWV10fJQcWtPr6UZoxz2Tst6tEkBqB9aO01WWPQnbFGMRh_V8Z-0d3FOo0dhACL4ioS2twD4udllPffLbT09spUvEneSxzfpaaLa3YuXv1fDoMu1scygDtCMcXsB1jCMVPUgDzdLIbzLGGTqrXQAN5vReYWFNYIhXycybUW6AMh2Rge_Q0O3vgyjUOpbc5CRU4fjmlA=w975-h662-no", width: 400, target: "_blank",
    texte: "",
    desch: "Mickel G. - Jeremy V. - Serge V. - Alexandre B. - Sebastien V. - Nori O. - Nicolas B.",
    descb: ""
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal17Maritalia = scmTeamsNbr;
scmTeams[scmChal17Maritalia] = { Saison: "2016-2017", Name: "Maritalia", Event: "Challenge Mariners 2017"
, src: "https://lh3.googleusercontent.com/dgXdySt3m2Y0rlT_q-7XJle5QjUacBWHpxu1tr2NTCQOhDz-_nfEBHbhnBJ9aTztElaxay1zC5bFBwTxnNdRelv5OkpAd7bb30nRe0lYplr4NwCOLsOxVEY6vCxN7-w4qP0TGgtIhPF92DhYYuwC0txhot5UNos7D4jBo7G1PMF1ACvVFM4IGE3qctBvJ_SDVDVj8EScns1ATOuIz2i8ckBSp48wjJQWGlLHWRC29QP2I5K1mffzd5Q-hIDzqmCLQK0rrUAxyh0InqyRTK0fgSxGUkmpqHapxZmQd34jaTl2_h4VwtDnh232q0odqEPR6z07KzcJk9yff6LgON7IKt_IGkZ_NjXnpkjICDu0T2PtXYT_cALtlxi6yvxp5GkDYwRdcs1LHV1_dOSpcKJ38wLBNU4XfmpvRLL37nY7gRHw4vCl9GwJJufietPEuh55fV9TJP9UJPD0ByNg8MCHGJSKlFOJUp8c95pCC7FB2YSYbnd8IZvn7Y96wVoxLI5Z_5RvZS88g5zbRDoAfplH67CWh5-iu2UESGV6ZUOeReyA3DxU8iJAMDl5XEPpQYF77QAujRQLX7i2TkKspCwr48ef2VqH6XyVU0mCv3KqnLyKbtO-gdCc3Kh_opJF_buvtFsIfflC8iSwJwPVbDsyPEtyrY0hs1JNCcI6glT61xH4qQ=w941-h662-no", width: 400, target: "_blank",
    texte: "",
    desch: "Adriano P. - Luigi B. - Massimo M. - Rafael C.",
    descb: "Davide S. - Guy G. - Alessandro M."
};


scmTeamsNbr = scmTeamsNbr + 1;
var scmChal17Eq2 = scmTeamsNbr;
scmTeams[scmChal17Eq2] = { Saison: "2016-2017", Name: "Mariners 2", Event: "Challenge Mariners 2017"
, src: "https://lh3.googleusercontent.com/faWllzBSBhdLU6xbqTAfFJN7h_tLNPJDk67eV-31GSD0qVjr6WS7DPvVjagU7SEdYIbmBus5QPL1AHRQAbg8OIUUtwPE9aOjTg-ENyID4s2ZGkdFa3nVVzdmzzU55xDjfmbSYO82fui_O9K4PDDZngszo7xv409lVJPZCy9NtCnNsjuqgYq7GQDlSi6wey3IrgkOTUDE4N4DZLMzSaYW8tkgafAxU4FXL1j-idwJhh9KUNYiPP1TSJQWrShRe-egKkcT25noU1MQsOXEt0mqjowDydjuEF2wM0CD2E2Uf0aM2OlheMZ_KNnJsIwGY3TvRPuL_FNGu1ZHwtya0bTBOG1kzv82vR5FjuUphPVqX0in1499PfAIv5i1B4_KdozqfxSigLMgxsjLSQMUDk4g4M8-wWaIyzT4QMCCyCo8n8mJTWGFj0SG1btJZauGiUC5Nkayf3JXBb-NZgas5s7P3w_d3uqyCS_LrpxkOFKzYZGV7O5k29-6i2o9b3cOlxRcubE_sDd3xi_fQlFT8O5w82o8bNQO6lUORAyeG8sfYkzqvBDgUpoRIh-E9-NJI-UP9t2jyAxFNnQ6TGENzK-WNlo9fiTr9Jm72SLrfN393cYcZ92GoQoO3Z0nO5puRS3FWapEo8BHqWdVGVcAEpQJALmruM_DL7LBzEb2MCp-_t8-Vg=w899-h662-no", width: 400, target: "_blank",
    texte: "",
    desch: "X - Jean-Christophe L. - X - Samy V. - X - X",
    descb: "David S. - Claudiu S. - X"
};


scmTeamsNbr = scmTeamsNbr + 1;
var scm1617B13 = scmTeamsNbr;
scmTeams[scm1617B13] = { Saison: "2016-2017", Name: "Mariners", Event: "Tournoi B13 Anderlecht 2017"
, src: "https://lh3.googleusercontent.com/j3PEmtbDK0m3UH8BHQrzBPkHkUebNDzOno852uCEbYpXD-IeIpmGn7gd8pn2HySgMv_6D-R212qHPZ6-lfbAGXSVr9yCen3fn0H5xu3vaFF1lA_XL7Vv06TR-Iwhz3HoDVD7PBYzlrKDlnB3BtRK9yS9l9kynpGEfyX1uEnlhH5sAT2e0SwA0tI94ardz0viQoU_IhdgdJME_j991UN98F2ukGjb3qYhoncezkn7b0jyQu-Epm3vy-6pmVaw36VGRgh0p7VmDkoeiZGEYRjfDn7N-eUk0l1-Qgwi57jlgVzsJjFyqwDaxWPrx-PZeBD30Y5iVAT4h6Ylj2U2hmre72kJsFheZw0OAc47x7Yl04rLReZZwoF_A0LvH3Y_vUXrGyrGrM77HN9KCNKRj_Iyc6Oue9yx7VFj7RGN0LqGuOoVzw56wuo3Kyjqj5xaHjJUGw3q_5svF6h8rKw8B7up2IHmIlXqOPP0PZ4p2xCTdqh8lj1vmmwChhMaqsRvbMQIpLmnOdFIlYdu2SionjjVAZPPq2xwlidCz3iZhOAiyGdPf65CFK5mIBroLQzyFVA0L-8Fq-dxsJjZkYyymvfNdqU2ZPLUnLP84l2lNUyX8zJyofmcGiYrXN2UzBglpdOSxf16nYUiNn0YWFWhrEUWMxF_HMH285-maEv1VvP77kAGZw=w960-h540-no", width: 400, target: "_blank",
    texte: "Mariners 4",
    desch: "x - Serge V. - Alex B. - Mickel G. - X",
    descb: ""
};


scmTeamsNbr = scmTeamsNbr + 1;
var scm1617Eq4Pat = scmTeamsNbr;
scmTeams[scm1617Eq4Pat] = { Saison: "2016-2017", Name: "Mariners 4", Event: "Saison 2016-2017"
, src: "https://lh3.googleusercontent.com/dkVDXTjczpwGDzV0DIN9TO2gg-pVwdjFHlCmh9PbNIMeZkqcjsExMIo_VP6H8nyd8ayNUAJKWtcE4NEajYk_wKFflLOr3Oh09dXgB6zJhafi5L4fXyfivlXv2IbfkTpMa5gkHIP7lmI238B9w5rx_A_y2nVaabL60-pzZSpBw3qpIU8qryqU4VbcU3sxlQ3oZk3KYF7eU9_8Hn07MferVw-PZFVQ40eiC1GyqA_gA08HTCZb5kLxG7mm9-Sb9OospDE_qBHoHZUTTZFj1DerbEMwGf7ZSLsuyNRpGBUIqzZqT6ujoZNR9pRojeF7X4FIZJabbHCs6Pl67fskxRbFI-3-qx5QVTe8zJjBhaACM1GWeQz3RyqTGWdD22eO4HS31W6y7aPvXCn85SdrqJKPkwACxarxVdyGDta0Dn_E28E8QQ5hDt-p2XwUdhxjoiqZstxeYrLtrFkMC6wZsMHijNs8AF3KkKiotsQgxyrKlMXYgyrMf4dofA8DHBpfbXTAPsRtlhHSbw5c_nUk4eJpzos2avOZBVssjFs2EBjolfcfQSml4MDPEqelDkWvMDM_J9G1yCtDfxq4mlmHPR9ei0vRls5eSi1WGAVmr7DA7LS2oftvJbKCpRActTHQ0_gLuudd2zbfYMAZCU0Dpr0sTneduy7xbKMzIomfL1REMg=w960-h539-no", width: 450, target: "_blank",
    texte: "Hommage Patrick Rousseau",
    desch: "Sebastien V. - Nori O. - Nicolas S. - Alex B. - Jeremy V. - Serge V. - Mickel G. - Nicolas B.",
    descb: ""
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1617Eq1Pat = scmTeamsNbr;
scmTeams[scm1617Eq1Pat] = { Saison: "2016-2017", Name: "Mariners 1", Event: "Saison 2016-2017"
, src: "https://lh3.googleusercontent.com/g5TGcmJb2X5ptivfhctwJ81oOHtgaM6qRi4mCvbUWOa2E8lWqGgUawknUZdyz3apfbdiqxLrzNWxcDkZDFYWKCkO1KLnRJc4KFuBd1kXkmfLB9NXaXUKGvceJOvuZA1fIj-_mYLLBI2EfFuF1r__ChOJ6iTjYuvsO4zoSASYJtTGvgBZpa1-Ov7jvUGzAw2IJg1Yv5TzS7VycagXdt_5K_MLGh5rkFfBnMnQm-DFEHsSrVloc7Ux_fu4wdV23EEbHEULdqUfMdnuszLB7_eUL9qTYRRb7B35QFV5dkNU8r8iiCs0Aa599Ze82CRtn6g51w5zFzH0ce7iwTgP22zwngQ04YwNVjc7yPAacepyX3scFvBXIUNl81Rwtj6jler7hWucEYsXzQLQ1AVUAoQo2-Ry-LvwR7O3YdmoU20r1CDubggblKdjtctzvQQXT4IJaPJtrlYiBeSn-wRc9HsCnP34Ynbf-5QI6PU_skK8Q9u45LkbRlLoM7qtUbGWNHhqEG6Ot97IjPWrqtTzGyYIbgHKeaq6-ot6ThLBnefiVewAzC9XkakiqXvVujcrAHq3xaAwIvcF2NeMc9ln-7161V3qJiL24YVu6ShXjXYpky7cJlllP_OMlwWVCJkoMN4Dvipe2U_IqKbU017G0KjYUm5jAwjsvVKWfgozmHo63bkjAQ=w708-h398-no", width: 450, target: "_blank",
    texte: "Hommage Patrick Rousseau",
    desch: "Tom B. - Ncolas S. - Nori O. - Frederic V. - Davide S. - Sebastiano G. - Fabian D. - David B. - Omar E.",
    descb: ""
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1617EqDa = scmTeamsNbr;
scmTeams[scm1617EqDa] = { Saison: "2016-2017", Name: "Dames", Event: "Saison 2016-2017"
, src: "https://lh3.googleusercontent.com/W79h8TMJb91CrlVNg12Pl-iT1s1yFU28bpaxBComwVdiFuiAFVlMLZbBdUnVylPibty0w1QigfAWHNLbTGTgFMf8V-DvxUJ7kpE1tmszSigy5AwdH05k9Zyov6FAEgMjH8ABLOVVlq2j1DbZi2ioPud94jkpD9krZNy0A8JlfieOQ84Z4fA4WVnqgWd1j9Gfwmek8NHG0I3iqh-iJIhdoBSphqkXVytEOHDMvLflI20yTK_kzAmNu6XGMpOquJAxctp3zkV-bWxAv5HctA10-VIjGyVpDnyllYqYGBuZSUgo_ydiT6BtLqBMx8LA9OGala4kxK3kWcCQ8mxlpaaw_jHK7BWGB_ZF55B_5KXtOs2E-2zNdFl6kswFACjN00lXvgwz1QGk_kpYV7O4kGLHNm766nVvCE3kR6D9mT4byvIKdYT9We8G7RqdRtV14F6wHrOvHzM_Q7Ov25s6-_iR4nCvmu6LhnMcfVnTJSkq9WScKG69_KVtxXqYFcHCpLP5bQzL28remgEKIhSGb01dNbqEkogxiO4w5wPoYa3DPpC1QyVc5j6nZwecQQcHd7P1uPiCT7r7y6kYDX-DmGQdlInhRI1BTOy_UjxHMFlETl0uLoqxYc5b7b3iRw-A5VQQv9rj5yAErDMIqFx7tbMZrIAsdrVbAa9XCYVUo8M7aA=w768-h551-no", width: 400, target: "_blank",
    texte: "Division Dames",
    desch: "",
    descb: ""
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1617Eq3 = scmTeamsNbr;
scmTeams[scm1617Eq3] = { Saison: "2016-2017", Name: "Mariners 3", Event: "Saison 2016-2017"
, src: "https://lh3.googleusercontent.com/YiteGx_0tgFXw0t3S41y5C_WksTLynLhz-usLF_uxlgeR4kigkzVB_1E3edvM7uC2h7-LCAxb_F8OYwNbgI1_XHxeKIJISGdjnrwX6vMsyiZ3i18HxaWxBvsMP_TXsbKxccgUzyc_x9F60aiMJG_wwAZkYmIuZYdiWIi2yEXDm_g_sBWtiR62_hylBVeAfhxcgrMUNx_ArqM3cxNBbpTkPkL2og8YcZBwqaPrVbwM-zFsaiVHANFTL1Txwr__RrOHpxqLcBe11GXV6Xxc8__cVFfUpiVtB5m2Rkgs0Y4lC9o_1D5u7FLtDCQOa86b8Auu9kEVtU9V0ieCH9lQPKdimuPQCqR5nfXmNsImfOlVXFVhsSohZuSUY-Fuui68I26CR74wAECJCZ-PxdZhLXWuoNk1L2T3adpC7qL7VlSC_NHSQ9KlrebDDJWuOruEmNP1JbocVTx8cDvygrX26Ep9zcsef-EKh937B5k6steznmqapVpEAILdzcobzvvEJTmt3afpdGTRc9cbOS1WuptheRcEvo18f1yYyKAwFH-BbOecLoeBHG5uRvshs6Q-QivjngE286qliy-6Yszo2QQzs_tlG81EV6vK9K4QBxn_IYgtfErVhReft7Hk9cKqjo4efDcuvtcbPUjf8rMKmoz9Fdim3clK_mLbf_91RMbwnSXJu_jGflc6xLi1--uhqUTGuoCz3SQ_aX--i4MReklEEAi=w901-h676-no", width: 400, target: "_blank",
    texte: "5eme Provinciale M",
    desch: "",
    descb: ""
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1617Eq2 = scmTeamsNbr;
scmTeams[scm1617Eq2] = { Saison: "2016-2017", Name: "Mariners 2", Event: "Saison 2016-2017"
, src: "https://lh3.googleusercontent.com/w3-m9G4__MIMnO8EBzE4i3ulNZqWYzkMV5AcCRdXA3OfzaLFgHuFgjmZVmqnptLGzGNX7NRNgvYiLmIRmLgA0XGd7rLxfcL7cb1J9UxHD4zvjYo_b7qIFNY_j75sAuifTZRJhJNgOHwwDZjD9npJlCh7sXTeO4lw63C8iINRXe1u8pjyt17dHHRIs_O1maVeKWGgyFxLeH1KEvSCWrUzY7P7LccG4w3OxKECDVFczzJ_ywnjQHhRc4XxtUCzovCvA6Blj0LQcYHlz4hlSbfyZmZS6tZ68pYAALGokul-NmX8rzWwUM6Lj6esrfj6hrFO_vUxKFOFn8gFiOtGjbLvScTeJJpblFesGf9LUDim3ZNcryyBkSUbODSlV6-miNCLuFk1DmY5i--LNMLfiyCG2KrSQyVsJroaS93yDY9pcNKM5EDNTe5PKjWJUmbpfaPRmePVyirkVKhIShlDihcwmIdojGOux_dpaiNjBGB6CVMazyYlHjDGJj0gmsYG-i4WcSVYcHdJSrv7mUAQK5KS01v3D7V2PubW6xFyzESlFw3QGTrSTGwR0khMizd-E_3fy9te_U4QykS2BWY75VguvQpTd7hfVThbdqOLiWbhBwZnXOMW=w903-h677-no", width: 400, target: "_blank",
    texte: "4ème Provinciale D",
    desch: "David S. - X - X",
    descb: "X - Claudio - X - Samy V. - Davide (Robocop) S."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1617EqV2 = scmTeamsNbr;
scmTeams[scm1617EqV2] = { Saison: "2016-2017", Name: "Veterans 2", Event: "Saison 2016-2017"
, src: "https://lh3.googleusercontent.com/kH3hIwtlR1yWO6wdXDGKLWiHWTdqiGxrHyINRWUHANpPiPnbSg7k9CsM1BzATqjIF5ZFTDFcxenb00rFsahIycGwG5uziCg1Pt-oIVv99oAYb8sxMQbpUkbezhyuDueOwFADDgN_0Mxjcn6kpprQRN04UZf8mF35yZJ424rwa6SLDOs9qPQJQs952_7TaDyLmBKmud48xyQq31ZxtAaFG7PQgS-dqxFUNglZmWUu4TD7ZbAOd3fpfSLxapn3rM7SFLEZCca22PN81JAeWBenqZQPR_QbAFNl3lLqGQ9qctHHTsWtj1E1D-D93e0EPPX3On9l_wv4luMQIQq6p8jeW5u7ng_XM--2rZVd2j6KWgno8jyxK9YurmxhAa1FMKGu1KiKVr7E_OK5J_rnRQ2_hhDiTQrAu5tpHSW7gfrTEWl-G2SKYLUMg41YYaHzO2I-GXJsgeV_UFzTADMDFmChdB4l3EseJbsZ7dAnox_w4yRTt0UoL8Iy2L2kr0PzkxFp-yWrO6tHmmcHGulFBLq1UeXExadNLxwOUWjNqZxve_Wng7i0ILu7_LzlZo20crHvfbPdo62l8wrnPdmt8suj5bpErY2JcUKpilD4z2IR-NAsC6eR=w566-h416-no", width: 400, target: "_blank",
    texte: "Division 3",
    desch: "Guy B. - Haçik - Taniyel - JP - Jean",
    descb: "Francis - Christian"
};



// 2015-2016
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scmIta16a = scmTeamsNbr;
scmTeams[scmIta16a] = { Saison: "2015-2016", Name: "Marinieri", Event: "Eurotorneo 2016 (ITA)"
, src: "https://lh3.googleusercontent.com/cLLA9UWSARTGx-JCVG0GiEMeXuMNvOy1OcTn1XtkV1wT9AT9whf9sUckZTKSA-UrXZ4C1l0jdH8sATHkuwXdhqv80rux2JdN5ZGJuLX6mQTStw62F5vSh-NMuNhAw-T55CFY5Mp3PNi9YZacdKv31rkiD031PEoZYpvSXF3FXOst1HFSk97fPcDP7VWGClX_OcykfrkyiDCy0KhvZiPdVHPnm9jQcIHBNVOuP4xAQ1LtheUL-6G2SZgUfcIQxNgFGlZi3osdSd8gJTSbW_AG_V5f33DCT4VXP74hAxfRTx79tiPVsAgBn4lWg0CHb5ulNaqvoWDY_1JRDpZjoFcimnhRfu1j_OiXLO_0Q-5BxtcxhVeC9iXBheaOOn4J-VFnw7oW3uy876HefEAlyBy-CxH6PxHv3c2pTKc8Vj3wTFrybg4demyDvBDcLQOKiXeayUI9-r1Yr-Yo1tkYGtnRp5tKopdgu_FzPYqRauLL7uf5jS6Ob9GkFExsz94BZ7AhI_T4p8Ysc0FO2KPItZJvIRlNub54ahhGBzAOa_TJKYbmrbHUhfd_82hmoLFg1mSv0TQQbw3zF1emka_ksatmUBI4tAhJgjo=w1204-h677-no", width: 400, target: "_blank",
    texte: "Equipes 1 et 2",
    desch: "Gonzalo F. - Frederic V. - Omar E. - Emanuele P. - David (McGuyver) B. - Nicolas G. - Nicolas S - Denis S. - Sebastano G. ",
    descb: "Nicolas B. - Moussa E. - Davide (Robocop) S. - Samy V. - Alexandre B. - Tom B. - Fabian D. - Anthony (Tonio Fossa) S."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta16b = scmTeamsNbr;
scmTeams[scmIta16b] = { Saison: "2015-2016", Name: "Marinieri", Event: "Eurotorneo 2016 (ITA)"
, src: "https://lh3.googleusercontent.com/6REIRs2HnO2d_vFVgVR2vJdE4aB2zpHVxqVyLqyxrS8iTNseJxcqQceWY0ItR5V8gbfz745UxP9DWftvaaYNy3zKwfkKEfTCkOsgiAAnuD0lAyVZ8ZOGgVjy3NbEPPq0zXoii9N6is1WR41nudmwZigYmIo2pDw7jDBwgJ15lZ9HOJBIYjnDISCA8oWznls2Pnfk0m58HAv960CjOSJxtxmb43R7y_WQ1HJ38PicEr-PAHLu3JnUGLtt_L_AdlyCFxtl2xw0BGIsvAPMmuZJysX-SrV-S2AJqIB9-c1p-AGMu4xkBURTfHCbQm0z_hsmbrHKQYweVozcHJS50WhAHenDBG1MpVwRGgwc_CCu_VtrnZZzL-luvYB5hnlc2Or8XTu3LPRFYEBd23C-UwSVIJ3lcIYiEf3AWyid2stmD8sFx0TZc0mIrjTML5T4AAkleExHIUWXDBQLlrh_u019Cc4RZtYdTn92D8VtRE7XKQFQq0flbYcol5sN5PuGPUxc0datDO5tBT-YXo0LI4plqIEgvT0nzJxUXp5Y_6ZcZrcd3Sms4rwi9uZwb3gahkEzAMuEf0P0IqHI9nOqXheCvAMrbZQrmqY=w1200-h603-no", width: 400, target: "_blank",
    texte: "Equipes 1 et 2",
    desch: "Sebastano G. - Anthony (Tonio Fossa) S. - Nicolas S - Nicolas G. - Tom B. - Patrick R. - Frederic V. - Omar E. - Nicolas B.",
    descb: "Gonzalo F. - Alexandre B. - Moussa E. - Denis S. - Davide (Robocop) S. - David (McGuyver) B. - Fabian D. - Samy V."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta16c = scmTeamsNbr;
scmTeams[scmIta16c] = { Saison: "2015-2016", Name: "Marinieri et Gambellara", Event: "Eurotorneo 2016 (ITA)"
, src: "https://lh3.googleusercontent.com/_WT80FvEvOxdUcqr3hMADiohXPV2OMRuSeeMPvj1p6eGNPpvL3tE10MU7vq4fqbg0GuTSwTFrA9qI2HIt1Y9pYNsGNtpWNdQXqxKCyPwjV66jaYAX07E2mnbE5bwQue4qlsc_wCUqnSh9Wds37zxt-onBjR0fxpmqCLQsWX6KjmSN1xqzqYKt7PWtCLfp-veGWY8lna-RYlK-fMWJkFAQ6n67bt5mQQHZq6JLGCbOpxQi1nXZFLMsTbSWvoOwKCq72PyjLOW--SkE0sZMSdnXUlC9pa7yOqRCvzpeey-hu8PmjRZzJsCVPXnkKOSwxfdUC2njoeLyhDW1Qh5zIh4sMzzM-kwRF_SOw45CW94ugf4dg-fP1yBWdRcwvDhfuB5HmtxNufxi7lxL5oOrH3tw5IK2oBAtm4MqM_LS1u5kDNibX-PscVjc93jQCPidpmtW-IvflYB4X8KM2vlArCxXGctKj7fNX9JVENwXguJ1oLNLLZrbZyM9tIcEpPSeqm5kG_XwLdMKfAza-LYRWollG5ZaySnVRi0H4Go0TQTAxXr9Rhuszxh3mEzUTsveMD6nDGE6OyL9CN2pGUF3HciCK-UQ6C1ZAQ=w1200-h496-no", width: 400, target: "_blank",
    texte: "4eme place",
    desch: "Emanuele P. - X - Fabio M. - Filippo G. - Stefano S. - Nicolas G. - Gonzalo F. - Sebastano G. - David (McGuyver) B. - Marco R. - Alexandre B. - Denis S. - Patrick R. - Federico S. - Frederic V. - Omar E. - Tom B. - Fabio M. - Samy V. - Riccaro M. - Marco B. - X",
    descb: "Nicolas S -  Nicolas B. - Domenico P. - Moussa E. - Alfonso C. - Davide (Robocop) S. - Luigi B. - Fabian D. - X - Orfeo I. - Loreno S."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta16d = scmTeamsNbr;
scmTeams[scmIta16d] = { Saison: "2015-2016", Name: "Marinieri", Event: "Eurotorneo 2016 (ITA)"
, src: "https://lh3.googleusercontent.com/5iKQpGgoDxMXcBMV7CRlRUqjTad_N9AaWBbmWNzWn6iM6NI2DfbvNlFGNrZzWcCiBtpf5KTaJMJYHYYyR4cTIhQVPPIZ5RejmWIZ3Ks3kJz62JMQNm8ao7-1c9LEHHdxg3O1iaZXTN2gLYTswOHz3zEUiQ3Yd9BlYK4K50hJs93pSzj7hnCdT1KXXiD_dtfl_dQEJNqnRZGNn3oktgJFkbB6Hq_ufMIzAiVSMWzikZjv3uYNrLEJY4UJ2vlnOSfbprxSxXhiHwD9ZkBRU2JAj4m7YDafV22d1QNCNXAVWercgc95HtLHe8pTbuTU4iJwT96shneON1tjTSfkF4dgelgIslzCSzXIlNrzsJlQlrfw2WSX34bIcqBqYhP7-mBaxZcZfzktAthra8yc2xpK2B2Cy51qKOhTlCa26cKf25sX-3gs5kIwS_ABWtH6kCJu49KdDUrZZGAqNCqdxhXt2biQ6eaEEEGyvDeUcMiO0sS2AUCekxcH2cyJw6tAMWJ7dH1gUp8_zn03f_VGv2p_J2VzmIAZv_cdU1jZK2WSFd_ADt3HJyrC9L2NPfpBELreOn-nI8IiRFsyV8Bgjxu8m7UL5RsN9BY=w857-h570-no", width: 400, target: "_blank",
    texte: "A Bardolino",
    desch: "Tom B. - Matteo S. - Denis S. - Nicolas S - Anthony (Tonio Fossa) S. - Nicolas G. - Frederic V. - Sebastano G.",
    descb: "Moussa E. - Alexandre B. - Gonzalo F. - David (McGuyver) B. - Nicolas B. - Jimmy S. - Davide (Robocop) S. - Samy V. - Fabian D. - Patrick R."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta16e = scmTeamsNbr;
scmTeams[scmIta16e] = { Saison: "2015-2016", Name: "Marinieri", Event: "Eurotorneo 2016 (ITA)"
, src: "https://lh3.googleusercontent.com/PPky4u57fl0i-qtszxFuUhyxhWOUhNQcNk4QJbkxAat1rWwlogjyq87e9B9V-nzHZsLti5gvhr20v2AUWpWb8dnCWh1ZS5i0swPoHm_Jr_Bkzf_7dgwuu4mvoeVNFqa4pZFAwX6tMwps8vKIOvkSkhbelprg6CLrXmDM3kfR7ZnVeUs8wzCXLCHN-dna5WAGvVMdx8zc-8J3bXOmDrNxRIgp5pDeTodupRD0WSF4wURWpcJyW2xYykqhN67jWcbbwXKOeZG4be6V3M7YkJqm69Uys4uccKtsbhi-brrD3pOcb23LdsYCeJJi8zK81xWO6ImgldK_cTH4EiQVaeFDmapNPBJf7mfEwWIEi5G54NfMGKGcfKLc2T1zbk0hbfulFZm6xk1wnCjKAgjzN8HgRekSwOLhU5DtEq_U87ghiEkkxjIYb9zCJf91oN2_hukRRnTiHaBB8DSSyKBWztSaS8TV61ZU41x3insDbT8HbuunP67FiLVVuAnrXQkJso0EKsc_AY9JQcN8PC61M1FtAzPZ5s5Mpjpngjv0NdvvmCczuo1CHy0VcVuF9FVx-FSZHVDWqwO3rBVmVgJ9G2n4-ySKiyLXvLY=w857-h570-no", width: 400, target: "_blank",
    texte: "A Bardolino",
    desch: "Tom B. - Matteo S. - Denis S. - Nicolas S - Anthony (Tonio Fossa) S. - Nicolas G. - Frederic V. - Sebastano G.",
    descb: "Moussa E. - Alexandre B. - Gonzalo F. - David (McGuyver) B. - Nicolas B. - Jimmy S. - Davide (Robocop) S. - Samy V. - Fabian D. - Patrick R."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta16f = scmTeamsNbr;
scmTeams[scmIta16f] = { Saison: "2015-2016", Name: "Marinieri", Event: "Eurotorneo 2016 (ITA)"
, src: "https://lh3.googleusercontent.com/B35ux0jN6eUNW3Sf1sChSBesHO8RW_pP-6i9-HCsjTxXVkOe9xFDXgkThZBhEG__ruJuid8lbEiFVGnkhXapMk1ymIEP5BpUZxZr3x7UwGNRPd477L6thLIRkWl7_i7P-NsamifAI8OyL5laqz8bd-hgBEmzLlisAdE8W87sv9J7d92w_m3Y-nj9utXCrYgy4ShwPwytgsenW_G8uH4AILBUViiIwoEnqlkiPb4MAwXTP-8imc2MF3rP18XpnLQmhwj0i1XLuL9RiLRJ_2xKgoVY2mqXal0dfKwenNCpMMDqUYdtpUbJI83milDI58zN3I7agzJMXqthjf2WUA04MOuHokbUTh7Qwy64223fdwY-eVfU2R8E1qAvxbe0_-XCZ6OSayPozTwcuMUVV1KEDfUx3RLuQANl7viSyTjZiotJ-yNjPs-G0_TFqR1R5PSZIsFsKG2UXHLEfsnYXfsWAXL7-53UY7or6kmxKF-2y6jhGKTtncjBuGVlJzkYOZ8Gcg51PdZ6nielbcyo3LbGiBuHm1K-P-SiO7a4P8uq1E8TYnnMUhAi4dvAS0I1rqDhBjP_M-0YXdoXXiSmsd1oVomgSMxkoj4=w760-h570-no", width: 400, target: "_blank",
    texte: "Au Corte Bosco",
    desch: "X - X - Nicolas B. - Sebastano G. - Denis S. - Moussa E. - Nicolas G. - Omar E. - Fabian D. - Nicolas S - Anthony (Tonio Fossa) S.",
    descb: "Stefano S. - Frederic V. - Alexandre B. - Gonzalo F. - Davide (Robocop) S. - Massimo C. - Patrick R. - Samy V. - David (McGuyver) B. - Tom B."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal16Eq2 = scmTeamsNbr;
scmTeams[scmChal16Eq2] = { Saison: "2015-2016", Name: "Mariners 2", Event: "Challenge Mariners 2016"
, src: "https://lh3.googleusercontent.com/m2c5StEm5cYjubSXL6_DouyH7jW2pTGIe479lc8Hmo_xjaC7hxCKNkM0bMzukQCpaz6yETAMrauV1rex8mRTCT_1OJsQe4V5bTuc2sVqMb_cu6KhyQNiLI293UKc5JGmaWOBtmZ_IpcuKPAYHsf6IWP4UflB7Zu99ShLqVrZe0hwaGHFqFRyAM5tshOW4WYt6dmRAXQYjCyIPswfXn6TTvDqvJ19Tu6DS0528lsZcTVTY3YxIWsugoHkz1YwVg3BkX2imEOaV8h4D0e6NCTAaf0oEPInJ01ayDGI3qN1Js30_8gllAMLe1JCMDYNnVETXWIDbG1r-yrAyWCKu5FAqyGaB04I7KZTzE0CgZ1s1CkA95AuX_SAL42sdZGDQ9iNqff03jERK8HVHJKlnmo1woNg75g_UvZUj6ij0FHw0bLo9tgQIApWd7fo0YLO9CRuXjw1IYFpnFUj5VPwVQmEBqnnjanyO_tNurkKLCW0qf09OhAaX8r4XEQSspUrtekQRR7sGT9pzCdirAeoxcrcsi-dPZcTMFEBEwnyqbiK9loOuAQ5LvreCsxlnrtXFYrkcOJTHC3kFzPYjACXzM7_2p7dJEL5ZKA=w935-h677-no", width: 400, target: "_blank",
    texte: "",
    desch: "X - Gregory L. - Nicolas G. - Samy V.",
    descb: "Luc C. - Luigi B. - Noha D. -  Fabian D."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal17Eq3 = scmTeamsNbr;
scmTeams[scmChal17Eq3] = { Saison: "2015-2016", Name: "Mariners 3", Event: "Challenge Mariners 2016"
, src: "https://lh3.googleusercontent.com/EAmit6a0Sd-E1kynT1xVW9W3TUAl1DFKp-dRHiU_Ddq-tVYzIeoVO6jAw17WN9J9n2Ydk0rzdkuNWGy5zGljxemhQi2Ks2ZTEg4evXNlIIIC2ONQ4SxVxgmWKWK-Z2FVrC6vxEJn7g4B6o9SzHa3mr7dL3W6X_zHyhT9RJEjXifFtcwsiZ2THW-zEDCMNuzo1aTmMD4v6uuG3IHSJzekXI3tK32wZeytCdsx1MvXWwI79LIC87ksOTqQiaam1Tm93Kh0gBP6AfmtJbsbn4YRRjG5gKhYumS1Bippt6koVD37ruRlowA7-kaMqrYHiQNUUmKrap6_2Z2b7bTD5HqKR1LZU_X8wD0PpV85jTeY36xGUQzTSvsN0Xh5BNzqqV9PdfzaIuVKG_XNqozT1XkG8Wwrciy8FMmaONoXWTIfbOzfjzQb8y_o_kccSEDYSF9d-z3ehD-UJZ1Axq6lZDi_p9UwlfoPjU6jjHvcDM-zl7njyCMT_M7fyHxtciSLSZqpCIX0mWZfGCfyNF5MlbuPz1d8vFq5RVOOafJjodprps-wLicZrQMAzCPIIRbzVD6kqyGIsbcyduuibchUoNbsI-mPLavptO0=w830-h677-no", width: 400, target: "_blank",
    texte: "",
    desch: "X - X - Nico M. - X - X",
    descb: "X - X - X - Alan T."
};


scmTeamsNbr = scmTeamsNbr + 1;
var scmChal16Eq4 = scmTeamsNbr;
scmTeams[scmChal16Eq4] = { Saison: "2015-2016", Name: "Mariners 4", Event: "Challenge Mariners 2016"
, src: "https://lh3.googleusercontent.com/hnqH2SniQ9FFP7q9DZxXT0OmbmVnrCxfqNlBn8Ig0JDIis70P7WV6U8ARA6krUC-BNvWczdPOAwG6R3BZB6vWrCmNaDdTrU9EGd9wGesIUGDi6lA00x6eCHG0W1r4sB9xDdXWjt9MNxPJiZLmNiuuUKvFfcwhwxlkcmuDPeILVHrRrxzmbxPHK4h65j4vfko1JqQ7KLmd0luM09YlgtQMot9Cx8f9vjfrgr1May1-8_arYWp_BSHLLypnt_B6YggLGR1vgv5lAk8h2BBrwOifEQ0Ce-RHwQ0MzUUKDguDHwueu6pZMk2BRfiyUUwfjrai7F9GE7GUXULnv32oL7X5KWHMzSC8_c41bhzcNxzSjHABOyyrilSsODitc3gCEUeTQ_aL-0b1zyijBLrm2QLwiZfZlBlQvu9RgN0WN7Y_2NBDgTpzAh4dP7z7IRR5o9uTpRWVLiXMo-Nck3Z3BsjG1XJj2Uia4SjGYrVdTMca3KMlxRLeUODS8a6KKdAP6ftsyO_JXeDgL3FSKFQc_u5sxiysnBwZaBZE-LHlQvs9C7xCffHtgq0z6kv8x2W6mlGnyQQmdTzHTMT7pnA7Omfua9k4SnMiBg=w988-h677-no", width: 400, target: "_blank",
    texte: "",
    desch: "Nicolas B. - Jeremy V. - Alexandre B. - Nicolas S - X - Nori O. - Sebastien V.",
    descb: ""
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal16Eq6 = scmTeamsNbr;
scmTeams[scmChal16Eq6] = { Saison: "2015-2016", Name: "Mariners 6", Event: "Challenge Mariners 2016"
, src: "https://lh3.googleusercontent.com/7iX2bwVwIKricGbT-CmOY567soaYRr2XjJjXGQl6QpVj6M2fy-rhvOcy_ht4PZ30SE0gxgoNPzMPmLi47j-SHOnxn18SjMGpM3Hx0E22IwlQUh4Fmw4oAeg4qrpgqRPCGUp-UfEVwlvpgLHAFo6BLZVhMhm7j2RuYsRWZlYXStXO5PvaM7iYzgRhX-UnqcX9lVDdraBqVlN_7Kc-PCJN26PL1pC4azEMgRqJGstGaCbZeFe1bwpYtr2j-t0I8QxLY_aiDBHhvtZ3itwZ0bEEmLrgZeTnvawu3xcIB8bJZRYQevr2qOmwNrwmYvvrPgNDErRWV5jgkDrT9EvGTE9_pwz6hISEk_2TsBiPFRXQu87b47uDG4dHncrM6fekVzyWXnTGfeHMGX5OUrQy1dAUpbHedb0LrDvlAS85_Ol3d5wLeSoTmKEAX1HZgRrnDzTRav8gC-zd__Jal9-xoJMqMV43pt3afXtMoKiOL-j808Z63L1ivvZtdl-HSHQn4--U0TxR7p-cvvURhFMIFCF1awqXAaKHOcD0cCxs2sVDxZqxXD3wH-9-asrmda6PRB3wXdMjhjbsUUko-2bCVmJC86U19_Spe4o=w943-h677-no", width: 400, target: "_blank",
    texte: "",
    desch: "X - Gregory L. - Cedric S. - Lucas M.",
    descb: "X - Jonathan D. - Damien D."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal16EqV = scmTeamsNbr;
scmTeams[scmChal16EqV] = { Saison: "2015-2016", Name: "Veterans", Event: "Challenge Mariners 2016"
, src: "https://lh3.googleusercontent.com/TvQ4xX0DcsYwpvsix0zf4nK1ecZWmFvRYL4RvbxPtH6zkFmEf5gj_w4SKtxgA80UrrKhzDxQDdcyV76axP4ldbNPn1q0t5ekYLlE8hJhFQf0xA8KbfZ2fmZ38DdMd4HMY_LB6UUou6aw15QzjhUzq44zjmK_O7QvJPfQ-bWGqkyxSnlr3owao_D0OtYbWGCYQKVeWH1G1jEpBILQjZLGOZXXQtEHcla-DSFFYmNc03XuGwf5kAqupH7UL9iwZzoPgMYAbLKbzso0XZC9J4D4hv4mS_YUcuMTYd-PXrXcqo6GhADuCdd3ylftyEr0TaRpWwQLxnIj53FX8c6mfXL5oNosBzJdvF0cJ-lFYyA2DGfMFXekKkTD503pGjdV4Diq4boAL7YLc1E-1nfDdxYTNQi9T3w0LgN2YlQR-xDdQXyf184eEjw1a9jTrr2VVF4aKI59LD3w3gQYTclQ_lKNhyvbhn5ehfxrKqsepN95ItL9f8vpwu3niYFDkT5RpaoUKbRlOTZeT82m0kGnsp6j7wTd4aONl83sghA3FthWgHx95UCtlMq5DUe5k26pmpb6Lg2zV76ZTwCD-xlOCVUhmHLPd_xJUBY=w869-h677-no", width: 400, target: "_blank",
    texte: "",
    desch: "Nicolas G. - Guy B. - Ahmed E. - Guy G.",
    descb: "Davide (Robocop) S. - Fabian D. - Noha D. - Luigi B."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1516Eq2 = scmTeamsNbr;
scmTeams[scm1516Eq2] = { Saison: "2015-2016", Name: "Mariners 2", Event: "Saison 2015-2016"
, src: "https://lh3.googleusercontent.com/-ugOzSdUiyGg/VczzYlEiulI/AAAAAAAABuo/MdCbg0EXB_w/s640-Ic42/2015-2016%252520-%252520SC%252520Mariners%2525202.jpg", width: 400, target: "_blank",
    texte: "4ème Provinciale E",
    desch: "X - X - X - Jean-Christophe Leclercq. - Davide (Robocop) S.",
    descb: "X - X - David S. - Samy V."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1516Eq3 = scmTeamsNbr;
scmTeams[scm1516Eq3] = { Saison: "2015-2016", Name: "Mariners 3", Event: "Saison 2015-2016"
, src: "https://lh3.googleusercontent.com/-iWpJplDdE_s/VhgfUr5LujI/AAAAAAAACFQ/8MM_obebVas/s640-Ic42/2015-2016%252520SC%252520Mariners%252520C.jpg", width: 400, target: "_blank",
    texte: "5ème Provinciale E",
    desch: "Francis M. - Riccardo V. - X - Haçik T. - X - Luc P. - X - X",
    descb: ""
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1516Eq4 = scmTeamsNbr;
scmTeams[scm1516Eq4] = { Saison: "2015-2016", Name: "Mariners 4", Event: "Saison 2015-2016"
, src: "https://lh3.googleusercontent.com/-U7P8f-K2H90/VkOVupOZR9I/AAAAAAAACGM/0Ff1fgbA3r8/s720-Ic42/EqD_2015-2016.jpg", width: 400, target: "_blank",
    texte: "5ème Provinciale P",
    desch: "Nicolas J. - Nicolas B. - Jerome A. - Nori O.",
    descb: "Jeremy V. - Alexandre B. - Sebastien V."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1516B13 = scmTeamsNbr;
scmTeams[scm1516B13] = { Saison: "2015-2016", Name: "Mariners", Event: "Tournoi B13 Anderlecht 2016"
, src: "https://lh3.googleusercontent.com/L15HzjSpspVj8u0JV97HFrzcMaP77TCb27lBuS3LFL4F1DZ-vK_WSYUxNc2Tg9xmVo34nGlTDNdTgtRlUcMoJMrL9ppPN2nCcC2yVLMidXGNMRGFrZYPH-tHpg2N5NCRw64PmVPW95qk9XLcpj4ucUC0AO4_i0Z-lBDRHAFH3DiOTLh_dRyMTQoKnxP2g7qC_XyST4fxZAtB4BIjSedFfGOpROL_clB9DvBsgQTY_vHzUBMaOC8EZBoopcfxOq-9tdi_n6lOyCjAxs4-fPRW0f12Lm0H5EH4C8zcPYu6uu2ShHlsylJQRhRi-Ua7LyWgRmBwA4Qu3wWGk5qj4Hi0I2c8hQJvDXe_Ywdh3OjNSn1yKivhlz2MmFLJdo3jrKFRlPeRBEGrAjNEi0Xcf9o2z2doIk5CDcZQ0-pKapt_T8jNIHrIB5Bxhu3m8tusSHw0Cm_HQOSaN2bYUXB_a_UxYFxQDVj3xZbPlelme2dwzjkIkvDvYUs-i3ShuF1AOaYHXbi7sikw-bWvJhrt1g0AB8pPAXeRnm_qHAlC5jhVo9RGZCxfm3Ygf_7nuvW48Mgsntlq2QUPF1EW0B6lkJAcYmXgge-C3_w=w903-h677-no", width: 400, target: "_blank",
    texte: "Mariners 4",
    desch: "Nicolas B. - Jerome A. - Alexandre B. - Nori O. - Nicolas S. - Jeremy V.",
    descb: ""
};


scmTeamsNbr = scmTeamsNbr + 1;
var scm1516Eq6 = scmTeamsNbr;
scmTeams[scm1516Eq6] = { Saison: "2015-2016", Name: "Mariners 6", Event: "Saison 2015-2016"
, src: "https://lh3.googleusercontent.com/-xVoXvkCz3lQ/VhQxH0dFqcI/AAAAAAAACE0/jyWnbd_iaNg/s640-Ic42/2015-2016%252520SC%252520Mariners%252520F.JPG", width: 400, target: "_blank",
    texte: "5ème Provinciale I",
    desch: "X - Gregory L. - Damien D. - X - Cedric S.",
    descb: "Joel S. - Jonathan D. - Jerome A. - Cyrille S. - Lucas M."
};

// 2014-2015
// *********

scmTeamsNbr = scmTeamsNbr + 1;
var scm1415Eq1 = scmTeamsNbr;
scmTeams[scm1415Eq1] = { Saison: "2014-2015", Name: "Mariners 1", Event: "Saison 2014-2015"
, src: "https://lh3.googleusercontent.com/-ycNcd2AeOQM/VRB39ZbGyoI/AAAAAAAABPQ/GAQ3pa-WWlU/s640-Ic42/2014-2015%252520-%252520SC%252520Mariners%252520A.JPG", width: 400, target: "_blank",
    texte: "4ème Provinciale I",
    desch: "Frederic V. - Denis S. - Nicolas S. - Tom B. - Sebastiano G.",
    descb: "Maxime V. - Davide (Robocop) S. - David (McGuyver) B. - Omar E. - Fabian D."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1415Eq5 = scmTeamsNbr;
scmTeams[scm1415Eq5] = { Saison: "2014-2015", Name: "Mariners 5", Event: "Saison 2014-2015"
, src: "https://lh3.googleusercontent.com/-drHvMjgaZYE/VU9UW2PnvJI/AAAAAAAABPQ/8Ot0NXUXjHw/s704-Ic42/2014-2015%252520-%252520SC%252520Mariners%2525205.jpg", width: 400, target: "_blank",
    texte: "5ème Provinciale M",
    desch: "Alain D. - Michael D. - Thomas R. - Simon W.",
    descb: "X - Lucas D/ - Guillaume C. - X"
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1415Vet = scmTeamsNbr;
scmTeams[scm1415Vet] = { Saison: "2014-2015", Name: "Veterans", Event: "Saison 2014-2015"
, src: "https://lh3.googleusercontent.com/-UWfMI3GEp2U/VUaGSfuTSnI/AAAAAAAABPQ/7oKJEKtHUo0/s640-Ic42/2014-2015%252520-%252520SC%252520Mariners%252520V.JPG", width: 400, target: "_blank",
    texte: "Division 1",
    desch: "Jean-Christophe Z. - Xavier G. - Fabrice (Pluto) M. - Frederic (Scholes) D. - Moussa E.",
    descb: "Davide (Robocop) S. - Gonzalo F. - Guy G. - Luc C. - Fabian D."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal15Eq1a = scmTeamsNbr;
scmTeams[scmChal15Eq1a] = { Saison: "2014-2015", Name: "Mariners 1", Event: "Challenge Mariners 2015"
, src: "https://lh3.googleusercontent.com/-Ob41tP15zv0/VXK_onGnngI/AAAAAAAABpg/jva4cJleI-s/s640-Ic42/CH15_Mariners%2525201.JPG", width: 400, target: "_blank",
    texte: "",
    desch: "Luigi B. - Tom B. - Fabian D. - Frederic V. - Nicolas S.",
    descb: "Serge L. - Alexandre B."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal15Eq1b = scmTeamsNbr;
scmTeams[scmChal15Eq1b] = { Saison: "2014-2015", Name: "Mariners 1", Event: "Challenge Mariners 2015"
, src: "https://lh3.googleusercontent.com/-WawdiGcHccw/VXK_obwoU0I/AAAAAAAABpk/uIVIYGUVx8Y/s720-Ic42/CH15_Mariners%2525201b.JPG", width: 400, target: "_blank",
    texte: "Challenge Mariners",
    desch: "Sebastiano G. - Frederic V. - Tom B. - Nicolas S.",
    descb: "David (McGuyver) B. - Omar E. - Jeremy L. - Noha D. - Fabian D."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal15Eq3a = scmTeamsNbr;
scmTeams[scmChal15Eq3a] = { Saison: "2014-2015", Name: "Mariners 3", Event: "Challenge Mariners 2015"
, src: "https://lh3.googleusercontent.com/-EY2SWoiMYJ4/VXK_pYav6BI/AAAAAAAABpo/rxWO2uqcYgM/s640-Ic42/CH15_Mariners%2525203a.JPG", width: 400, target: "_blank",
    texte: "",
    desch: "Samy V. - Olivier L. - X",
    descb: "X - Israel G. - X"
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal15Eq3b = scmTeamsNbr;
scmTeams[scmChal15Eq3b] = { Saison: "2014-2015", Name: "Mariners 3", Event: "Challenge Mariners 2015"
, src: "https://lh3.googleusercontent.com/-y7eN5nqG0jA/VXK_xpK78QI/AAAAAAAABp4/LeSJTcyNuOE/s576-Ic42/CH15_Mariners%2525203b.JPG", width: 400, target: "_blank",
    texte: "",
    desch: "X - David S. - X",
    descb: "X - Claudiu S. - Israel G."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal15Eq4 = scmTeamsNbr;
scmTeams[scmChal15Eq4] = { Saison: "2014-2015", Name: "Mariners 4", Event: "Challenge Mariners 2015"
, src: "https://lh3.googleusercontent.com/-3soCgJBfDbE/VXK_xmwiO2I/AAAAAAAABqA/gK-XX3UIY0U/s640-Ic42/CH15_Mariners%2525204.JPG", width: 400, target: "_blank",
    texte: "",
    desch: "Gregory L. - Jerome A. - Nori O. - Alexandre B.",
    descb: "Nicolas B. - Jeremy V. - Sebastien V."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal15Eq6 = scmTeamsNbr;
scmTeams[scmChal15Eq6] = { Saison: "2014-2015", Name: "Mariners 6", Event: "Challenge Mariners 2015"
, src: "https://lh3.googleusercontent.com/-SMyY5BHvbfM/VXK_xb6Hp6I/AAAAAAAABp8/Ai8bwnQJORI/s640-Ic42/CH15_Mariners%2525206.JPG", width: 400, target: "_blank",
    texte: "",
    desch: "Cedric S. - Gregory L. - Cyrille S. - Lucas M.",
    descb: "X - Jonathan D. - Joel S."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta15a = scmTeamsNbr;
scmTeams[scmIta15a] = { Saison: "2014-2015", Name: "Marinieri", Event: "Eurotorneo 2015 (ITA)"
, src: "https://lh3.googleusercontent.com/-NMp6bWa9_Gs/VbAFM7K3oSI/AAAAAAAABtE/AkuBmU8ukjM/s800-Ic42/Marinieri%2525202015.jpg", width: 400, target: "_blank",
    texte: "3eme place",
    desch: "Denis S. - Tom B. - Nicolas B. - Nicolas S. - David (McGuyver) B. - Anthony (Tonio Fossa) S. - Maxime V. - Sebastiano G.",
    descb: "Sebastien V. - Jerome A. - Gonzalo F. - Alexandre B. - Frederic V. - Davide (Robocop) S. - Samy V. - Fabian D. - Jeremy L. - Guy G."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta15b = scmTeamsNbr;
scmTeams[scmIta15b] = { Saison: "2014-2015", Name: "Marinieri", Event: "Eurotorneo 2015 (ITA)"
, src: "https://lh3.googleusercontent.com/-Jpazeih6k5E/VbAdKJrLnbI/AAAAAAAABtc/fsY-mFnpMm4/s720-Ic42/Marinieri%2525202015%252520-%252520Mystic.jpg", width: 400, target: "_blank",
    texte: "Au Mystic Pizza",
    desch: "Fabian D. - Nicolas S. - Nicolas B. - Maxime V. - Jerome A. - Frederic V. - Alexandre B. - David (McGuyver) B. - Tom B. - Gonzalo F. - Marco S. - Davide (Robocop) S. - Guy G. - Sebastien V.",
    descb: "Denis S. - Samy V. - Sebastiano G."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta15c = scmTeamsNbr;
scmTeams[scmIta15c] = { Saison: "2014-2015", Name: "Marinieri", Event: "Eurotorneo 2015 (ITA)"
, src: "https://lh3.googleusercontent.com/-viMw6CXyszg/Vc-cyR6Lb1I/AAAAAAAABvI/xapHvLxgWvE/s576-Ic42/Marinieri_JackTheRipper.JPG", width: 400, target: "_blank",
    texte: "Au Jack The Ripper",
    desch: "Gonzalo F. - Emanuele P. - X - Zaira - Sebastiano G. - Samantha F. - Denis S. - Alexandre B. - David (McGuyver) B. - Fabian D. - Anthony (Tonio Fossa) S. - Virginie H. - Nicolas B. - Laura V.",
    descb: "Nicolas S. - Jerome A. - Guy G. - Samy V. - Sebastien V. - Davide (Robocop) S. - Anais B. - Tom B. - Frederic V. - Maxime V."
};

// 2013-2014
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scm1314Eq1 = scmTeamsNbr;
scmTeams[scm1314Eq1] = { Saison: "2013-2014", Name: "Mariners 1", Event: "Saison 2013-2014"
, src: "https://lh3.googleusercontent.com/-H1fJH-4vzTk/U51oRGR9lGI/AAAAAAAABPQ/t2wJQkIQQyU/s576-Ic42/EqA_2013-2014_1.jpg", width: 400, target: "_blank",
    texte: "3ème Provinciale F",
    desch: "Haçik T. - X - X - Taniyel D. - X",
    descb: "Robert G. - X - Gonzalo F. - X"
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1314Eq4 = scmTeamsNbr;
scmTeams[scm1314Eq4] = { Saison: "2013-2014", Name: "Mariners 4", Event: "Saison 2013-2014"
, src: "https://lh3.googleusercontent.com/-pz_YvVrOmcY/U59YVCYymGI/AAAAAAAABPQ/ja_E4wHKq70/s640-Ic42/Eq%252520D%252520-%2525202013-2014.jpg", width: 400, target: "_blank",
    texte: "4ème Provinciale H",
    desch: "Thomas R. - Simon W. - Michael D. - X",
    descb: "Guillaume C. - Lucas D. - X - X"
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1314Eq5 = scmTeamsNbr;
scmTeams[scm1314Eq5] = { Saison: "2013-2014", Name: "Mariners 5", Event: "Saison 2013-2014"
, src: "https://lh3.googleusercontent.com/-l73l0hQWmuc/U52S5aIgfhI/AAAAAAAABPQ/I4Z_p7H-KlU/s640-Ic42/EqE_2013-2014_1.jpg", width: 400, target: "_blank",
    texte: "5ème Provinciale L",
    desch: "David S. - Jeremy L. - Olivier L. - X - Carim H. - Davide (Robocop) S.",
    descb: "X - X - David T. - Samy V. - X"
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta14a = scmTeamsNbr;
scmTeams[scmIta14a] = { Saison: "2013-2014", Name: "Marinieri", Event: "Eurotorneo 2014 (ITA)"
, src: "https://lh3.googleusercontent.com/-h_0MJhMjNXg/U8g_kw0GKUI/AAAAAAAABPQ/I45yQxmtboA/s800-Ic42/Marinieri%2525202014_1.jpg", width: 400, target: "_blank",
    texte: "2eme place",
    desch: "Denis S. - Sebastiano G. - Frederic V. - Tom B. - Nicolas S. - Fabian D. - Jeremy L.",
    descb: "Davide (Robocop) S. - David (McGuyver) B. - Samy V. - Alexandre B. - Sebatien V."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta14b = scmTeamsNbr;
scmTeams[scmIta14b] = { Saison: "2013-2014", Name: "Marinieri", Event: "Eurotorneo 2014 (ITA)"
, src: "https://lh3.googleusercontent.com/-slRRUz8lEww/U8hBw9CcbpI/AAAAAAAABPQ/kiQM94hhQGU/s460-Ic42/Marinieri%2525202014_2.jpg", width: 400, target: "_blank",
    texte: "2eme place",
    desch: "Denis S. - Tom B. - Frederic V. - Sebastiano G. - Nicolas S. - Fabian D. - Jeremy L.",
    descb: "Davide (Robocop) S. - David (McGuyver) B. - Samy V. - Alexandre B. - Sebatien V."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta14c = scmTeamsNbr;
scmTeams[scmIta14c] = { Saison: "2013-2014", Name: "Marinieri", Event: "Eurotorneo 2014 (ITA)"
, src: "https://lh3.googleusercontent.com/-c7bif2EsH0w/U8hByzKCZPI/AAAAAAAABPQ/9KS901ajKSA/s720-Ic42/Marinieri%2525202014_3.jpg", width: 400, target: "_blank",
    texte: "Au Jack The Ripper",
    desch: "Tom B. - Jeremy L. - Nicolas S. - Sebatien V. - Fabian D. - Frederic V. - Sebastiano G.",
    descb: "Davide (Robocop) S. - David (McGuyver) B. - Alexandre B. - Denis S. - Samy V."
};

// 2012-2013
// *********

scmTeamsNbr = scmTeamsNbr + 1;
var scm1213Eq1 = scmTeamsNbr;
scmTeams[scm1213Eq1] = { Saison: "2012-2013", Name: "Mariners 1", Event: "Saison 2012-2013"
, src: "https://lh3.googleusercontent.com/-CSEgTeVe0hg/VdCqbU8le3I/AAAAAAAABvk/5GBDGQiqYFA/s640-Ic42/2012-2013%252520-%252520SC%252520Mariners%2525201.JPG", width: 400, target: "_blank",
    texte: "3ème Provinciale A",
    desch: "Sebastiano G. - Jeremy L. - Fabian D. - Maxime V.",
    descb: "Davide (Robocop) S. - Frederic (Scholes) D."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1213Eq4 = scmTeamsNbr;
scmTeams[scm1213Eq4] = { Saison: "2012-2013", Name: "Mariners 4", Event: "Saison 2012-2013"
, src: "https://lh3.googleusercontent.com/-bS3jJSi4aFs/U52RcOE1cAI/AAAAAAAABPQ/T2gWinKsl1Y/s640-Ic42/EqD_2012-2013_1.jpg", width: 400, target: "_blank",
    texte: "5ème Provinciale R",
    desch: "X - Michael D. - Simon W. - Thomas R. - X",
    descb: "X - Guillaume C. - X - Lucas D. - X"
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1213Eq5 = scmTeamsNbr;
scmTeams[scm1213Eq5] = { Saison: "2012-2013", Name: "Mariners 5", Event: "Saison 2012-2013"
, src: "https://lh3.googleusercontent.com/-097EXxr-TIk/U54EH7QD4_I/AAAAAAAABPQ/w2JR8ZFneY4/s576-Ic42/EqE_2012-2013_1.jpg", width: 400, target: "_blank",
    texte: "5ème Provinciale I",
    desch: "Samy V. - X - X - X - X",
    descb: "X - David T. - Carim H. - Olivier L."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1213Vet = scmTeamsNbr;
scmTeams[scm1213Vet] = { Saison: "2012-2013", Name: "Veterans", Event: "Saison 2012-2013"
, src: "https://lh3.googleusercontent.com/-OWlxgzlcF_w/U52T1XaSuWI/AAAAAAAABPQ/IEVpoKokBvo/s640-Ic42/EqV_2012-2013_1.jpg", width: 400, target: "_blank",
    texte: "Division 1",
    desch: "Guy G. - Pierre W. - Moussa E. - Fabrice (Pluto) M. - Jean-Christophe Z.",
    descb: "Frederic (Scholes) D. - Davide (Robocop) S. - Luc C. - Andre V."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta13a = scmTeamsNbr;
scmTeams[scmIta13a] = { Saison: "2012-2013", Name: "Marinieri", Event: "Eurotorneo 2013 (ITA)"
, src: "https://lh3.googleusercontent.com/-aw6PPAV5TAM/U58h-7d8fqI/AAAAAAAABPQ/rY-79JOXeC8/s890-Ic42/Marinieri2013_tournoi.JPG", width: 400, target: "_blank",
    texte: "2eme place",
    desch: "Jeremy L. - Guy G. - Moussa E. - Denis S. - Patrick R. - Omar E. - Frederic V. - Tom B. - Sebastiano G. - Maxime V.",
    descb: "Nicolas B. - Laurent L. - Davide (Robocop) S. - Alexandre B. - Nicolas S. - Sebastien V. - Fabian D. - David (McGuyver) B."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta13b = scmTeamsNbr;
scmTeams[scmIta13b] = { Saison: "2012-2013", Name: "Marinieri", Event: "Eurotorneo 2013 (ITA)"
, src: "https://lh3.googleusercontent.com/-w4JTphyb5gI/U51uGqtvXdI/AAAAAAAABPQ/GgEPmySJ83M/s878-Ic42/Marinieri2013_Finale.JPG", width: 400, target: "_blank",
    texte: "2eme place",
    desch: "Guy G. - Laurent L. - David (McGuyver) B. - Omar E. - Nicolas S. - Fabian D. - Jeremy L.",
    descb: "Denis S. - Moussa E. - Davide (Robocop) S. - Tom B. - Frederic V. "
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta13c = scmTeamsNbr;
scmTeams[scmIta13c] = { Saison: "2012-2013", Name: "Marinieri", Event: "Eurotorneo 2013 (ITA)"
, src: "https://lh3.googleusercontent.com/-Hjik_4rGapw/U8hC2FmyFQI/AAAAAAAABPQ/Bk5lYiqjF68/s800-Ic42/Marinieri2013_Bassano.JPG", width: 400, target: "_blank",
    texte: "A Bassano Del Grappa", desch: "Tom B. - Fabian D. - Guy G. - Patrick R. - Sebastiano G. -Omar E. - Laurent L. - Moussa E. - Frederic V. - Denis S. - Maxime V.",
    descb: "Sebastien V. - Nicolas B. - Alexandre B. - X - David (McGuyver) B. - Jeremy L. - Nicolas S. - Davide (Robocop) S."
};

// 2011-2012
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scm1112Eq4 = scmTeamsNbr;
scmTeams[scm1112Eq4] = { Saison: "2011-2012", Name: "Mariners 4", Event: "Saison 2011-2012"
, src: "https://lh3.googleusercontent.com/-Vrk5T6XGiwM/VdC6K_-iEjI/AAAAAAAAByY/I69pFQtlTRY/s640-Ic42/Eq%252520D%252520-%2525202011-2012.jpg", width: 400, target: "_blank",
    texte: "5ème Provinciale L",
    desch: "X - X - Thomas R. - Simon W. - Michael D.",
    descb: "X - X - Guillaume C. - Lucas D. - X"
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal12Vin = scmTeamsNbr;
scmTeams[scmChal12Vin] = { Saison: "2011-2012", Name: "Mariners Vintage", Event: "Challenge Mariners 2012"
, src: "https://lh3.googleusercontent.com/-x0NyDaZSEXs/VdC4T0xcxxI/AAAAAAAABx8/k1prKtZ2Yrw/s512-Ic42/CH12_Mariners%252520Vintage.JPG", width: 400, target: "_blank",
    texte: "",
    desch: "Adrian A. - Guy G. - Patrick B.",
    descb: "Davide (Robocop) S. - Moussa E. - Olivio T. - Cataldo C."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal12hde = scmTeamsNbr;
scmTeams[scmChal12hde] = { Saison: "2011-2012", Name: "Mariners Vintage et Happy Dolphins Encounters", Event: "Challenge Mariners 2012"
, src: "https://lh3.googleusercontent.com/-IxcKY8BCyDA/VdC012lZEuI/AAAAAAAABxo/v-3CILuYdE0/s800-Ic42/CH12_Happy%252520Dolphins%252520Mariners%252520Vintage.JPG", width: 400, target: "_blank"
, texte: "Challenge Mariners", desch: "Patrick B. - Florence L. - Davide (Robocop) S. - Olivier V. - X - X - X"
, descb: "Juan M.S. - Adrian A. - Moussa E. - Olivio T. - Gilles V. - Cataldo C. - Pom D."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta12 = scmTeamsNbr;
scmTeams[scmIta12] = { Saison: "2011-2012", Name: "Nos Marinieri", Event: "Eurotorneo 2012 (ITA)"
, src: "https://lh3.googleusercontent.com/-U5aWTdLRe0I/U58g15LztWI/AAAAAAAABPQ/JcB6xXnPzqM/s640-Ic42/Marinieri2012_tournoi.JPG", width: 400, target: "_blank"
, texte: "Eurotorneo (ITA)", desch: "Vincent D. - Jeremy L. - Omar E. - Sebastiano G. - Moustapha L. - Fabian D."
, descb: "Laurent L. - Moussa E. - Davide (Robocop) S. - Manu P. - Sebastien V."
};

// 2010-2011
// *********

scmTeamsNbr = scmTeamsNbr + 1;
var scm1011Eq3 = scmTeamsNbr;
scmTeams[scm1011Eq3] = { Saison: "2010-2011", Name: "SC Mariners 3", Event: "Saison 2010-2011"
, src: "https://lh3.googleusercontent.com/-ov3lswSyx1o/U52QYGXr_HI/AAAAAAAABPQ/W9jreHsuq6U/s640-Ic42/EqC_20102011.jpg", width: 400, target: "_blank"
, texte: "4ème Provinciale E", desch: "X - Sebastiano G. - Jean-Christophe Z. - Jerome A. - Sebastien V."
, descb: "Laurent (Casper) S. - X - Karim A. - Alexandre B. "
};

scmTeamsNbr = scmTeamsNbr + 1;
var scm1011Eq4 = scmTeamsNbr;
scmTeams[scm1011Eq4] = { Saison: "2010-2011", Name: "SC Mariners 4", Event: "Challenge Mariners 2011"
, src: "https://lh3.googleusercontent.com/-ZCkPp4vn1AE/VdCzNk2ICKI/AAAAAAAABxI/nhCQXj3n508/s720-Ic42/CH11_Equipe%252520D.JPG", width: 400, target: "_blank"
, texte: "Challenge Mariners", desch: "X - X - Frederic V. - Tom B. - Haçik T."
, descb: "Nicolas S. - David (McGuyver) B."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal11Gam = scmTeamsNbr;
scmTeams[scmChal11Gam] = { Saison: "2010-2011", Name: "Marinieri - Gambellara", Event: "Challenge Mariners 2011"
, src: "https://lh3.googleusercontent.com/-WTew-_A1x_s/VdC0ISfzhXI/AAAAAAAABxY/Rkihza3hmiA/s640-Ic42/CH11_Marinieri%252520-%252520Gambellara.JPG", width: 400, target: "_blank"
, texte: "Challenge Mariners", desch: "Rafael C. - Moussa E. - Alfonso C. - Marco R. - Jeremy L."
, descb: "Massimo M. - Orfeo I. - Luigi B. - Domenico P."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta11 = scmTeamsNbr;
scmTeams[scmIta11] = { Saison: "2010-2011", Name: "Nos Marinieri", Event: "Eurotorneo 2011 (ITA)"
, src: "https://lh3.googleusercontent.com/-9N_xxq02CPU/U58jqEXg7KI/AAAAAAAABPQ/QvV7zijmE9U/s912-Ic42/Marinieri2011_tournoi.JPG", width: 400, target: "_blank"
, texte: "Eurotorneo (ITA)", desch: "Luc P. - Moussa E. - Frederic V. - Sebastiano G. - Laurent L. - Guy G. - Jeremy L. - Manu P."
, descb: "Davide (Robocop) S. - Orfeo I. - Fabian D. - Vincent D. - David (McGuyver) B. - Omar E. - X - X"
};

// 2009-2010 : DERNIERE SAISON EQUIPES AVEC LETTRE
// 2009-2010
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scm0910Vet = scmTeamsNbr;
scmTeams[scm0910Vet] = { Saison: "2009-2010", Name: "SC Mariners Vétérans", Event: "Saison 2009-2010"
, src: "https://lh3.googleusercontent.com/-aLd2cZHKa1M/VdCwbcxisvI/AAAAAAAABwM/tClKXmmOenc/s640-Ic42/2009-2010%252520-%252520SC%252520Mariners%252520V.JPG", width: 400, target: "_blank"
, texte: "Division 1", desch: "Sergio S. - Guy G. - Bernard (Pele Blanc) V. - Laurent (Casper) S. - Davide (Robocop) S."
, descb: "Olivier R. - Luc C. - Frederic (Scholes) D. - Robert G. - Renaud V."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal10Axae = scmTeamsNbr;
scmTeams[scmChal10Axae] = { Saison: "2009-2010", Name: "Mariners - AXA DCF", Event: "Challenge Mariners 2010"
, src: "https://lh3.googleusercontent.com/-ymx7BtlwIJc/VdCyKuHhbKI/AAAAAAAABw0/I58MCsmwCSE/s576-Ic42/CH11_AXA%252520DCF.JPG", width: 400, target: "_blank"
, texte: "Challenge Mariners", desch: "Eric V. - Mathieu D. - Benoit S. - Ghislain B."
, descb: "Laurent L. - Fabian D? - Jerome A. - Mutlu T."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal10Gamb = scmTeamsNbr;
scmTeams[scmChal10Gamb] = { Saison: "2009-2010", Name: "Mariners - Gambellara", Event: "Challenge Mariners 2010"
, src: "https://lh3.googleusercontent.com/_sOOjXDd2Rit7MXHXA7EhrF8T-EA6lkaUZCD10g81zJxaD87ibzXhXp8kuheGjVXxCax61qC7M4Vc-J8uo0qDkQFrBpq4bEKwGl5xQuIqE8lDt2DrswxaKcF66mpPO90wLu5onZK2hmp5brSBYHJvNwFKh4Q827S72sL93P0xjDvaHsxjRs-TEMQ-1EsZWlp73TfsGe0Iqf_Qv-Qy95E8K7rDfIBG04_ctOFZHFIv-XoYxOW9OLLjxMtlwk7BMZ4k7szqqXnVkCcFnjz_GxspnizSc_-5wHuyr7Xa8NJ7t01HKDgP_GhwyGbTDc1cFtZwpm8iWMAsI8Fu2SP6a5lu_fTIeMnhLvadi3jxveqEdaBNA7eiu-qvMzYe82L_ic43JZeHjhVUva4mweWFJPGTP38QQ5wQ2Y2oYk61qNAZQWgF1VTaEetFUGKF94TdS0ZqcxMpl42hTE1OLVOM-L32vwfWuzrC-gG1SSUnIBJLoXCuyHbbCH_9JrPyCkTlHnxgQ0kqEedu_HEfMf-sQ7daw4tB89xhfUgnqNzx51CkyFlNoGwexIDHURwSALnSLep-VEByZutZHXcl6kgP5K4-ysLYsg1CcE=w1200-h667-no", width: 400, target: "_blank"
, texte: "Challenge Mariners", desch: "Adriano P. - Davide (Robocop) S. - Denis S. - Moussa E. - Marco R. - Fabrice (Pluto) M. - Michele P. - Gherardo B."
, descb: "Jeremy L. - X - Orfeo I. - Fabian D. - Luigi B. - Federico S. - Stefano S. - Alfonso C. - Domenico P."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal10EqE = scmTeamsNbr;
scmTeams[scmChal10EqE] = { Saison: "2009-2010", Name: "SC Mariners 5", Event: "Challenge Mariners 2010"
, src: "https://lh3.googleusercontent.com/W3lc-GL4l-lL8ieo6nIrz7SI2ZaGBLowiRSpQVSGJb8uOn10eV_yGdj_fxcHiH00gNKe-bxrXmLgemCFswWfGIJBPqZlQTZvz-mFwVcZybS2QGf8n05FMNJLwGI8mA-T0ESoos40ksTv-Le2x6L6Ib3dJVhu_anHmSLF5snQmK1k26PH2GyTwt8OqtEnsYUmOKrWR_zwFT5W7ksVRu46ZE5RjUR4iAtlgdsbz1hj7_KbMCXeGYx4RC7ljvkDry8KTX6SgfyrqBtOYY5E14hCD_jnPBJb5rImNb7Ja_wWx2-789U0gmXeHreW3swpsFCYSOqdQIMz5T8KvuBv2kN6yWhPjouqqhjxX_dBmNQbXjt7yCiGZ4He0T-iXOKluVJ0IWNgA0Un5xbQBJvL8mXeLJk4qlA_IHydFQZFQav-TYXqUqoc2lM40BjRWydpr_XQyIbmCVq4VZ6MQloYgDWXK-JI-R7tWG0siwR12FCJ9dN89Whf0F0_joxVBzG5jMkiWLHT-TpI2rQpr7RnRj1Ee6l3z9Au3ZQlfTJznQ57Xv2ZWnlMG7eFiUenY6vugnqHrr6Wg6nQs7n9eNUim8BMlyINTdvu98c=w979-h677-no", width: 400, target: "_blank"
, texte: "Challenge Mariners", desch: "Geoffrey M. - X - Jonathan W. - Philippe W."
, descb: "Nicolas J. - X - X - X"
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta10 = scmTeamsNbr;
scmTeams[scmIta10] = { Saison: "2009-2010", Name: "Nos Marinieri", Event: "Eurotorneo 2010 (ITA)"
, src: "https://lh3.googleusercontent.com/-KvahYKpGvbk/U58k3wLp7bI/AAAAAAAABPQ/bA_hx4cBJvk/s912-Ic42/Marinieri2010_tournoi.JPG", width: 400, target: "_blank"
, texte: "Eurotorneo (ITA)", desch: "Francis M. - Sebastiano G. - Michel H. - Denis S. - Jean-Christophe Z. - Ardo A. - Moussa E. - Omar E. - Vincent D."
, descb: "Davide (Robocop) S. - Manu P. - Jerome A. - Jeremy L. - X - Luc P. - Alexandre B. - David (McGuyver) B. - Fabian D."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta10Ven = scmTeamsNbr;
scmTeams[scmIta10Ven] = { Saison: "2009-2010", Name: "Nos Marinieri départ pour Venise", Event: "Eurotorneo 2010 (ITA)"
, src: "https://lh3.googleusercontent.com/verULcU-F8a4uN9UkrneZGrf-ezmR8fZIIwjG0MEPjC6HZodQFF4n0EGqI0p5_R_OcTldEKq0si-tQkQjTQ__Qt83j9yTWqUThOwqdF_1lkpHmmXiWGic6Z7GjQryhlKRORM7P4XuUTdp0jgwfgiUaJAvQ4s33Ib-iD9x4L4cFId6poBvkQbQAsZKoBiB4VAcuoeX3cKe1Hh76jQowPFPTvlCh0yYxyiwKKdl3JLzNhmP6da6fH6jonfveUknCqkdtxFWfET9P8lxJoYp8Uh3749Rt9EzncmMIFLhDNYiD3KwSrvny-nQNr_puz4S4cCXJrSu59e3it4SnraJHeDFZTcvKJu7zlmdPXkVrNVn8WiyV6pCJO3voC3D-aIbiToDOMAs4CPTpsgXog0okZ6uOc3CZmAk-SeqWW2FaWrv_UWwlgnOA4VKhAzsd8TT8cERwlL4Xag7wdpENK-SL03UctpI7lymQJYIQbHJ3qINa7ATkWhlmeej8mE03gPdVvLxyYEHchi0YAWRqvd9FfoWw0Jlksm8ZDbMZEUPWkUiktWwsVZH3LRCxPXnSBrKRYEtgD9DzhxIcIGm1MTXzrB_OTEuFAnpKM=w600-h450-no", width: 400, target: "_blank"
, texte: "Eurotorneo (ITA)", desch: "Jeremy L. - Omar E. - Moussa E. - Sebastiano G. - Denis S. - Guy G. - Jean-Christophe Z. - Ardo A. - Fabian D. - Michel H. - Vincent D."
, descb: "Alexandre B. - Luc P. - X - Davide (Robocop) S. - Jerome A. - David (McGuyver) B. "
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta10Eq1 = scmTeamsNbr;
scmTeams[scmIta10Eq1] = { Saison: "2009-2010", Name: "Nos Marinieri 1", Event: "Eurotorneo 2010 (ITA)"
, src: "https://lh3.googleusercontent.com/qAmsy89uaqcmcou8FagKk1s7DDAntdmTnM2SfJW6FwckjEjz1RGw1iK6820qy8YUgC_abFT7RkSXG3nZr1zJvTLo3lc0T8OSGl3BqdSzfxcMa5hZjkN0Y06n0PwPRhs4K7PdT8G7lYEQGakmr4gMXiQ1rqe5lVo-wHRXWbzzC6IBhAbzxqs36XEEe2wPzP1j-o8-yzYXCqodDDCue3MB9mJVp833PyuqASZ6qwIzfM4vUWINvVuVScFV1MoXgK1Y9fSgBUlnJD5AZvDA4VMLcjjqPNsdno6vQO6ChPN2YOlEEzQFSgNO0UCMSxsOQjMsdGxank_1ostj1ThdR1rfchGc_ldGkEatbpBzgkfnSeyRSdqsxSfyQe1w1yewAdC6XnRr7wpmsCVocWOoGZNRrhWysmI4CcT-VVDIO_mmX_x3tPwnjdr3XFE3rpHugaHM4U-z0CWu76MWAZQbfFjLSJC5LuR3FTX_r_JMxiU8hGprz44dhZ76H5xpXwqkn2yD9pPeBCVe9VQUr_LitRfW2JvuVBjmMUtGsjWWhREYH0b5Q7BIQUbyFaBTA0DYitwcYLHhrtPUVeei0Z4-ymenU72TFv66rBw=w600-h450-no", width: 400, target: "_blank"
, texte: "Eurotorneo 2010 (ITA)", desch: "Jeremy L. - David (McGuyver) B. - Denis S. - Fabian D. - Ardo A."
, descb: "Manu P. - Davide (Robocop) S. - Moussa E."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta10Eq2 = scmTeamsNbr;
scmTeams[scmIta10Eq2] = { Saison: "2009-2010", Name: "Nos Marinieri 2", Event: "Eurotorneo 2010 (ITA)"
, src: "https://lh3.googleusercontent.com/m83ZiJaHkBV8NX8SyfmTBTsGxi81xyCPveI_Sb_XjDQMyZ1P7SyUU6HjfF8MMNVCb5RUIdP9uf7bAfSaTxe5CE-JCt5PslYnrSOMCQGdloItCF-uuNySHILeYZf_-LYNCSL_3H_R5gyeyPiyMjeniVb5KZpqo94Z5dT_Wm9VCkb2wPzXfh6GGfbOHTnkYOxVjwTD4cSy4Mwrq-hBocqiX0s1cyr2t34Lo1PW5hE3dIZa7l0tzS_NSF-eEHrvPZGmGICKVau27-gL01wGcJWUETDiLW6zYhOk4qesmUytUz5Apc0ro1w80NbsbRrltWkcOT0XtJkpJTqx0Fk-1m_6we4Q2bd-7cq_HggLvtP9w8Ez-TBAMvlvLMi5iefaIi1vGmV7UwvQVRMVGe4O7e1NvTwEwwhSnGEZS51xAtQdar9YiThYxd-t3H3anvgH8Uym6kqq9VniKdhD4P5LOITQkPIWRZD_lL5L0HBe7iXzBfMU7DA-yNLV5j1pg3SvfbszGFW-zF2jmOT1rrVH0pZslK2JIUioRw5A88uQeY8G-XWkI4e7ekwdYtBVNyoI9XNE1nMgRX7sdFsR9mu6xW_TEXbYUN6pxBA=w600-h450-no", width: 400, target: "_blank"
, texte: "Eurotorneo (ITA)", desch: "Francis M. - Sebastiano G. - Michel H. - Jerome A. - Jean-Christophe Z. - Omar E. - Alexandre B. - Vincent D."
, descb: "Luc P."
};


scmTeamsNbr = scmTeamsNbr + 1;
var scmIta10Fin = scmTeamsNbr;
scmTeams[scmIta10Fin] = { Saison: "2009-2010", Name: "Nos Marinieri - 1ère place", Event: "Eurotorneo 2010 (ITA)"
, src: "https://lh3.googleusercontent.com/aDhyuc6amFLMo1fBRypYW6Vir7otJU5ipHw1XxFH6a8l7XgBwZ0Ozp2NLCFFUYFTUmGnZM6JcZvkqHRSsDkQ4j5nSZUYsIYf76Vx9G7L2eFk88fY6MMY9qQRwuiOZonL9M8RBtkCcsdyRX-lYZlxpQI9I8uPwvKGGFpnqgAmthlyqrlnsojlvGKdP-IXGtANn-NW-rQUvx8A-caqdogMAdqy1nHjzdbLFAXwCZEfXLhtbYqT4E_ngHPwlUM-0-JXmsqW3ajbMQUWWaUVWWZG3c_sjdqgZIYSIS2CO3gpsvucxvs9jxrXhdzdgLNw6USg2slOX9HhHdHD_SrI0CIbaStU4BGdYC2iyUtnEgWKGWfEiTr8FGqrnJhB8YwGsOJkuKyoltyx93GCqE2gBjKlzoJ5KqBmUgIA--psKVKGYiUgXRM10c48fYOq5dYGAHC4EqFwVsEQ_6yHstY9uWl4niDsZE153kHmSd7fPeKSMUuo1oUFBg6uEXmiz5BFJQXHmjd1WOCud-VGaFGRRCThUl-ZpkgZJ-5Cu5pvO5PpXWInhfvlY7om7VtdSQdv35wjYIQnFh-TbZFXjUPhpI1Kjj-yEBIiPj4=w474-h355-no", width: 400, target: "_blank"
, texte: "Eurotorneo (ITA)", desch: "X - X - Davide (Robocop) S. - Moussa E. - David (McGuyver) B. - Jeremy L. - Fabian D."
, descb: "X - Denis S. - Ardo A. - Manu P."
};

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta10Gam = scmTeamsNbr;
scmTeams[scmIta10Gam] = { Saison: "2009-2010", Name: "Marinieri", Event: "Eurotorneo 2010 (ITA)", src: "https://lh3.googleusercontent.com/zbk7yx5AldNMbYxN4BzoqrmqgPgdo2EQNaSMfZSddKmOwcAZpQqr9ipqdDKxeBlmmxm5fYMMJ-vthoSyvtYZqj4dnX50pPz4BEmYxOD7wIkw5zeOqgu1q8WbW3qakHiN7yQW_bqCZul_pbxjqF_foQnArCYawINAGajpqjhRLpR0FqX8gxrIRM3vH3jxBLW0_9qXdwBsNkbzDHIiqjJv1P8xsFSrPdHN_r7atqJzD-f-QnYJl08sMsVaZDOEv3o1mtNVJSCd_Ky7rKbYQwI9deF0Az5mN70frKA3cQdI1I9127urhXwxC1DlkDlIXm-O8RoQ6u6dbmL0PI0XP-QdWI6cMMugZPPWpny38EevMKh3r2FWbeuFLDHNlihfux15uikGCYRFcx70Igc9354W-6F4lnZDx_8k0mCb7Nkn1Io7yHcOOna8KDTvKlPvtCDZ_MOEiWx6vLgxjbN9hrI76pBnm4ATN8tgcf1mth5mz279FrPHEgUZLLwhxvJasbh9z89PPGho-TQ-Wv_WVpG4ki-pY_fzFAc9apknJLvbsaFHKwX230SId5JT2ilW5XrUv7P-w5yCOEnf5AWlZnM11qvFKoQxpRg=w474-h355-no", width: 400, target: "_blank", texte: "Nos Marinieri et Gambellara", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

//check Name et Texte fait jusqu'ici !!!

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta10Ret = scmTeamsNbr;
scmTeams[scmIta10Ret] = { Saison: "2009-2010", Name: "Marinieri", Event: "Eurotorneo 2010 (ITA)", src: "https://lh3.googleusercontent.com/scHKGshYm_QFELhi4rnlYFmdvmeEEs5yVTsihtE6vxv9CYFNYJ29wgTJC2T-tzxCTa0eHeyIfG0UjTwJf_HWQ_91bZXHNaUnDz8SQcdRmcql7OkvSVwidnZqRwCoGLjbM_DIWE9NtyIHAMhVF7WxZqMXXd4C7w7ObQsay0D2DNRMaY2Su-oQhdTZkL6u-qUYXRfxeBMiysP-BCouyNXP3JTP67p8SiRgb5wA-1YiEKTpk0-hWngNJyrHbhq1BfIuR6s1sAozory-ReAf1gkQCyTrajTHWMKrDHLSAZ3ZZ7_uSeiKElFQksPaA4tM47XfGxt7jvU9FUGgcnOn3VVRArZnSK3HmspUp1crWXh-Qf-48-S3puKrYh0xi7pqU5Sz1ks_4oK_5FAzI-YUxdgr9_SWEqvrZWe57l9EgXBmd9swdIUCJ10q6prfAGghcIdDv1RwK-WZk7cKnastcCaf3DvO9yZiPploiKIuiF28Hth4MyNHJ7RGj247_u0zNG2_RAqJg3R7GYF_RFIcPFIv8_xUZLdJPEpPJ4-1yfLdzE1aTJ9BMg_HJGeX3frPdxL6pbKSqXfgedLrh5PJ4ikXiU5zXS-wVdI=w533-h355-no", width: 400, target: "_blank", texte: "Nos Marinieri retour Belgique", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta10Eq1Fin = scmTeamsNbr;
scmTeams[scmIta10Eq1Fin] = { Saison: "2009-2010", Name: "Marinieri", Event: "Eurotorneo 2010 (ITA)", src: "https://lh3.googleusercontent.com/KcxlQ-n9bu_AggtMA7nxBvlsdqkMe8tU21TKKyEFj-SpH0UU1DE-0ZrBcIXCxNVO7STuHOg-jPTkaZS0fr47d__lkLgaQ8K9Aap1sMlMTAy0-mXVNJ54CiysYoxt1TZttKIJOosWVXO5iLx_YNG2vgfYVrCvG3wqMgBI9tFYnbBFec6QTbIY_aU0jI4yIuFYPG7MNXRZdeVHAHpuCSwenF3VwfRh22QAzDTYV3uhmwPATx30rt5apyRHoMiIulHqhq3thNqCT9f3WlXWgjFIssCAEPM1iJ7R3rOu29sVk6QlbauqptdBoHL9QjTdqTsSTNjw6UIxvhngxGp8yGcEW4k01n9AKEP4kv4_QQ_obyJdiL_25bJk--hNPhzA6iBwY7sgZFk218P7A9kXA7aWHB2q7OXtKgsX019dW8EA570DD3Q-Z4FSygm_ZSVsXjIFBH_EhMvjSP1GTl55fear7WfUmvFtLavn9wTGhGetMBBJx50zhg5Y5vahAfH32QaWnSD9FYXRJCybzz4oDzEqjpxCXvT0-07SjESPIxW4BGJHnUORZ0UbmIgpH6Oq_wuG_zNYApu6CA7blTOf7GOg4LURaWPkwbI=w474-h355-no", width: 400, target: "_blank", texte: "Nos Marinieri Finale 2010", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta10Eq1GamFin = scmTeamsNbr;
scmTeams[scmIta10Eq1GamFin] = { Saison: "2009-2010", Name: "Marinieri", Event: "Eurotorneo 2010 (ITA)", src: "https://lh3.googleusercontent.com/OMcZoxq4dBJL04TpAaioKP06Earq1D88rqk_Z5WS4XWudRi_E3fuJEfpR_5d67TYNr90dZ9fXq5cBkdTLS3WP-gYOqmFmAXprFnY1slrzQAMRkwnrpUY9a67h2tjIJOb3n_xZUMZZYyL8-ODIcwqia16q1xa51EcYAss32dRdbGmcgbuvfYaO_aOcB7FIwEYvrGNsQmt_43W1j1rZZJu-usnEk-Hdh6r9OLgn4eXfWvhEPrjRIyKXKkxTqdoAUurObxY8nLyRX-Q6-T2ms2Wu_XhspVh0SlcO6itEtMGRFVuTHNuoozI6VsnT1Lb4yMvOzpd7zsaR6BH2qSUjV225WK4yuN8DLH0Nng-TT8GbqonadXU1XiOBrB6aWLHTT_n4fYIJaNPqy5rlFpeb3ARo_8VoMnRd1lY7-dFMnFGUG_sK7Albk5P2bTzdN8kMyIwIMFkUevDleex6uV_8kmxgxn_HRwGAHDcnTRoDf8_z1DhuEr2lNcaNw4BaqB8cJq7T2BEYJBoJJc0fhk6AphW85SJ7ea7wZ494d878QjeQ1VKnUwHdw24PQbYqKVYZIdXRuHr8d5S9fM_rwt1xpD4419jTttlBAk=w474-h355-no", width: 400, target: "_blank", texte: "Nos Marinieri et Gambellara Finale 2010", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };


// 2008-2009
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scm0809Eq4 = scmTeamsNbr;
scmTeams[scm0809Eq4] = { Saison: "2008-2009", Name: "SC Mariners 4", Event: "Saison 2008-2009", src: "https://lh3.googleusercontent.com/-SUlXWQTE-uU/VdpNQuLtLzI/AAAAAAAACBk/EJLvt_xQ-9A/s640-Ic42/SC%252520Mariners%252520D%252520-%252520Challenge%252520Mariners%2525202009.JPG", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta09 = scmTeamsNbr;
scmTeams[scmIta09] = { Saison: "2008-2009", Name: "Marinieri", Event: "Eurotorneo 2009 (ITA)", src: "https://lh3.googleusercontent.com/YFffNpHf-aaGsSQEaOfRQwwzq5yseHjX8WAdbf3YFzVLJnEHmWgMU8TGi_ihkiol9mExQQghlZdbPmttQURtgp2qquA1VTRTpc2uH8q4WFR88wp3KtpNJGAZsxl_bxdLctxTCM6JqsaTqPIJk5Xm-LbCBhKbPtsYwNsKXhWyoMePKMjItReJCN3g8Q1UD3uBAryhs7apMhKOr0DAXWoBL91T9vYcfYyfa5570ho_O4dZ4L2SQSZIsu91XFWz3c_VASkLLB_PrpnyWO96iAIUt_ti3_Mivem1zMNhMGjH0UwAhgULs2MTZ216jEmjRsaKUl8G_N7B40PHxHGsOBXIH2VT103GFHsaFEoTlQjy1vW9-DlEK_T9e8V5zeiRIfZHzwU75-GSdMCtIc77iPicsUvo2o5KVDfYV9ohNb1uVrlioyDWBdk2JLBRZ-qHQ1M2_moOCbS6MVoRFo-Ha8V0dC2Vq40YEuVhrGcaHzunZf8MzFRK8AkfoNhOMQ0YitgEpZ-NRm9QThtFMHZaMN36mMfNk31fxtz4Hx2ogZ5Bs1sFJICC7j2PJVtFYG4c3buuLfh0OkNtNoF-s2kXu2G3zHo4LOjLhlc=w560-h345-no", width: 400, target: "_blank", texte: "Nos Marinieri à Vicenza", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };



// 2007-2008
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scmChal08chb = scmTeamsNbr;
scmTeams[scmChal08chb] = { Saison: "2007-2008", Name: "Chtis Boys", Event: "Challenge Mariners 2008", src: "https://lh3.googleusercontent.com/-D5lOHJok__M/VdCxgNBAy7I/AAAAAAAABwk/Q2zOqioizbs/s640-Ic42/CH08_Chtis%252520Boys.JPG", width: 400, target: "_blank", texte: "Nos Marins et les Chtis Boys", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta08 = scmTeamsNbr;
scmTeams[scmIta08] = { Saison: "2007-2008", Name: "Marinieri", Event: "Eurotorneo 2008 (ITA)", src: "https://lh3.googleusercontent.com/-1HdZDg9QAEg/U58sGCjyqoI/AAAAAAAABPQ/7dsLnER2qUE/s720-Ic42/Marinieri2008_Finale.JPG", width: 400, target: "_blank", texte: "Nos Marinieri", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

// 2006-2007
// *********


scmTeamsNbr = scmTeamsNbr + 1;
var scm0607Eq1 = scmTeamsNbr;
scmTeams[scm0607Eq1] = { Saison: "2006-2007", Name: "SC Mariners 1", Event: "Saison 2006-2007", src: "https://lh3.googleusercontent.com/r3RFUge68bsA7athGQe3pX5L_t5tCzX8eZW9-HdkAbZLki26uS5JpAK9fWLHAioX2MJa7Yi7DNR-uIfychTmGGgvjpE-_tPRXmzqk9PboIm5wK1OPfThqIDGb3Hs2U9Tze2fSWREQGYsTnXo4W4ZZZDT21sASKjdz-Zz50m0JDIEKQVJiSj1x1sWymgffzn4RBhoitrd-T2e1zhjedYpm11F6EDk7lQfR5Fqxr6RTiZuCpx4SvdaWlDiI7oaeLt_E7313a73W06EH_2uzF5zSfmwgNObZmF4oVzjHPbQ6YbyWBlH-6S1Mwboy-arfgEQc9uGnHziuY5YaHnr1NKL5ChITfs2g_EPyzPBLbjZSJxmcebQlRZab34VV4C1aQpdrNArRORhP-D4H9g3bV9KKUo9whL0PmsbQ0TJDdkQX87V6zTQUF1LYwAobikKVFAo5R5e8n1KVoBdfbDTK9zRJQbGIx2TQynljWBGDXSc-OeyVB0iuWsVOuDXky0uuwDJUmLJHThevhj5KWcLen3CbjY7VclB62-ZnlxLsSl0Vi1ONLtEaoLsJLSYRzR8OxFM5Xo2MUfvYzGB8Wwaf_09Ix8_V0GZFYU=w440-h355-no", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };


scmTeamsNbr = scmTeamsNbr + 1;
var scm0607Eq2 = scmTeamsNbr;
scmTeams[scm0607Eq2] = { Saison: "2006-2007", Name: "SC Mariners 2", Event: "Saison 2006-2007", src: "https://lh3.googleusercontent.com/bDyiZM6gKkDl2V8DnAck1rrJqYndvtPbQtAIZsBQ8OH7EZNbwiuXOqj5iRpy0H0KDtFzUho1u3DNBGEl1vvcbMknac4ebMh8MoyVY2tx639MaVTYva6goyXgp8OkGtVF6PREmZqc12syhyw_lKo_tO4YsVRaTq412rPWkXhf3TcUHLs7v2WbJitASOWn5OJCDfWyOp0hR7zN4_tisuYwbSPvDJtop1J5It--YxJZgSEcxSO_dNhTWwbOmVkKcjyAmkDOY8X-g1r-rGYcRKlVcWQJwsbJQns6uTHQXYpL83gnTK-fSXDbiKY23x94JMVjXXrTxXJxF_BZsTL2Nvj3MfJbrCtMTdo_IaLZLW-6xovBlHB9ChwTrP48j0E2wYbj1Hn_uP0-bCTDc1ILyLJOhX1oW4GgHKef4o917NhyUOL_ZopUkCPX5BiAaKqC5NXQxDtwzxfMIIDk8IYfQGZMHL8QByYSCtTx317067hmjQMGlzDsRMAkcdlkjxVIb83oFbqiyT86iwzc63LbQWTFWdo_GgC5Yra-XGlMrS_eTlQrLllf8qnre2LUzshMvIEBStnO5aVI1-UXOE-ImcxmTK8Il5tnh6Y=w474-h355-no", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };


scmTeamsNbr = scmTeamsNbr + 1;
var scm0607Eq4a = scmTeamsNbr;
scmTeams[scm0607Eq4a] = { Saison: "2006-2007", Name: "SC Mariners 4", Event: "Saison 2006-2007", src: "https://lh3.googleusercontent.com/Kgj446x4nr4-JG2yWNGew-E-nHcDIG3u_Z5nvwHS-uaCCT9TqbtYBZaQiCe9BeLw61PiHoAnYPnJ12oI76-m6SPYMVv1mGa4smtJQgYdc63qIQ4FvLzvpIePULVv0z54s0SQqz5yypynOoDW2ySvL-Xh8y6DBdp6L10HGOAgcgP3nbRMSy4_FwLaGxIpgNvVRlFOLQfAT5TTwTo6tbVoMxGUs2rKfhJym2U8lNUJDdGE9BCp29vECfDFmC_RL70GVrPsSD1tDJfPGGkjiDVCdqRd04Mha0KqAwMYr2jLFmDooqLEYcOuF0W5wL5FV9zYZAsNDur2g92k7au2as_aMAspa8K3oPwrXNVikjGcKpZwf75PwppDfBTteHPu7twbgGE1g2zO9q82duTekFNklV2FLf3HcDOrzVkk8oR-ED4xZPCzxml-OzxgBhbyqKcvsnQoNGWbvThZoN8-rh-rUJIzbLMS6K_c8MBaBttkgx3IREjPn8h5aRXpYDEwPEUFX9sJyGYhi7QO95QuhEiDEcoCb43gWQ3nNXz8Cz_tugXBtUWrDPER5YU7X_vZh1sChPTylGtOdcI2l4nIAyYxf8zLAsqW0Ec=w420-h290-no", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm0607Eq4b = scmTeamsNbr;
scmTeams[scm0607Eq4b] = { Saison: "2006-2007", Name: "SC Mariners 4", Event: "Saison 2006-2007", src: "https://lh3.googleusercontent.com/hzc9B2SnFZlePoEDCmA0-pJ4O63Bzr6VcBtc46X6fSINgXBOHw3naSpYPzZDlj5-Z8supvGYm1AxkqrTr3FIxXMrWRtbeAPAmiIIOV44uzGNSxpsiBk9IoY8YE-rL2qaV4lqRG6HavAw--7HQ95GZtBV0PBYaG3kTB2fXVd_FIpXiNyXivZjrOSHosPNZdvR_Z8uFHmg7PBIOaH-KOKCEWkYyW51tls_KqUUsAvnlr6fy9PSZQlfvkQq0QuZwl-5yzS-MBw6fIYhYBWwmuTO6_FavmCrNLcAJ2kJX_mriRBU1ELQxMId3GOWACNLDKiXj838XHLGq8TNt3cHqtxIG5F_7pE5p6K4-yE0KxEx17IFjxo9v9mUn49LNebRO32iMzp3IIgf1dbL8Cg6XIZ42mMVW4oKvYEA3bwf39cZzj_kM7Ng5H-xPknBpH5BvF2akCgLMvD1F4pfDHVgFeI9wyqcdzSp1zNCfWvjlM74R6uliH0aOQgmrxwHwps4fwIxCNK_O9i-JiK5Cpj5k3usO2FkQNkFQi8VHaKIC9f_3l2qBjqhUJb2TZTJrYXAF-v1WE1WPNQHNv9Vk-D1dOSupHm1Zzznm38=w399-h355-no", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm0607Eq6 = scmTeamsNbr;
scmTeams[scm0607Eq6] = { Saison: "2006-2007", Name: "SC Mariners 6", Event: "Saison 2006-2007", src: "https://lh3.googleusercontent.com/oOPhGwtTky5fXuOMDUf5_YsR-t9Ah4x-lczTGJTipLm-0_LWfSXZKceZNda7dJdXTZBBLgG0wsZSyJqXENvgZe4dPHE8VAHGOfWPofiS4yGer2ujN0zlD9p_3WIT2tRaxLyTBR1KpjBGoEOMJ1iKKbNwhjD7-mXeyaRPVm3z3JWtXLDAQQAG0dAnhC3wc9BqsOP5cWjUkjM_c6IVUXgGBL6eyiGy7SK1xl-gUiSa2fky-zjHus_rOucOSCklwzkFzw8-M9ASy-rBg3kysNJ0ph0jPST8p9zbqduFLHRYiUgpMhTtR5wxecz7cHrKacSzdRh4_KKnciXN2GVZaNKUowuC6MTggmlY6KI97K4N8q8qr-EDPJZr1K7QEiMtyHCRKGmWWSiOem4wShejJHgNGsz9O2N0TjccpSlC9GYiVSIAMPOSIIDCRbnyWdb7dmwJkDMaXitxYkQNQj8QaWdFH7MXbeZ-S5tnparJ0WxvehtLx7bTxBGPqJ807WKF5iK6eE1-fk0ddF9Myv44b2mjNiPoeFi549r2lFs_A-eKFvTMJZJGjAWDmHPGm12CjZRy62XMY-E3kIbckuXtFZgRtyAi--36__Q=w390-h355-no", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmIta07 = scmTeamsNbr;
scmTeams[scmIta07] = { Saison: "2006-2007", Name: "Marinieri", Event: "Eurotorneo 2007 (ITA)", src: "https://lh3.googleusercontent.com/-J9QqNCJn2lQ/U58sz6JCFfI/AAAAAAAABPQ/g3P-jGg3NWo/s576-Ic42/Marinieri2007.JPG", width: 400, target: "_blank", texte: "Nos Marinieri", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

// 2005-2006
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scm0506Eq2 = scmTeamsNbr;
scmTeams[scm0506Eq2] = { Saison: "2005-2006", Name: "SC Mariners 2", Event: "Saison 2005-2006", src: "https://lh3.googleusercontent.com/-a94tDfFoQ6U/VdCtkPCKXuI/AAAAAAAABv4/Nm_LQuv66jk/s640-Ic42/2005-2006%252520-%252520SC%252520Mariners%252520B.jpg", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm0506Eq5a = scmTeamsNbr;
scmTeams[scm0506Eq5a] = { Saison: "2005-2006", Name: "SC Mariners 5", Event: "Saison 2005-2006", src: "https://lh3.googleusercontent.com/nnURG9KKAKJ0OP3SWl_0x6oMRU2N28rJ71jg7XbMFEASI4G6GLGWlFEgzhFe0hte21Eq-cvFwOUPorpWzvqEc3OsplxfT_N1sW_9dNpCqlJTxPK5EQEEERRtujPpGnxpMrYRxuxuW43nJf8xhCHEdSBJCmzGZmtbi8Ho2L6ZdQaIyJsrf19Qak7BuS6MsTfVa8Cg3tg24mo8RvyPazny4Ek5CdgZMOLN8Duzm65jzalebYL9V6KQPNJqolSbJEfsadbMRdok_rt7bKhvIxbwlMHZnGvLX648hP6DMLd3zD9jMqC9huZooS7ZQGrYpLmXLQc4HOO2AR2O6_UPdnXQPnf884uUiEfYCa8X5h3p4bs-awBG4Huav_QM6RNtDEweusDpJA--x-mwOx1hcM99FoF1PDMq5auIFlMeME25HuzP0D3Au4gGhLITnU42WBrjrJjd4AOiMp52RoWEakV_WR2tm7Jnrca-B8B7rz0SW9BHiv0RbYywE92EUI3oRhwd6_Ie9KRan7Ttv2eGg7IUu0K5UnLCgpbGWZwW2bk1J0Hnd340omnrAqT6uwwp95h8WrcDa7b7K896nW0JmTzmIER-EH0VoIc=w473-h355-no", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm0506Eq5b = scmTeamsNbr;
scmTeams[scm0506Eq5b] = { Saison: "2005-2006", Name: "SC Mariners 5", Event: "Saison 2005-2006", src: "https://lh3.googleusercontent.com/wKwdKWvxHEEPc3MLRgZpalxUf2t_p0Pp5QlL8VYICUGYQRqGjoE0vt58N74O3tqoH8tjCm3cptaIgZQRf9Z6TSzPwTiJe5GLnFpm5ifsfC_MfQ-tACVuPXBLRIvfiPHFIyHGKmI_XmoPmgT10hvg86hC1tnaLMWQ-s9HMW-QELHAg5UjlbfWvfrsqn0y7W0cLHSRQxUYv7Iha-OXFie2cJStWSPV3DtVHkEhG6i9Cc5Gt9QmZCCQTxK58dcvtGyWTibwoZWUaA6FZN4WYQl4VOw94EH2u3T4HIPdxdJ9OkJAgrYS2OymsGDoIwJTD-tQOGLc6ewzluwpmDnPI62BHi0F6AxG9c16V6EMbsan36s4b_pxd0o6urFXpQpBtjAMIl07XIeibo3UIu0fb19oDJDcpBjMWijTV-0FO9sGaO65Mdk1guoauBmXexLJ7313N-K9RMF77lRIV_cTjAo4zyJGIKCOAOEiHFgbJ-zjpMHjYKxBPv0upUsfdp3mGbVZI2zmFmM2KdfPDQCYF-yFJzuZKN0W2qLetkVxlH66mU9fHgF6JKCseqDfVFTqEIv7bnSTLgPaZM_Xut___eJP0kwt1x3LaW8=w473-h355-no", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };


// 2004-2005
// *********

scmTeamsNbr = scmTeamsNbr + 1;
var scm0405Eq2 = scmTeamsNbr;
scmTeams[scm0405Eq2] = { Saison: "2004-2005", Name: "SC Mariners 2", Event: "Saison 2004-2005", src: "https://lh3.googleusercontent.com/kimJJaBT9u5rV7Rrd0TW1dEYFoCGaQmYJ9AvXbJNiBccN6BJuOUL43yixMBLb1EL4_lWNp-Owy62kLiBR3p4_v5K6DcomzhZTIXphMhz9i_gJ2WUAG517fVP7mj1LArTq2k9MOwNRQEPMH72Wvdv5Aus6eeLs75qTCbA_2nFRURC8NQXE0QyHlkP10JWhc20feuOtl-x_ctLmrNvjy095sRSLmpwGJ7EUkKle_3irAfaVKoHfXPOaKfdEHcgsUw03LRLcOwrG_h4ruL2YRVxqJ39_PdNl4-faKU7LTE7EvrBw3v1q-3oy9k7faLO9-5B8RtT55HRuaco4diU03qUCH1C_5ZLvgN__56kvnCYlOJlZUind2tVmtwRMTwFh7Tbu3H4fS21sgifiOfSTM-rBC5By1mG4EAjXPZBP7NhvPTzvs09zNHzcPkoAh53HQE_6DpF7dxsZAS8nRvLwtI2nKDDmepPuslzCF01rXzXmzY_VuHjvMigaEzNZyuq6bAHqmXpxJ5oqGoTCEfyHKokBLhSa3IxYkhlJ41N2Wb3x_j2QsR3KWt4NuZc81UY2K_W-r3M-h8wEfSO7Qt_T1Adap8QyFMS7y8=w487-h355-no", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm0405Eq6 = scmTeamsNbr;
scmTeams[scm0405Eq6] = { Saison: "2004-2005", Name: "SC Mariners 6", Event: "Saison 2004-2005", src: "https://lh3.googleusercontent.com/E017mu2vCiNKA1rEgks_aV8J6pkeEy_1GCdwML0pTAlbb8pGUHJxUDMW3LyhlmzlM5kHztbJgwo328-fqFCwpOVFe_kskGJ9X7Z3KH7tigGdmZ-Zh92D4ZwYEM7DutE-GBmfSWKOK0Xcsb58jRA9kmfOgizLDNkWO-eVS4IQOFLqp-u1AehYQgSjYScN061-2HWR4Dkkg2RyqU4jcznZJ3PupS-i1BVWVHiJ9kVdc1tS-Df-lUVASxKgaPXbhd8Dlm4bbbRV_my7sPgNZ0YrQDivG5k9G6b-Z2akLm-EJSAPflIZLadE810VM4NbucpkqP9MUn2GboAx_ei8CvrBuBDB45XHMH1-6oV_HpCIKmdIFoipwKUGO06ur8GMyZNm5ppMvwAsuIuSC7rCn99VX3Wg5UOEoTnLu2CHFuFraZ5kDU0Y6Vrwcutm7hG8YKwq45mX5_SxPUm4PifCZtiGRIJ-Jtgro2eb9Y4h2qU9sH477kW5E-julUMUxw663M1KDIpWeVqgwUggdY2C_1f-798y-ADL_dy5qkZ83D0Ri1No0Dm2XXHbyiDOzfrh5kZ0-Uk9K8P-GbBYrJbFuJ7zpmVso5qu7X8=w360-h355-no", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal05Eq3 = scmTeamsNbr;
scmTeams[scmChal05Eq3] = { Saison: "2004-2005", Name: "SC Mariners 3", Event: "Challenge Mariners 2005", src: "https://lh3.googleusercontent.com/4UWXj7ExOERAbk5eFNvFAABoQGoUTYFbiZtZTIAmZQTFqelIJX2ZBDie5n3j1wv9_WU0dpoCR66hpFsOfoRVYQxr5LSAN6X4QmVwDN6bMxd1hnJeceo00Atvp9V-7PwMkqoJUbe9l7MNNMXsqMroJcXUHah-ZOtG8l6yH4vmEnd_tb5cAuC8RWHHAmjgpXRjkEt0cPhGovyB6Ip0hdoNIjhHCrBlve4IfGEna9IlkAv5vZ2MgDCALfOYPrJwRpfcTR0UPKIL6LAvxrz0n_83Y8jr43e2TLKx5JmDMDHt6mt6K88GFHQFoezYsXxLw6QukOMa6qdx88Fi_Dm0h-GMCGcsE2xA5mS6ks6cyaOcbfqfs3B6ztqSXSU0dgVaHbkK81CbnLtPYBmGZ7V3Ewn2FUM0ALodkQaumvB6SfpOIjJGftWpaCC-q_VoGad-x-mahI5tlwJ0iTPzGc3b2Jtgyavw70QbfXqAyZRc7XvPkAbOWrV3MoyKQRdYHTohkHRxpDb1SFIyntFuyUBMpRFuGsAMvfNKww0Q2-lKqJYi3UgAOl2aOXr93zw4siMAD4_w8zgZ9L9ya-J8Y5HRMiJ83i2D_WjPQc0=w442-h355-no", width: 400, target: "_blank", texte: "Nos Marins", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm0405Bar = scmTeamsNbr;
scmTeams[scm0405Bar] = { Saison: "2004-2005", Name: "SC Mariners", Event: "Tournoi Bardot 2005", src: "https://lh3.googleusercontent.com/Ol5y-__NfLbEtsnxP_AlfrSSj324r7mLxapMt-h9AQr1QGJCFHh-cXAEPs7Hljp3EIqHJnyo5rfvKAq6cAjnH3N0NbV5orpvXAyaeiQFtXrzkHbVKygB5lhflQhAWSETbnJrnGwu7TVNOJZqDC7Vj_VaosUFanP7amzYDO9Wl9QargyZBeZYbUul5ItrZwnpe_AtHjI-HjDRf-d8w96E9GYbsSTWErKeAkzZLfAv3dbzir8zn0hs1pf9cnyyfBaOU5Mdi0RpJisGpATrorrp6GO1gN2W63s69cmKWCcf1NxBRu4dSQvfiFiY3QGb6LKHUDy_T-fmnIKCYpRZ_FUATkp_w58KEpvT8edctt0efbqfDciIGEsKsfNPv17jELMA8wuPlk6_iLrxF8Nw9QdEdZwz_liTjEzEJ9A_QksfZqgjOTYfRdxYPRqfDQqM_P3jiqMRD2LIdR05zAGkyeHhhq2O0PAikOvVnAZ0KotydzZ_S7LItGO8NegZB9xm9rUgFlf2U26tIIeQE9P9o_hPeKEvtRQcxqcfMWv6tjfcmuqJU5wc54mhajkmbDom3VrNbNCqP5ywQgscxWsNY7UlbgLngm8wJWE=w510-h355-no", width: 400, target: "_blank", texte: "Nos Marins", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm0405ZVKEqE = scmTeamsNbr;
scmTeams[scm0405ZVKEqE] = { Saison: "2004-2005", Name: "SC Mariners 5", Event: "Tournoi ZVK 2005", src: "https://lh3.googleusercontent.com/PAooRF6xCk8nu7CFAI_WNIPhoFjC961nxdhjD4RIGC2Xtnps25ckaQPztq2qFRWZsd_5xvAuUNEZEZ00Gs2fQ1Z7wtvQ3yixsNURGMc0cGmDyt06pMbZUBOlny83hJJ53ryzX97uA8sXkwQu8GS3LvLfRpzDNNk7L2rEx85curotMDUFBOA7df8X--4w0GdZF4ING1ipuWjgAwHsm2UueBgo57BF9TWMZkSN7XVpLr9P5VCe_jipEYim_3KwIMLtSLPoTtU5LIbrX-N8VvNsDigzk5zMv8V0VqRP8R_mniinwhAVnmCYNZwb3aoYrTkDO1-voWTbvYulEIY3Ngaj6F-NafXV41y3XXX_XqHyzjSxbEpnti88L8mLdTVZP8H74dZPikmu7wY3f3v8_15Bb_aUiLYzvFDXxBuRBj5f7AcszfXIsmPdJ3wgBmpS3iP0nUVAAFEbLGAWHx-G3XW0rgOvlvx9tpKlHxbM0JR-EZnX7Fa4NWhGBVNevayCSgjIdkxxD2AGwUx74ke-wRleG6k6CEW5LyjhBOSa3SO3qEGfagcHdvaNrLt08KH3exmJNY3IWGoM9mwmh6s8YBCh_SRXIsR995c=w424-h355-no", width: 400, target: "_blank", texte: "Nos Marins", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };


// 2003-2004
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scm0304Eq1 = scmTeamsNbr;
scmTeams[scm0304Eq1] = { Saison: "2003-2004", Name: "SC Mariners 1", Event: "Saison 2003-2004", src: "https://lh3.googleusercontent.com/zgxxuT-E8syDd9jetnDy34of4PDYqVbk9YTBD9NULaye8cszFHFjQLWTCOnwayeWO6T14saVqzl1vvlbWf477mKPoXTCsqVXbfACDW6PoEa1N_l1el5k0OdwBjZJQHtJZaJH9P8WS8DHGKcMWqYv6Ycia-SeBMgGlio1OFJ8kFRbSBtkRWBmSqdlESNT4mxPw2AQjtJuTPZ22WAUBXB32OI76UujVU--6z9yVDZrLqxStfWc_te5qOBR-AfwCZpW3BEAhQ6Jl8VmElRz38CF4Qqy_dkFBW_NDn8Y5BKRAmpavCJs06skUKTKu14VWmBAnGV6dmPJELzQGDHw5e3iDlrLu7bmz4zGvHsuqcCnBLZyMelfpF1APx_hwNux2PM3WtEIzD1-EozGYmezxtHtM4xO3RMoIGzaas7cnzFuaH3llICG8YE9blOx8Rq0Np6UIBFU34cf9LhUxeNyJclYLn4nC9A9OIauTRUuHmpp-NKgzpzOHtwXLaLRhY4265LjNERA5t5NRUa3sphgWn3ugkO5bphSiBUu84PdUtr7w6WgtX98gq4ySzOnKzhwr7je0c-XBrK9YbV-pPWua0gALptlWGdm-WA=w403-h355-no", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm0304Eq1b = scmTeamsNbr;
scmTeams[scm0304Eq1b] = { Saison: "2003-2004", Name: "SC Mariners 1", Event: "Saison 2003-2004", src: "https://lh3.googleusercontent.com/qj1YNI01hcsBjirb4m2JmwtQK8Mpl1Px92SpDQ1Mls2KKCcVJQlnZ9tNQ37C74DEjMSNnsJXzif4Z-VlL6rssBSPHIlsOIDFMo3xAlu0KZex48C4wtT03pq-21j6RAFjhvYJOemiqJmt1SHPm898X4BeTcXJBF9C80cselxtMtCdk23aBUP5lLQcL-cYXq2pOrUQSbznjCZjGQMHM2fJZX9pUn2X-OngKcLAs5PHdCeP9AU2maP5R0pCvFMaEcWH2BqJ6XHwtfDHs9-5O1mSKda5WK-mm_ebq1eNrzWfnd7c7IPKuZU1oAng5s_lxCfApJ6mT8rUm9fMX5DwbRu7ez0aY-9yWryMNZfoAqTeK690Sc0h2ecWeWGnoFGR0PYOxWILLdjVbpiRoGGNu0szaN12DclepN8YVKaKxKzlB4vui2FmoWmY2Aea8UB82py8f5vX08C-qLJC_Uv8DVEl-kzveMB-0eJ5PGxfvFVzKp_L5Tr76Sheki7RJ8fGj-33JkxPbgImPRzM508MsMn44_ddU5da94VOK4kZINz94NVokD4I6UjkPzQO1wapKJum-ozjJAvLkwHqNo6k4YTuc6WGSU65l6s=w467-h355-no", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm0304Eq5 = scmTeamsNbr;
scmTeams[scm0304Eq5] = { Saison: "2003-2004", Name: "SC Mariners 5", Event: "Saison 2003-2004", src: "https://lh3.googleusercontent.com/Y3y1jOHE_jnM-msCFMP0bqs0miWdILGiFL1w7Fr-c-suT15bRgVMH7U3Q0IeHtnZPBVFu8O3acMJcotba3ERECelwy8PZqUi35Tjjz2oy0_WTJueRBLlsfsBVJphHxx-tnBQXg8u_QZ6zR8hI0UKz7qANunXQUXyLxkVdJn6DFHJRoQTXxzhaDSFlO3hcTencPdXFhQOLfx41D2HQ2YcbohcvxbAHxZXM02Adle4oY8UOrmuRJy7WHv7hcA7URKRXBApGbFHiIdX680AOCU_M3RvBKK9l1rb1zlD6Hqgz6SdHzzHxBUMw2dRtF1Ik5m2he9P_mfhe2wvWhXb_q5rpiIUcrXnvYVcx_mNi0QKVfECT1kpu0NBWwlFAFiV8Q-buYVnnm-r_kCjKJx-Ih6KlUnhP-FptdM7Vvov5qmInonKHnBxwvGm82OWri-gjnjAYEclyDvpPg4jnltp19nT0jXgZx1zRRVfV1lZg4SRhM7TQtz-mOF9brSruUs6Vl28hDMTOB93c74DB12IYl7_8iY5rQ6JOVnVROOA1C1m-RBxULuvYgUy7voKXW75kLXlQkO-LhTeDMBl8JWYiZryCBYMom_pOgU=w474-h355-no", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal04Eq3 = scmTeamsNbr;
scmTeams[scmChal04Eq3] = { Saison: "2003-2004", Name: "SC Mariners 3", Event: "Challenge Mariners 2004", src: "https://lh3.googleusercontent.com/-1Lj020zKkow/VU8iYKYPX2I/AAAAAAAABPQ/6oVC2D7Kapg/s640-Ic42/2003-2004%252520-%252520SC%252520Mariners%252520C.png", width: 400, target: "_blank", texte: "Nos Marins", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal04Eq4 = scmTeamsNbr;
scmTeams[scmChal04Eq4] = { Saison: "2003-2004", Name: "SC Mariners 4", Event: "Challenge Mariners 2004", src: "https://lh3.googleusercontent.com/-XYfLKDi9s1M/VU8iV5A3CYI/AAAAAAAABPQ/jE1SVLlKijw/s720-Ic42/2003-2004%252520-%252520SC%252520Mariners%252520D.png", width: 400, target: "_blank", texte: "Nos Marins", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };


scmTeamsNbr = scmTeamsNbr + 1;
var scmChal04Nap = scmTeamsNbr;
scmTeams[scmChal04Nap] = { Saison: "2003-2004", Name: "Napoli Schaerbeek", Event: "Challenge Mariners 2004", src: "https://lh3.googleusercontent.com/-xQvxbKlhbxI/VU9rsa95HEI/AAAAAAAABPQ/XEj_PNa23a8/s640-Ic42/2003-2004%252520-%252520Napoli%252520Schaerbeek.png", width: 400, target: "_blank", texte: "Nos Marins et Napoli Schaerbeek", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm0304ZVK = scmTeamsNbr;
scmTeams[scm0304ZVK] = { Saison: "2003-2004", Name: "SC Mariners", Event: "Tournoi ZVK Oudergem 2004", src: "https://lh3.googleusercontent.com/ZWfGIiKMrnuYkJ-VOekcjuAPiaTqeDHiFhhSBVdKUovesmQTd8Wxc8PuAbPcJcF4IFYZicDCltCtiC-aFj-HGh7wUrJ6mpBBm_aTIpLQO7bTXQCPqcBkmH2_s-7ryMrl7ysB0B8V1U3SnLSskr3nVNtZODJGq3C_L7QyVqhwnYWzQiVDoBQDOmDmsKF9XcyE8VXB5wnClZHDuVTpIwhV0tR15P-_YoJ7zqDk1Sl5ijjeWn6I1pTQeiQsaORmu6lLZBBpjAVoYKKPhEAgnYC18g82E2CYAYAnzj5xtEMbOmlQ--if06ZGysPMDAPH-AuE-wVGAYgLUBlgbHSkk4UhiYM4XtqfC1OdYYEH420PAiwY0BPF_l8TvLoJwN8qaHIdHGBM0XhsFMkPgt4aqBflhIEewUyVMmAN9FUJzUtUadCLy2m8T61azCBseEYkCrtZn84c4I_YCoJzbba1vYCxjUifqcbhUYzcscofZrEin4X_JRtaicmuuyqlfEh3Q6z3l4ZML7W8qZfS0yyJCAAEgypSXmI2PQUN5sWmhzh6zaAFGCli5CfbwoDaN35FyqQiEf2ZI3bjbp4YRm1a6rD_tiDv1bbefrE=w488-h355-no", width: 400, target: "_blank", texte: "Nos Marins", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm0304ZVKF = scmTeamsNbr;
scmTeams[scm0304ZVKF] = { Saison: "2003-2004", Name: "SC Mariners", Event: "Tournoi ZVK Oudergem 2004", src: "https://lh3.googleusercontent.com/ypnulXdoPapPixxDOKORIPvRV5sJl8MXJCFXe9GDI235ghXiQcWoEk2JNVqJOHVqrxCrsFVsFeTBk-W8kqd-dwdN6LYhb7R-VKg1zXJyvP-5SZrAGvc_B42IVkpLQ6-GzXzPjYoR5FR9PkpAr33K01X81rTR_HFy62wwV5BWSF2miBoan-Rcc6irP2-tXg0ITLZ8AMwQYiCbgBOUG8TpcD_-xxhweS6BF6erXSSSOLe_SY1ae6i4skQR8_Jck1LwMWLPaT7q8kyQQJL4C9f3XacDJ177UtYgCtyiuymhc7cnrW1LdaURdO9r0UEGBOCL8u7h09hLrO1qVFqh308Q9ONl-uS5sfFx250XXtb5gHqMfUH17NLlTfJS44OJFyQo8CGHQlHeQ6ZvLF7dHysAcbMRe0KNBVcOIdwOTL-iQIN09yH4zhfa5hkaDJPctlj7IcWJ8i9wty8Nm2EFZHJvradBGEXMVH6XgaPNkuCJLk8cLZX2FqdRafVoSWgieClMqRR_3hGJ0VaWFSj1tQobWyEURaoMxAVWR4MyT29W56pg_PdoNUgLTXm8GzMNTMMR92yEbvVjuJ51RdoOF7Q5zl0R26fY6fY=w709-h426-no", width: 400, target: "_blank", texte: "Nos Marins et FC VMJ / AJM", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };




// 2002-2003
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scm0203Eq1a = scmTeamsNbr;
scmTeams[scm0203Eq1a] = { Saison: "2002-2003", Name: "SC Mariners 1", Event: "Saison 2002-2003", src: "https://lh3.googleusercontent.com/-AA6K5hEeRuU/VU8702OvKiI/AAAAAAAABPQ/JkXgsj-KI0U/s646-Ic42/2002-2003%252520-%252520SC%252520Mariners%252520A.png", width: 400, target: "_blank", texte: "3ème Provinciale C", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm0203Eq1b = scmTeamsNbr;
scmTeams[scm0203Eq1b] = { Saison: "2002-2003", Name: "SC Mariners 1", Event: "Saison 2002-2003", src: "https://lh3.googleusercontent.com/-cFmav74Xenw/VU87106obRI/AAAAAAAABPQ/VZ_5RcDV0RA/s720-Ic42/2002-2003%252520-%252520SC%252520Mariners%252520A_2.png", width: 400, target: "_blank", texte: "3ème Provinciale C", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm0203Eq1c = scmTeamsNbr;
scmTeams[scm0203Eq1c] = { Saison: "2002-2003", Name: "SC Mariners 1", Event: "Saison 2002-2003", src: "https://lh3.googleusercontent.com/SmbId6yEbXMTYJnZnpGm1xG45d9ZL8rx2dWqvgGI3eefmGbvyERKmOfsWsaj0BciHG_YnsKlhBJH3lUbaGBPiEu-6SiFr_w-lw5pXVEqNip-GyuKbsQ6TuckrfMXLmJYAX37UkagGVEIndoIK8COkwOe1d-Tf-honu2b_qzOsIHhnWFYeVF03Xj5QJHhBb13BCnpZtjggiNSOVvVneehUUFTG31g5MMi9AsglOn01Ft_A7MM4cgavAI_QKVLnQx-ZgyJiOq9p3R9ikYnB1Fs2eymttg23JYZy2dKT71KA_aOW9wc3YBGOWrLi2DIsWX72vh1ZDIwcWpAEEiW9vmuCVZzaf18YlVnHizA0GkwBxYJtppBSjk_8UjBLNchIJonr90hiIBALK3EQhszrfbYgyw9aXCR-Yv9ht1UDfq6JAayUYIr6Mte22o73UxaC2lTuxT1uagzXCmAHgcO1i5i1oaFSZ6PHffL35ZFc7eo5RHbT82hDJ16ivKaqPgDMF3i3wmYUd7cE8eHpHwoli399PUDUuFTOYuZwmeRYyOYywIa4ftzNzCturyfQ4v3EnFHisDSjLL8u3Fsy-pFZqqcgZshivVN6no=w394-h314-no", width: 400, target: "_blank", texte: "3ème Provinciale C", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };



scmTeamsNbr = scmTeamsNbr + 1;
var scm0203Eq3 = scmTeamsNbr;
scmTeams[scm0203Eq3] = { Saison: "2002-2003", Name: "SC Mariners 3", Event: "Saison 2002-2003", src: "https://lh3.googleusercontent.com/-Ba6bcqmuBYs/VU84aJcHtFI/AAAAAAAABPQ/nk73s66Gfuk/s512-Ic42/2002-2003%252520-%252520SC%252520Mariners%252520C.png", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm0203ZVK = scmTeamsNbr;
scmTeams[scm0203ZVK] = { Saison: "2002-2003", Name: "SC Mariners", Event: "Tournoi ZVK Oudergem 2003", src: "https://lh3.googleusercontent.com/-HmiXH-w7CFc/VU9BkO6dtpI/AAAAAAAABPQ/KfDWLisLZpI/s800-Ic42/2002-2003%252520-%252520SC%252520Mariners.png", width: 400, target: "_blank", texte: "Nos Marins", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

// 2001-2002
// *********

scmTeamsNbr = scmTeamsNbr + 1;
var scm0102Eq1 = scmTeamsNbr;
scmTeams[scm0102Eq1] = { Saison: "2001-2002", Name: "SC Mariners 1", Event: "Saison 2001-2002", src: "https://lh3.googleusercontent.com/--pTUVWPpNIc/VdhIJj5r2eI/AAAAAAAAB_w/X19PsETFxd4/s720-Ic42/2001-2002%2520-%2520SC%2520Mariners%2520A.jpg", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm0102Eq2a = scmTeamsNbr;
scmTeams[scm0102Eq2a] = { Saison: "2001-2002", Name: "SC Mariners 2", Event: "Saison 2001-2002", src: "https://lh3.googleusercontent.com/-8k82DoWUB68/VU9augZtPlI/AAAAAAAABPQ/aRv0Wt2dPX8/s640-Ic42/2001-2002%252520-%252520SC%252520Mariners%252520B.png", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm0102Eq2b = scmTeamsNbr;
scmTeams[scm0102Eq2b] = { Saison: "2001-2002", Name: "SC Mariners 2", Event: "Saison 2001-2002", src: "https://lh3.googleusercontent.com/-h5cttU3vAok/VdhLZqyeTFI/AAAAAAAACA0/KPlsVAqIuUo/s640-Ic42/2001-2002%252520-%252520SC%252520Mariners%252520B.jpg", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm0102Eq3 = scmTeamsNbr;
scmTeams[scm0102Eq3] = { Saison: "2001-2002", Name: "SC Mariners 3", Event: "Saison 2001-2002", src: "https://lh3.googleusercontent.com/-NFvTPWLsma4/VdEPSfWZh6I/AAAAAAAABzE/48X6hrehZMY/s640-Ic42/Img00014.jpg", width: 400, target: "_blank", texte: "Championnat 2001-2002", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm0102Eq4 = scmTeamsNbr;
scmTeams[scm0102Eq4] = { Saison: "2001-2002", Name: "SC Mariners 4", Event: "Saison 2001-2002", src: "https://lh3.googleusercontent.com/-B3ZP_RhMc3o/VU9irskigyI/AAAAAAAABPQ/MePsZ-QhUwQ/s720-Ic42/2001-2002%252520-%252520SC%252520Mariners%252520D.png", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal02Eq4 = scmTeamsNbr;
scmTeams[scmChal02Eq4] = { Saison: "2001-2002", Name: "SC Mariners 4", Event: "Challenge Mariners 2002", src: "https://lh3.googleusercontent.com/zLWeL3eIOqmkLFMZ_HGfLSfaLQ9x3GlXGfDmsbBzKiF4Ct7DdzBL4AIEE1AGyg5H2m57fIP7c-MvHoNZinqBl08IM5i27syVz2GMUn4-G8XsYwDLtwOGyw4lov3g6Seb05jYHPoRe-EB2ILK4eWUN3sQ1Pbs3jPe6SepPftTSwF1IVRh1NHeNhQXBoGyd99qo-Toi_9GvExKIDQFefFGywvpr6V19mn5tHf2z5LpJY3St376-qeEaN6QKmcywQE_KPwHNemSjJ9_VbBCcAB7SRMuIfp-Lj168F3TnsPtz7vZPjYHozrmJPYEYmRt5sxf7mFZjGfsEOkqp3cjP0B0HQ_MRqcXwjWfHC4YGMzYRsY7PcILqvufC8_JTeaMlTz-UyqIREzW6s7-JCOz4Re5jO4jEACi4ResvkQnj8yqjoT0fLxP8_fTGRTNTHcuMEXrhW13LQE_K9nYIu7qrQhjtaRysoCsVSz9afq4k0H0suQ9fbg26si0loEayIoaUeaO79yFYUTjpJKM_AapgNaux25uEKdD9_luN2foIhexZPNyo4f2nKCY47AiQY-2UeurFK6He2qw3UO3TDCEL4_eBmS04JS3fwE=w522-h355-no", width: 400, target: "_blank", texte: "Nos Marins", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm0102ZVK = scmTeamsNbr;
scmTeams[scm0102ZVK] = { Saison: "2001-2002", Name: "SC Mariners", Event: "Tournoi ZVK Oudergem 2002", src: "https://lh3.googleusercontent.com/-xlRglZvbvKU/VdhJ-ABH8xI/AAAAAAAACAQ/or3drslV3P0/s800-Ic42/Mariners%252520-%252520ZVK%2525202002.jpg", width: 400, target: "_blank", texte: "Nos Marins", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

// 2000-2001
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scm0001Eq1 = scmTeamsNbr;
scmTeams[scm0001Eq1] = { Saison: "2000-2001", Name: "SC Mariners 1", Event: "Saison 2000-2001", src: "https://lh3.googleusercontent.com/-c-4c1LhvqqE/VU9pKXkJlDI/AAAAAAAABPQ/skuMsmLGpIQ/s640-Ic42/2000-2001%252520-%252520SC%252520Mariners%252520A.png", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal01Dyna = scmTeamsNbr;
scmTeams[scmChal01Dyna] = { Saison: "2000-2001", Name: "Dynamo Mariners", Event: "Challenge Mariners 2001", src: "https://lh3.googleusercontent.com/-s43dY0SXfrw/VU9ygvxZPEI/AAAAAAAABPQ/vVx4LoJ_LFc/s640-Ic42/2000-2001%252520-%252520Dynamo%252520Mariners.png", width: 400, target: "_blank", texte: "Nos Marins et Dynamo Max", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal01Dynb = scmTeamsNbr;
scmTeams[scmChal01Dynb] = { Saison: "2000-2001", Name: "Dynamo Mariners", Event: "Challenge Mariners 2001", src: "https://lh3.googleusercontent.com/-TxnwO-xTNRA/VdhDtHBfPyI/AAAAAAAAB-8/xk5YvqWbKXY/s651-Ic42/2000-2001%252520-%252520Dynamo%252520Mariners.jpg", width: 400, target: "_blank", texte: "Nos Marins et Dynamo Max", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

// 1999-2000
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scmChal00Eq1 = scmTeamsNbr;
scmTeams[scmChal00Eq1] = { Saison: "1999-2000", Name: "SC Mariners", Event: "Challenge Mariners 2000", src: "https://lh3.googleusercontent.com/-spvyszAnJ1s/VdOqVksQfQI/AAAAAAAAB-I/250X4nhZGEs/s720-Ic42/1999-2000%252520-%252520SC%252520Mariners.jpg", width: 400, target: "_blank", texte: "Nos Marins", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

// 1998-1999
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scmChal99Eq1a = scmTeamsNbr;
scmTeams[scmChal99Eq1a] = { Saison: "1998-1999", Name: "SC Mariners", Event: "Challenge Mariners 1999", src: "https://lh3.googleusercontent.com/-SWYxuhhw7M8/VdOnfcDYxsI/AAAAAAAAB9Q/j97K5SdfFus/s640-Ic42/1998-1999%252520Mariners%252520-%252520CH98.jpg", width: 400, target: "_blank", texte: "Nos Marins", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal99Eq1b = scmTeamsNbr;
scmTeams[scmChal99Eq1b] = { Saison: "1998-1999", Name: "SC Mariners", Event: "Challenge Mariners 1999", src: "https://lh3.googleusercontent.com/-1CFfWA1K8A4/VdOnffX6qfI/AAAAAAAAB9U/J1tw5voaZBU/s720-Ic42/1998-1999%252520Mariners%252520-%252520CH98_2.jpg", width: 400, target: "_blank", texte: "Nos Marins", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmChal99RUA = scmTeamsNbr;
scmTeams[scmChal99RUA] = { Saison: "1998-1999", Name: "Mariners RU Auderghem", Event: "Challenge Mariners 1999", src: "https://lh3.googleusercontent.com/-IRZOln90Ck4/VdOouYcY3xI/AAAAAAAAB9w/zgWzQ-tZBYo/s576-Ic42/1998-1999%252520Mariners%252520RU%252520Auderghem%252520-%252520CH99.jpg", width: 400, target: "_blank", texte: "Nos Marins et RU Auderghem", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmBYM99Dia = scmTeamsNbr;
scmTeams[scmBYM99Dia] = { Saison: "1998-1999", Name: "SC Mariners Diablotins", Event: "Brabant Young's Masters 1999", src: "https://lh3.googleusercontent.com/-AptkV41dntE/VdOZSEDGb7I/AAAAAAAAB7k/Dc2KRlevopc/s720-Ic42/1998-1999%252520Diablotins%252520-%252520BYM%252520-%252520191298.jpg", width: 400, target: "_blank", texte: "Nos Moussaillons", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmBYM99PMa = scmTeamsNbr;
scmTeams[scmBYM99PMa] = { Saison: "1998-1999", Name: "SC Mariners Préminimes A", Event: "Brabant Young's Masters 1999", src: "https://lh3.googleusercontent.com/-9DzJX5KlGWM/VdOe3JQJZrI/AAAAAAAAB78/Un8mmvvCeBs/s720-Ic42/1998-1999%252520Preminimes%252520A%252520-%252520BYM%252520-%252520191298.jpg", width: 400, target: "_blank", texte: "Nos Moussaillons", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmBYM99PMb = scmTeamsNbr;
scmTeams[scmBYM99PMb] = { Saison: "1998-1999", Name: "SC Mariners Préminimes B", Event: "Brabant Young's Masters 1999", src: "https://lh3.googleusercontent.com/-OCuefUUr8QI/VdOgJ2g4GgI/AAAAAAAAB8M/ytqr7o1HVa4/s720-Ic42/1998-1999%252520Preminimes%252520B%252520-%252520BYM%252520-%252520191298.jpg", width: 400, target: "_blank", texte: "Nos Moussaillons", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmBYM99PMc = scmTeamsNbr;
scmTeams[scmBYM99PMc] = { Saison: "1998-1999", Name: "SC Mariners Préminimes C", Event: "Brabant Young's Masters 1999", src: "https://lh3.googleusercontent.com/-nKhPrnrSwsU/VdOg3wExq9I/AAAAAAAAB8c/uem2Tg5-nmk/s720-Ic42/1998-1999%252520Preminimes%252520C%252520-%252520BYM%252520-%252520191298.jpg", width: 400, target: "_blank", texte: "Nos Moussaillons", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmBYM99Min = scmTeamsNbr;
scmTeams[scmBYM99Min] = { Saison: "1998-1999", Name: "SC Mariners Minimes", Event: "Brabant Young's Masters 1999", src: "https://lh3.googleusercontent.com/-O3cpddIFJEc/VdOhkzJT1GI/AAAAAAAAB8s/jyaPoWOVYq0/s720-Ic42/1998-1999%252520Minimes%252520-%252520BYM%252520-%252520191298.jpg", width: 400, target: "_blank", texte: "Nos Moussaillons", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmBody99PM = scmTeamsNbr;
scmTeams[scmBody99PM] = { Saison: "1998-1999", Name: "SC Mariners Préminimes", Event: "Challenge Body 1999", src: "https://lh3.googleusercontent.com/-9P4qtcAQ4gw/VU942mZyY7I/AAAAAAAABPQ/dnsibuhNyOk/s640-Ic42/1998-1999%252520-%252520SC%252520Mariners%252520Preminimes.png", width: 400, target: "_blank", texte: "Nos Moussaillons", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

// 1997-1998
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scmChal98Eq1 = scmTeamsNbr;
scmTeams[scmChal98Eq1] = { Saison: "1997-1998", Name: "SC Mariners", Event: "Challenge Mariners 1998", src: "https://lh3.googleusercontent.com/-TU8x6m6Xtss/VdOVeoGZ61I/AAAAAAAAB6w/DVceHJhvMMw/s720-Ic42/1997-1998%252520Mariners%252520-%252520CH98%252520-%2525203eme%252520place_ori.jpg", width: 400, target: "_blank", texte: "Nos Marins", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmBYM98Dia = scmTeamsNbr;
scmTeams[scmBYM98Dia] = { Saison: "1997-1998", Name: "SC Mariners Diablotins", Event: "Brabant Young's Masters 1998", src: "https://lh3.googleusercontent.com/-goiWSWlHHcc/VdONNDxPTGI/AAAAAAAAB50/AmemmEaxufE/s720-Ic42/1997-1998%252520Diablotins%252520-%252520BYM.jpg", width: 400, target: "_blank", texte: "Nos Moussaillons", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmBYM98PMa = scmTeamsNbr;
scmTeams[scmBYM98PMa] = { Saison: "1997-1998", Name: "SC Mariners Préminimes A", Event: "Brabant Young's Masters 1998", src: "https://lh3.googleusercontent.com/-XdHkP8_yWws/VdON8tAjXSI/AAAAAAAAB6E/9O4564_qOlo/s720-Ic42/1997-1998%252520Preminimes%252520A%252520-%252520BYM.jpg", width: 400, target: "_blank", texte: "Nos Moussaillons", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmBYM98PMb = scmTeamsNbr;
scmTeams[scmBYM98PMb] = { Saison: "1997-1998", Name: "SC Mariners Préminimes B", Event: "Brabant Young's Masters 1998", src: "https://lh3.googleusercontent.com/-EjAvep647k4/VdOO58iMgpI/AAAAAAAAB6Y/w0kaBbAouOI/s640-Ic42/1997-1998%252520Preminimes%252520B%252520-%252520BYM.jpg", width: 400, target: "_blank", texte: "Nos Moussaillons", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

// 1996-1997
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scmBYM97Dia = scmTeamsNbr;
scmTeams[scmBYM97Dia] = { Saison: "1996-1997", Name: "SC Mariners Diablotins", Event: "Brabant Young's Masters 1997", src: "https://lh3.googleusercontent.com/-YYppAk5n0z4/VdOKFiCbeFI/AAAAAAAAB5M/ht2G90nIzHk/s462-Ic42/1996-1997%252520Diablotins%252520-%252520BYM.jpg", width: 400, target: "_blank", texte: "Nos Moussaillons", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmBYM97PM = scmTeamsNbr;
scmTeams[scmBYM97PM] = { Saison: "1996-1997", Name: "SC Mariners Préminimes", Event: "Brabant Young's Masters 1997", src: "https://lh3.googleusercontent.com/-WjBveTyHbRg/VdOJKMBcNZI/AAAAAAAAB44/ZmeReICN5O0/s640-Ic42/1996-1997%252520Preminimes%252520-%252520BYM.jpg", width: 400, target: "_blank", texte: "Nos Moussaillons", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scmBYM97Min = scmTeamsNbr;
scmTeams[scmBYM97Min] = { Saison: "1996-1997", Name: "SC Mariners Minimes", Event: "Brabant Young's Masters 1997", src: "https://lh3.googleusercontent.com/-LGer2Q1kMXg/VdOLl6XcX5I/AAAAAAAAB5g/yRRDnP9Aiug/s640-Ic42/1996-1997%252520Minimes%252520-%252520BYM.jpg", width: 400, target: "_blank", texte: "Nos Moussaillons", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

// 1995-1996
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scmGrem96Eq1 = scmTeamsNbr;
scmTeams[scmGrem96Eq1] = { Saison: "1995-1996", Name: "SC Mariners", Event: "Challenge Gremlins 1996", src: "https://lh3.googleusercontent.com/-e2T3d_pl_uw/VdODPQn-0aI/AAAAAAAAB4U/gmy5Mt5s6F4/s640-Ic42/1995-1996%252520SCM%252520-%252520Challenge%252520Defosset%252520Gramlins%252520-%252520081995.jpg", width: 400, target: "_blank", texte: "Nos Marins", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

// 1994-1995
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scm9495Eq12 = scmTeamsNbr;
scmTeams[scm9495Eq12] = { Saison: "1994-1995", Name: "SC Mariners 1 et 2", Event: "Saison 1994-1995", src: "https://lh3.googleusercontent.com/-6xI36ry_hHM/VdOBKrylbiI/AAAAAAAAB4A/pBRGRrWUxe0/s912-Ic42/1994-1995%252520SC%252520Mariners%252520A-B.jpg", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

// 1993-1994
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scm9394Eq1 = scmTeamsNbr;
scmTeams[scm9394Eq1] = { Saison: "1993-1994", Name: "SC Mariners 1", Event: "Saison 1993-1994", src: "https://lh3.googleusercontent.com/-wErkV10hbhY/VdN-xCcI9GI/AAAAAAAAB3c/NspvbkRrzn8/s720-Ic42/1993-1994%252520SC%252520Mariners%252520A.jpg", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm9394Eq2 = scmTeamsNbr;
scmTeams[scm9394Eq2] = { Saison: "1993-1994", Name: "SC Mariners 2", Event: "Saison 1993-1994", src: "https://lh3.googleusercontent.com/-7flOVZRlvFo/VdN_iyWzk6I/AAAAAAAAB3s/JyW9Zj_CZ4g/s640-Ic42/1993-1994%252520SC%252520Mariners%252520B.jpg", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

// 1992-1993
// *********


// 1991-1992
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scm9192Eq1 = scmTeamsNbr;
scmTeams[scm9192Eq1] = { Saison: "1991-1992", Name: "SC Mariners 1", Event: "Saison 1991-1992", src: "https://lh3.googleusercontent.com/-10ZDLaQ2ZL4/VdN7nNyDrZI/AAAAAAAAB3I/bI5Cypac7r0/s640-Ic42/1991-1992%252520SC%252520Mariners%252520A.jpg", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

// 1990-1991
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scm9091Eq1 = scmTeamsNbr;
scmTeams[scm9091Eq1] = { Saison: "1990-1991", Name: "SC Mariners 1", Event: "Saison 1990-1991", src: "https://lh3.googleusercontent.com/-7IXeA9sR2Bo/VdN57iLl3CI/AAAAAAAAB2k/Herf5yPYF8o/s640-Ic42/1990-1991%252520SC%252520Mariners.jpg", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

// 1989-1990
// *********

// 1988-1989
// *********

// 1987-1988
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scm8788Sco = scmTeamsNbr;
scmTeams[scm8788Sco] = { Saison: "1987-1988", Name: "SC Mariners Scolaires", Event: "Saison 1987-1988", src: "https://lh3.googleusercontent.com/-xeqMj_NC0HY/VdN4CvT57ZI/AAAAAAAAB2E/OtnijrLabYw/s576-Ic42/1987-1988%252520-%252520SC%252520Mariners%252520Scolaires.jpg", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm8788Jun = scmTeamsNbr;
scmTeams[scm8788Jun] = { Saison: "1987-1988", Name: "SC Mariners Juniors", Event: "Saison 1987-1988", src: "https://lh3.googleusercontent.com/-ZNXcAQTP9PM/VdN43GzKkqI/AAAAAAAAB2U/KxJQ11fyOck/s640-Ic42/1987-1988%252520-%252520SC%252520Mariners%252520Juniors.jpg", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

// 1986-1987
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scm8687Cad = scmTeamsNbr;
scmTeams[scm8687Cad] = { Saison: "1986-1987", Name: "SC Mariners Cadets", Event: "Saison 1986-1987", src: "https://lh3.googleusercontent.com/-2SZUxcoB6UU/VdNp7WuZLSI/AAAAAAAAB04/Esat6UqP_Mw/s720-Ic42/1986-1987%252520-%252520SC%252520Mariners%252520Cadets.jpg", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm8687Sca = scmTeamsNbr;
scmTeams[scm8687Sca] = { Saison: "1986-1987", Name: "SC Mariners Scolaires A", Event: "Saison 1986-1987", src: "https://lh3.googleusercontent.com/-UymP4u-mAj8/VdNq-lpOrpI/AAAAAAAAB1I/JADT7FdU_0E/s640-Ic42/1986-1987%252520-%252520SC%252520Mariners%252520Scolaires%252520A.jpg", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm8687Scb = scmTeamsNbr;
scmTeams[scm8687Scb] = { Saison: "1986-1987", Name: "SC Mariners Scolaires B", Event: "Saison 1986-1987", src: "https://lh3.googleusercontent.com/-3pMJdJWIo80/VdNr51supdI/AAAAAAAAB1Y/P_cRlnKcqCc/s663-Ic42/1986-1987%252520-%252520SC%252520Mariners%252520Scolaires%252520B.jpg", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm8687Scab = scmTeamsNbr;
scmTeams[scm8687Scab] = { Saison: "1986-1987", Name: "SC Mariners Scolaires A et B", Event: "Saison 1986-1987", src: "https://lh3.googleusercontent.com/-xkaRQsvWzeM/VdN2PCZPAjI/AAAAAAAAB1w/jln57RnNpYk/s720-Ic42/1986-1987%252520-%252520SC%252520Mariners%252520Scolaires%252520A-B.jpg", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

// 1985-1986
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scm8586Cad = scmTeamsNbr;
scmTeams[scm8586Cad] = { Saison: "1985-1986", Name: "SC Mariners Cadets", Event: "Saison 1985-1986", src: "https://lh3.googleusercontent.com/-5u5jDJhLu34/VdIgguydcSI/AAAAAAAAB0E/ALHl5QZ63vo/s640-Ic42/1985-1986%252520-%252520SC%252520Mariners%252520Cadets.jpg", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

scmTeamsNbr = scmTeamsNbr + 1;
var scm8586Sco = scmTeamsNbr;
scmTeams[scm8586Sco] = { Saison: "1985-1986", Name: "SC Mariners Scolaires", Event: "Saison 1985-1986", src: "https://lh3.googleusercontent.com/-PJbPDl64RCI/VdNoVgYVGtI/AAAAAAAAB0k/EkdCePa4b2E/s640-Ic42/1985-1986%252520-%252520SC%252520Mariners%252520Scolaires.jpg", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

// 1984-1985
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scm8485Cadb = scmTeamsNbr;
scmTeams[scm8485Cadb] = { Saison: "1984-1985", Name: "SC Mariners Cadets B", Event: "Saison 1984-1985", src: "https://lh3.googleusercontent.com/-CTCKa7N18F4/VdIe3pK4isI/AAAAAAAABzw/6XFlLRoy6Ek/s640-Ic42/1984-1985%252520-%252520SC%252520Mariners%252520Cadets%252520B.jpg", width: 400, target: "_blank", texte: "", desch: "joueur 1 - Joueur 2 - joueur 3 - joueur 4 ", descb: "joueur 5 - Joueur 6 - joueur 7 - joueur 8" };

// 1983-1984
// *********
scmTeamsNbr = scmTeamsNbr + 1;
var scm8384Eq1 = scmTeamsNbr;
scmTeams[scm8384Eq1] = { Saison: "1983-1984", Name: "SC Mariners", Event: "Tournoi 24H Maxi 28 - 18, 19 Mai 1984", src: "https://lh3.googleusercontent.com/-5EMXpZ3h4V4/VU5hgzDwgWI/AAAAAAAABPQ/gYji6MSMyFM/s720-Ic42/1983-1984%252520-%252520SC%252520Mariners.jpgieri2007.JPG", width: 400, target: "_blank", texte: "", desch: "Claude Lefebvre, Hassan Essid (Président), Pascal Magerman, Adrian Arteaga (Vice-président), Sergio Scarsi (Secrétaire), Jean Masset (Délégué)"
, descb: "Daniel Verpoten, X, Didier Paternotte, Patrick Bartholomé (Trésorier)"
};

// 1982-1983
// *********


// ************
// * Trophées *
// ************

var scmTrophNbr = 0;

// 2016-2017
// *********



scmTrophNbr = scmTrophNbr + 1;
var scmIta117 = scmTrophNbr;
scmTroph[scmIta117] = { Saison: "2016-2017", Name: "Marinieri - 2EME Place", Event: "Eurotorneo 2017", src: "https://lh3.googleusercontent.com/6RNfP27F_jmzdqql4X4hoGhN44xfD6kpDPxqusUDZ-OT_y2fFc0xtgMBit9FKRElkPj5OCdnV6oDddhTC1bNFpO5C4PGDM7Jlzx0A0BfLZuVIjXxEBMzoy0GV9CnlKIsvGqYG3R-lka1eD51F32Qz74S5KEoAJsOeBpSx5FMaooizmnloseARSm4nwOeFsAADS1b5U71JxZlUNguJJ7_6marK_fUawWKimIHpVDvVOD_kW1pzgL3R1EUbA2Zp5WIpRhyS01cb76ZzqkhYDD4Dd-5N-P1BmkSyhilAQPxJOgYb4OUMhislSYUYwLjN5MFc6eXfDEUN3cfX8q7SY9ngejZGh0NCXcSedrLmpm1PikpA_xqym4-96zG0fJR2myNNIDP2fi59UTmXb9P-7mAQtn-0sTp54ALMwZq5XazK_ExaMS8_l7H7vmAq5BRN6TboZ3-dmLqNEZw_1fdoQOSbQPngfH7qfAx_4ARNPueWv6_LXMKvkIK1IjvVm6wuY7DfWDjWIwE4RD5O3Vd_xkeTqNzC8ff1TX79sxht5slvZh6tStCT3_DboqmYI8y3Pds_iTkeg0vzESAC8YS9wnewn7QsoJeFFdo19UzeacBsw0TZrrvfgCe0UZo=w379-h662-no", width: 50, target: "_blank", texte: "Marinieri", desch: "Marinieri", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS17EqV = scmTrophNbr;
scmTroph[scmLFFS17EqV] = { Saison: "2016-2017", Name: "SC Mariners V", Event: "LFFS - 2016-2017", src: "https://lh3.googleusercontent.com/mnxlkvlHRq-pfX2zLz0Geg8As2QVHcRS3-VVRwyxLx9TF7X4vZvYx44I2vqvzH_NJxHzjB7ILV8Oapw6rtkvuZN22piZxsFcv-HZhVIp4Hk9sLig2g2pM_6SLUZ55eIuIJD8PGsFxbHcV0ZzmrExbbN7h03Zrn9iBbRmuf1bxuM7U0Gd_39DKBo7Xp27S30ZUyJPgQ_0I2nyWQ63Dph5oDrinwdoO_ELhJA9z0iK3FGMOqGcJJJKrhEvi7pDfj3ChR24IrkUqaAp07GxzAyGL5IsvypmfSvNAqstZCkUBkLa60pE1IAGozHCg7CJn8mL_77Bt2vnV6-RastXcNVK8Xaw_ZIWGzzpM7hTEM3ERJ0yifjDR5nubLJc7BtznAy1oSd3z41RSL9PSXkcO_Lf5wyAu_oo7Qzg87XLvB4A6hRL4Fg1AIr6k74qlLtwmIQxq3U_hdbopp7Fctw_6uFvtL8ZJ1hdrgWZnF1oYhYymCDUAb0pHqme0bjwmqq9I7PllB8u-xEyN4_PT7-vu6wPurWGx3x2-1-tyQ-Id7Y6KY7ByQgx5_6J69yw-IcrWANPJHyt_hbnmkvcl1E_qiSEh99vFzsweTdQxvBl82G36viN9CywovsFnJkO=w308-h662-no", width: 50, target: "_blank", texte: "Trophée", desch: "Division 1 - Vétérans", descb: "" };


// 2015-2016
// *********
scmTrophNbr = scmTrophNbr + 1;
var scmLFFS16Com = scmTrophNbr;
scmTroph[scmLFFS16Com] = { Saison: "2015-2016", Name: "SC Mariners V", Event: "LFFS - 2015-2016", src: "https://lh3.googleusercontent.com/0rET_byxhY3CgGCpTOTGkzYTJcgHw_FBFoup_sf0VscsLxYUXI6cXr5luO9gPIS7zTUA59-5DvAQJ_Ni-KqNVY_OJV3naHhBqY9a5avIXVWM-fsZa6St7dAWA32RORL1ZhXe1-BJSTENN8sbTQj2_9GDuzz6y1N2hoettvc_Tu66ZZ-N-6EZJ5p0hk-P6khC2WJrEahrVtW2IgZyllsHsSoxPbDMe6UKmu6OPZYQyegGlbGrmPqu9KMFBIVd1-iXQZJ3ckpCiGrBJ_J8x5dfx6I3FPy76cWiCP6-tQQ5eqOv4mXpkBjF6BLjG5oYCvcHOpkW_kssQiOn_7-lDkpUblkMundfABdecV9gNBo10d0zdv_NS3Ibuygqsh4c8IalotYT_N3uFS35_33d_S5uuILO2z7E_5jUS4yr7Lfb8WWIErlbIsJotx3n-Q88SDLzk8TParr_ePXignINGJiFVc74cHa2wXeiT7rikyB8gfmjC0YswQuaCHp5u5Xjz9sOaQNb03sB8esTau32Ls1kD5v8j1mJ1QjRZe29rJ52ETTWs1W-CsgO4q5g8geirjac4vprrTnfUeInd-lF51m3WOfbElsQCQw=w323-h677-no", width: 50, target: "_blank", texte: "Prix de la Commission Sportive", desch: "Division 1 - Vétérans", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS16EqV = scmTrophNbr;
scmTroph[scmLFFS16EqV] = { Saison: "2015-2016", Name: "SC Mariners V", Event: "Masters Fair Play LFFS - 2015-2016", src: "https://lh3.googleusercontent.com/LQIvQwIVVsV_3z04AygKScWVKAclLiJs85kTE6BmXaofAxGts-ig6tkdPyr4bmO6V4oe_qiNlAgF91dg9hLwK4xdLr08rNJpaEFogjkYgbeJO7Ggs-RqfMnp9lHAlFC4Pcn4069Z0LIwmEyJ3x9kMx16bR-Rj32EE3eXpLwVlsoR2crcTEeWaAXFEYLN0-s-Z15g6qnynBQxh2rhbPxFr0gqlw_KwWBSvnScwp0lI08VRbgHio6OjwzqHkfsoZALWF1ZQfcSuG_Xm_w4Q9V3pDRpTt2Qn1je3uAc8XTygs2-U9FDSsiOfW8Xyap-YCu06GUeNtiUSNMx2dkGAh9HX20-ZknI67XkkOrq9GfRQystDFpwVwWLOo7lTAFyD1c4VFIG8AB9S0hr-vXobeMDZdiZVHiuzCItTxZRaU1emzMhy8VB1x38q3IqlOjdAQRW1JB5cCxr2352dDQ9zgRRqYt3jeqRAzjz02Kf1V3VP7WIy-16p5A_tedDfji-8kABhclwWNtfwDdKyJ8x3px3wyxdK_09i2iyRThd9DJyx-Doz5Z0O3oj5FKB3A9H5kPNIuLzJMmlciyFlkvR_SHkFaiAXt8Guts=w350-h677-no", width: 50, target: "_blank", texte: "Trophée", desch: "Division 1 - Vétérans", descb: "" };


// 2013-2014
// *********
scmTrophNbr = scmTrophNbr + 1;
var scmLFFS14Eq2T = scmTrophNbr;
scmTroph[scmLFFS14Eq2T] = { Saison: "2013-2014", Name: "SC Mariners 2", Event: "Masters Fair Play LFFS - 2013-2014", src: "https://lh3.googleusercontent.com/-GiQlGOkH0JM/VVhiVvmFRfI/AAAAAAAABZY/Y8LDvW7AKnY/s512/SC%2520Mariners%25202%2520-%2520FairPlay%25201314.JPG", width: 50, target: "_blank", texte: "Trophée", desch: "4ème Provinciale D", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS14Eq3T = scmTrophNbr;
scmTroph[scmLFFS14Eq3T] = { Saison: "2013-2014", Name: "SC Mariners 3", Event: "Masters Fair Play LFFS - 2013-2014", src: "https://lh3.googleusercontent.com/-Vk7bzjtB2_g/VVhypJW20pI/AAAAAAAABZs/b97R8FN4TiM/s512/SC%252520Mariners%2525204%252520-%252520FairPlay%2525201314.JPG", width: 50, target: "_blank", texte: "Trophée", desch: "4ème Provinciale H", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS14EqVT = scmTrophNbr;
scmTroph[scmLFFS14EqVT] = { Saison: "2013-2014", Name: "SC Mariners V", Event: "Masters Fair Play LFFS - 2013-2014", src: "https://lh3.googleusercontent.com/-gGi6-pVT7TE/VVhzrfIjC_I/AAAAAAAABZ8/V5M4SpvkEqg/s512/SC%252520Mariners%252520V%252520-%252520FairPlay%2525201314.JPG", width: 50, target: "_blank", texte: "Trophée", desch: "Division 1", descb: "" };




// 2012-2013
// *********
scmTrophNbr = scmTrophNbr + 1;
var scmAmb1230 = scmTrophNbr;
scmTroph[scmAmb1230] = { Saison: "2012-2013", Name: "SC Mariners Auderghem", Event: "Félicitations 30 ans - FC Ambiance", src: "https://lh3.googleusercontent.com/--OSeivzmONs/VVh3UXvbkHI/AAAAAAAABac/XI2yUFDi648/s512/F%25C3%25A9licitations%2520-%252030%2520ans%2520-%25202012-20013%2520-%2520de%2520FC%2520Ambiance.JPG", width: 50, target: "_blank", texte: "Félicitations 30 ans", desch: "FC Ambiance", descb: "" };



// 2011-2012
// *********
scmTrophNbr = scmTrophNbr + 1;
var scmLFFS12Eq1T = scmTrophNbr;
scmTroph[scmLFFS12Eq1T] = { Saison: "2011-2012", Name: "SC Mariners 1", Event: "Masters Fair Play LFFS - 2011-2012", src: "https://lh3.googleusercontent.com/-MmZ4xatY5rs/VVhPQr0l_OI/AAAAAAAABYk/2-6MD68SFFE/s512/20112012%252520-%2525202A%252520-%252520EqA%252520-%252520FairPlay.JPG", width: 50, target: "_blank", texte: "Trophée", desch: "2ème Provinciale A", descb: "" };



// 2010-2011
// *********
scmTrophNbr = scmTrophNbr + 1;
var scmLFFS11EqVD = scmTrophNbr;
scmTroph[scmLFFS11EqVD] = { Saison: "2010-2011", Name: "SC Mariners V", Event: "Masters Fair Play LFFS - 2010-2011", src: "https://lh3.googleusercontent.com/-bORBHHUIuFo/VVhLogy5NGI/AAAAAAAABXw/oc8ypcA04Xs/s640/20102011%252520-%252520V1%252520-%252520EqV%252520-%252520FairPlay.jpg", width: 50, target: "_blank", texte: "Diplome", desch: "Division 1", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS11EqVT = scmTrophNbr;
scmTroph[scmLFFS11EqVT] = { Saison: "2010-2011", Name: "SC Mariners V", Event: "Masters Fair Play LFFS - 2010-2011", src: "https://lh3.googleusercontent.com/-OK8S48kKivQ/VVhLl0lP4kI/AAAAAAAABXo/Ot1DCrS6SLM/s640/20102011%252520-%252520V1%252520-%252520EqV%252520-%252520FairPlay%252520-%252520LFFS.jpg", width: 50, target: "_blank", texte: "Trophée", desch: "Division 1", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmIta112 = scmTrophNbr;
scmTroph[scmIta112] = { Saison: "2010-2011", Name: "Marinieri - 2EME Place", Event: "Eurotorneo 2011", src: "https://lh3.googleusercontent.com/-HtGZD3V7Zjo/VViJC_jltxI/AAAAAAAABbQ/MWF3d4Lh8LA/s512/Marinieri%252520-%252520Eurotorneo%2525202011%252520-%2525202eme.JPG", width: 50, target: "_blank", texte: "Marinieri", desch: "Marinieri", descb: "" };


// 2009-2010
// *********
scmTrophNbr = scmTrophNbr + 1;
var scmIta101 = scmTrophNbr;
scmTroph[scmIta101] = { Saison: "2009-2010", Name: "Marinieri - 1ERE Place", Event: "Eurotorneo 2010", src: "https://lh3.googleusercontent.com/-Yt4V-CkqHaE/VViOL76RpeI/AAAAAAAABbs/gLodOO-22ZM/s512/Marinieri%252520-%252520Eurotorneo%2525202010%252520-%2525201er.JPG", width: 50, target: "_blank", texte: "Marinieri", desch: "Marinieri", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS10Eq4D = scmTrophNbr;
scmTroph[scmLFFS10Eq4D] = { Saison: "2009-2010", Name: "SC Mariners 4", Event: "Masters Fair Play LFFS - 2009-2010", src: "https://lh3.googleusercontent.com/-pB-1LpdE8hA/VVe2NuA235I/AAAAAAAABWs/v9W5C6hkxCE/s720/20092010%252520-%2525204I%252520-%252520EqD%252520-%252520FairPlay.jpg", width: 50, target: "_blank", texte: "Diplome", desch: "4ème Provinciale I", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS10Eq4T = scmTrophNbr;
scmTroph[scmLFFS10Eq4T] = { Saison: "2009-2010", Name: "SC Mariners 4", Event: "Masters Fair Play LFFS - 2009-2010", src: "https://lh3.googleusercontent.com/-l9xhMdtT78s/VVe2OpIE0nI/AAAAAAAABW0/gwo3spewOiQ/s640/20092010%252520-%2525204I%252520-%252520EqD%252520-%252520FairPlay%252520-%252520LFFS.jpg", width: 50, target: "_blank", texte: "Trophée", desch: "4ème Provinciale I", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS10EqVD = scmTrophNbr;
scmTroph[scmLFFS10EqVD] = { Saison: "2009-2010", Name: "SC Mariners V", Event: "Masters Fair Play LFFS - 2009-2010", src: "https://lh3.googleusercontent.com/-X7ZkT8PP4aU/VVhKOLuo_5I/AAAAAAAABXM/NW9DCrPsL_o/s640/20092010%252520-%252520V1%252520-%252520EqV%252520-%252520FairPlay.jpg", width: 50, target: "_blank", texte: "Diplome", desch: "Division 1", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS10EqVT = scmTrophNbr;
scmTroph[scmLFFS10EqVT] = { Saison: "2009-2010", Name: "SC Mariners V", Event: "Masters Fair Play LFFS - 2009-2010", src: "https://lh3.googleusercontent.com/-8iURqWu0kdI/VVhKPby8hwI/AAAAAAAABXU/14rPpn66488/s640/20092010%252520-%252520V1%252520-%252520EqV%252520-%252520FairPlay%252520-%252520LFFS.jpg", width: 50, target: "_blank", texte: "Trophée", desch: "Division 1", descb: "" };


// 2008-2009
// *********
scmTrophNbr = scmTrophNbr + 1;
var scmBaby091 = scmTrophNbr;
scmTroph[scmBaby091] = { Saison: "2008-2009", Name: "SC Mariners 5 - 1ERE Place", Event: "Tournoi MFC Babylone 2009", src: "https://lh3.googleusercontent.com/-hlV6mtEoe5g/VVijDoYI4kI/AAAAAAAABeg/cXsLPwAqTZE/s512/EqE_Babylone2009.gif", width: 50, target: "_blank", texte: "1ère Place", desch: "Tournoi Babylone 2009", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS09Eq3D = scmTrophNbr;
scmTroph[scmLFFS09Eq3D] = { Saison: "2008-2009", Name: "SC Mariners 3", Event: "Masters Fair Play LFFS - 2008-2009", src: "https://lh3.googleusercontent.com/-3KxT30RBkFs/VVe0F7KKEsI/AAAAAAAABWY/9vDbPO9q5qg/s640/20082009%252520-%2525204F%252520-%252520EqC%252520-%252520FairPlay.jpg", width: 50, target: "_blank", texte: "Diplome", desch: "4ème Provinciale F", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS09Eq3T = scmTrophNbr;
scmTroph[scmLFFS09Eq3T] = { Saison: "2008-2009", Name: "SC Mariners 3", Event: "Masters Fair Play LFFS - 2008-2009", src: "https://lh3.googleusercontent.com/-5HaYuyLpCv4/VVe0FfkyQmI/AAAAAAAABWQ/OceUFYOpIcQ/s512/20082009%252520-%2525204F%252520-%252520EqC%252520-%252520FairPlay%252520-%252520LFFS.jpg", width: 50, target: "_blank", texte: "Trophée", desch: "4ème Provinciale F", descb: "" };



// 2007-2008
// *********
scmTrophNbr = scmTrophNbr + 1;
var scmIta081 = scmTrophNbr;
scmTroph[scmIta081] = { Saison: "2007-2008", Name: "Marinieri - 1ERE Place", Event: "Eurotorneo 2008", src: "https://lh3.googleusercontent.com/2O26qBr3vqe6IkTy2HCwPIjFuQ8HLrkbIi0e4LvyPgj_lNKDfbOxZudguX_294R86bAy0NjgTkDy3N1n2FpVO2PwK2XJdieVD-8WU89RCmsvEKj28q71HNmaliDSOLsrGa_oMuFeyx25UODXF3W9-ltUib3iZ2bDjVrslO2JfJr3lEZCRETu2aQ2nGityqs9enooUDwra-dP5zu-rszs47xjtjqlVKvGCgJeyf2T42iyD4aJRVElsmaDHD8-Fjd2YVrn3YGM71KAQmitlaNU1H83DX-UJHy90VlQoNXohFjUTow7R6x2gy5Ani2Ezdx1y6UqIy1gV1FxNs8OWtXigxRDgCmMnh4CvM-JHZRaiOvw5OJ09b2ijMZI4MBqlx-4re18OmRG3tzHGzfPRs5mm48Ngpg54voeG2a3FVTa_yoFj-1b3bBL1tRbaDpcSM5djRK5fzAIhoaRlIJEOyEg_w1xfOXMlGB9ktNB7q_buwfpuop-oWu7-6OR8bwba3cEeR5Iw_uxtmdaq43mo_uTSkpY2sVYy9UufdEOBDqSwLbwK-mP2jwES-Lg4u1BwFfjNLUzaJXTX7UmkWQGC9hQcwzf6xgiHLY=w267-h355-no", width: 50, target: "_blank", texte: "Marinieri", desch: "Marinieri", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmChamp08Eq4D = scmTrophNbr;
scmTroph[scmChamp08Eq4D] = { Saison: "2007-2008", Name: "SC Mariners 4", Event: "Champions LFFS - 2007-2008", src: "https://lh3.googleusercontent.com/-tFeOxaShAWw/VVetyHonSnI/AAAAAAAABVI/MYGGsXeWRqs/s640/20072008%252520-%2525204H%252520-%252520EqD%252520-%252520Champion.jpg", width: 50, target: "_blank", texte: "Diplome", desch: "4ème Provinciale H", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmChamp08Eq4T = scmTrophNbr;
scmTroph[scmChamp08Eq4T] = { Saison: "2007-2008", Name: "SC Mariners 4", Event: "Champions LFFS - 2007-2008", src: "https://lh3.googleusercontent.com/-PsEjRxZGqts/VVihR3-jk8I/AAAAAAAABeQ/KDhT6WzhZk4/s512/EqD_Champ20072008.gif", width: 50, target: "_blank", texte: "Trophée", desch: "4ème Provinciale H", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmChamp08Eq4S = scmTrophNbr;
scmTroph[scmChamp08Eq4S] = { Saison: "2007-2008", Name: "SC Mariners 4", Event: "Champions LFFS - 2007-2008", src: "https://lh3.googleusercontent.com/-CCRpAy5L7KA/VVhQt0H8K4I/AAAAAAAABY0/C5WWt4Z1iZU/s512/20072008%2520-%25204H%2520-%2520EqD%2520-%2520Champion%2520-%2520Souvenirs.JPG", width: 50, target: "_blank", texte: "Souvenirs", desch: "4ème Provinciale H", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmChamp08EqVD = scmTrophNbr;
scmTroph[scmChamp08EqVD] = { Saison: "2007-2008", Name: "SC Mariners V", Event: "Champions LFFS - 2007-2008", src: "https://lh3.googleusercontent.com/-bpG5TDoJsF4/VVilAs_WAZI/AAAAAAAABe4/5uF5r-MpqMk/s512/EqV_Champ20072008.gif", width: 50, target: "_blank", texte: "Diplome", desch: "Division 2B", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmChamp08EqVT = scmTrophNbr;
scmTroph[scmChamp08EqVT] = { Saison: "2007-2008", Name: "SC Mariners V", Event: "Champions LFFS - 2007-2008", src: "https://lh3.googleusercontent.com/-5ZTlUriyGb0/VVev8YUdtqI/AAAAAAAABVg/Bd2wzMp9bYs/s640/20072008%252520-%252520V2B%252520-%252520EqV%252520-%252520Champion.jpg", width: 50, target: "_blank", texte: "Trophée", desch: "Division 2B", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmChamp08EqVS = scmTrophNbr;
scmTroph[scmChamp08EqVS] = { Saison: "2007-2008", Name: "SC Mariners V", Event: "Champions LFFS - 2007-2008", src: "https://lh3.googleusercontent.com/-A6e5bSZ9HMQ/VVhVEeqM-0I/AAAAAAAABZE/MO7NOFOFHsE/s512/20072008%252520-%252520V2B%252520-%252520EqV%252520-%252520Champion%252520-%252520Souvenirs.JPG", width: 50, target: "_blank", texte: "Souvenirs", desch: "Division 2B", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS08EqVD = scmTrophNbr;
scmTroph[scmLFFS08EqVD] = { Saison: "2007-2008", Name: "SC Mariners V", Event: "Masters Fair Play LFFS - 2007-2008", src: "https://lh3.googleusercontent.com/-lZ5ax17Xcqk/VVexNo2z7TI/AAAAAAAABV4/dczUwjC1Eds/s640/20072008%252520-%252520V2B%252520-%252520EqV%252520-%252520FairPlay.jpg", width: 50, target: "_blank", texte: "Diplome", desch: "Division 2B", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS08EqVT = scmTrophNbr;
scmTroph[scmLFFS08EqVT] = { Saison: "2007-2008", Name: "SC Mariners V", Event: "Masters Fair Play LFFS - 2007-2008", src: "https://lh3.googleusercontent.com/-AvOQna1MMR0/VVexNFS8fGI/AAAAAAAABVw/Mzv7WQ57_ws/s512/20072008%252520-%252520V2B%252520-%252520EqV%252520-%252520FairPlay%252520-%252520LFFS.jpg", width: 50, target: "_blank", texte: "Trophée", desch: "Division 2B", descb: "" };


// 2006-2007
// *********
scmTrophNbr = scmTrophNbr + 1;
var scmLFFS07Eq1D = scmTrophNbr;
scmTroph[scmLFFS07Eq1D] = { Saison: "2006-2007", Name: "SC Mariners 1", Event: "Masters Fair Play LFFS - 2006-2007", src: "https://lh3.googleusercontent.com/-5ZRg6n_KUow/VVeoQRr8GvI/AAAAAAAABUY/h2OGhbW3Bl0/s640/20062007%252520-%2525202A%252520-%252520EqA%252520-%252520FairPlay.jpg", width: 50, target: "_blank", texte: "Diplome", desch: "2ème Provinciale A", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS07Eq1T = scmTrophNbr;
scmTroph[scmLFFS07Eq1T] = { Saison: "2006-2007", Name: "SC Mariners 1", Event: "Masters Fair Play LFFS - 2006-2007", src: "https://lh3.googleusercontent.com/-eqaE3fm1V8A/VVeoPdnQHvI/AAAAAAAABUQ/_bnsY7gQpFc/s512/20062007%252520-%2525202A%252520-%252520EqA%252520-%252520FairPlay%252520-%252520LFFS.jpg", width: 50, target: "_blank", texte: "Trophée", desch: "2ème Provinciale A", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS07Eq5D = scmTrophNbr;
scmTroph[scmLFFS07Eq5D] = { Saison: "2006-2007", Name: "SC Mariners 5", Event: "Masters Fair Play LFFS - 2006-2007", src: "https://lh3.googleusercontent.com/-lRUtbNgvb7M/VVeqSPlnAcI/AAAAAAAABU0/wjMt55AXC_w/s640/20062007%252520-%2525205K%252520-%252520EqF%252520-%252520FairPlay.jpg", width: 50, target: "_blank", texte: "Diplome", desch: "5ème Provinciale K", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS07Eq5T = scmTrophNbr;
scmTroph[scmLFFS07Eq5T] = { Saison: "2006-2007", Name: "SC Mariners 5", Event: "Masters Fair Play LFFS - 2006-2007", src: "https://lh3.googleusercontent.com/-K7KnjL5SicQ/VVeqRIKMYTI/AAAAAAAABUs/qmIP0PnB8V4/s512/20062007%252520-%2525205K%252520-%252520EqF%252520-%252520FairPlay%252520-%252520LFFS.jpg", width: 50, target: "_blank", texte: "Trophée", desch: "5ème Provinciale K", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmIta071 = scmTrophNbr;
scmTroph[scmIta071] = { Saison: "2006-2007", Name: "Marinieri - 1ERE Place", Event: "Eurotorneo 2007", src: "https://lh3.googleusercontent.com/-xF7HI4rnZI8/VViHtPezsPI/AAAAAAAABbA/jY7iGzyKmxg/s512/Marinieri%252520-%252520Eurotorneo%2525202007%252520-%2525201er.JPG", width: 50, target: "_blank", texte: "Marinieri", desch: "Marinieri", descb: "" };




// 2005-2006
// *********
scmTrophNbr = scmTrophNbr + 1;
var scmBard061 = scmTrophNbr;
scmTroph[scmBard061] = { Saison: "2005-2006", Name: "SC Mariners 1 - 1ERE Place", Event: "Tournoi Bardot 2006", src: "https://lh3.googleusercontent.com/f51bObVhGrHC2DHKXGLk8t1FCtspGWKoUd6Ey39X_so10WposGw6ECfZ5OPI5PvygIeTRThkUjdpY8sD1yD4ruJLg9til9RTee2PTVGTlS4Kvlo6kL-1nmpdWkgrNhJDfywsMYpC0H2sHE3uGghqqP7yhxViVz_2zZaYCdt9OfdfqHxkeL1HLEGSEvp0sorGO-P9UoFvGFzyFZEaKIbLep-FbZWLLRCAx7xn4K40Bd6sc5SP29d1BmSS3DQDwv3ejiHW1huiDhkKRFULPmkxZJxYUVszIUXIQJZFDjYAGgCP4KEwk6lyUSwQyvHG1lKgXcXeYInCvsP0gJXdpQsPh7_6QgjA4IQWw6gL1sQjcnT6oH0TEOlinZ3DvT4FWOtLEska_QH9yn5-YNWqpkCaZ7Uq-WEt4HtKtBI5WxLVciDoE-JcHfh4RSOZYc5trZI-Ebx704UuJI0MdI7VKcl3-pg9a5mKNN_m-nySu_32ENxE_0aHmphvsOCbPz215cYC9HE1gH2AKUHK063q01pO-yRyNOMY_Fl1CQff3TBb3Ve6nJCHStxpO7C0ghjoZIHJRsUTOQBNFbMfuBt-F5BDFtS8dqDO_9c=w202-h355-no", width: 50, target: "_blank", texte: "1ère Place", desch: "Marinieri", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmBard063 = scmTrophNbr;
scmTroph[scmBard063] = { Saison: "2005-2006", Name: "SC Mariners 2 - 3EME Place", Event: "Tournoi Bardot 2006", src: "https://lh3.googleusercontent.com/f51bObVhGrHC2DHKXGLk8t1FCtspGWKoUd6Ey39X_so10WposGw6ECfZ5OPI5PvygIeTRThkUjdpY8sD1yD4ruJLg9til9RTee2PTVGTlS4Kvlo6kL-1nmpdWkgrNhJDfywsMYpC0H2sHE3uGghqqP7yhxViVz_2zZaYCdt9OfdfqHxkeL1HLEGSEvp0sorGO-P9UoFvGFzyFZEaKIbLep-FbZWLLRCAx7xn4K40Bd6sc5SP29d1BmSS3DQDwv3ejiHW1huiDhkKRFULPmkxZJxYUVszIUXIQJZFDjYAGgCP4KEwk6lyUSwQyvHG1lKgXcXeYInCvsP0gJXdpQsPh7_6QgjA4IQWw6gL1sQjcnT6oH0TEOlinZ3DvT4FWOtLEska_QH9yn5-YNWqpkCaZ7Uq-WEt4HtKtBI5WxLVciDoE-JcHfh4RSOZYc5trZI-Ebx704UuJI0MdI7VKcl3-pg9a5mKNN_m-nySu_32ENxE_0aHmphvsOCbPz215cYC9HE1gH2AKUHK063q01pO-yRyNOMY_Fl1CQff3TBb3Ve6nJCHStxpO7C0ghjoZIHJRsUTOQBNFbMfuBt-F5BDFtS8dqDO_9c=w202-h355-no", width: 50, target: "_blank", texte: "3ème Place", desch: "Marinieri", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS06Eq1D = scmTrophNbr;
scmTroph[scmLFFS06Eq1D] = { Saison: "2005-2006", Name: "SC Mariners 1", Event: "Masters Fair Play LFFS - 2005-2006", src: "https://lh3.googleusercontent.com/-S2FRBhkGijc/VVemSxNh37I/AAAAAAAABT8/qKv0ERjsYno/s640/20052006%252520-%2525203E%252520-%252520EqA%252520-%252520FairPlay.jpg", width: 50, target: "_blank", texte: "Diplome", desch: "3ème Provinciale E", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS06Eq1T = scmTrophNbr;
scmTroph[scmLFFS06Eq1T] = { Saison: "2005-2006", Name: "SC Mariners 1", Event: "Masters Fair Play LFFS - 2005-2006", src: "https://lh3.googleusercontent.com/-O_QEpczMqgk/VVemROs_bUI/AAAAAAAABT0/hwZmQcxeaPw/s512/20052006%252520-%2525203E%252520-%252520EqA%252520-%252520FairPlay%252520-%252520LFFS.jpg", width: 50, target: "_blank", texte: "Trophée", desch: "3ème Provinciale E", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmBaby06Eq1 = scmTrophNbr;
scmTroph[scmBaby06Eq1] = { Saison: "2005-2006", Name: "SC Mariners 1", Event: "Merci du MFC Babylone - 2005-2006", src: "https://lh3.googleusercontent.com/-zsNlM9p8bq8/VVh07xu6ahI/AAAAAAAABaM/N7oh5WlNm6A/s640/Merci%252520-%2525202005-2006%252520-%252520MFC%252520Babylon%252520.JPG", width: 50, target: "_blank", texte: "MERCI", desch: "3ème Provinciale E", descb: "" };


// 2004-2005
// *********
scmTrophNbr = scmTrophNbr + 1;
var scmBarc053 = scmTrophNbr;
scmTroph[scmBarc053] = { Saison: "2004-2005", Name: "SC Mariners - 3EME Place", Event: "Tournoi Barcec 2005", src: "https://lh3.googleusercontent.com/-4IohjA6TEd8/VVipQNbkI4I/AAAAAAAABfc/qIENxRTFHOE/s512/MS_Barcec_2005_3eme.jpg", width: 50, target: "_blank", texte: "3ème Place", desch: "", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmBarc05F = scmTrophNbr;
scmTroph[scmBarc05F] = { Saison: "2004-2005", Name: "SC Mariners - Fair-Play", Event: "Tournoi Barcec 2005", src: "https://lh3.googleusercontent.com/-Cb2pKhvbuCA/VVipQLUKVhI/AAAAAAAABfY/WoKVI4FiSw0/s512/MS_Barcec_2005_Fairplay.jpg", width: 50, target: "_blank", texte: "Fair-Play", desch: "", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmBard052 = scmTrophNbr;
scmTroph[scmBard052] = { Saison: "2004-2005", Name: "SC Mariners - 2EME Place", Event: "Tournoi Bardot 2005", src: "https://lh3.googleusercontent.com/-xKAcJbRe-Yw/VViraxGKVHI/AAAAAAAABf0/ZZMCkjn9ny8/s512/MS_Bardot_2005_2eme.jpg", width: 50, target: "_blank", texte: "2ème Place", desch: "", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS05Eq5D = scmTrophNbr;
scmTroph[scmLFFS05Eq5D] = { Saison: "2004-2005", Name: "SC Mariners 5", Event: "Masters Fair Play LFFS - 2004-2005", src: "https://lh3.googleusercontent.com/-iH1_etr-qyI/VVekp8iBIFI/AAAAAAAABTg/QK9eGo15Q10/s640/20042005%252520-%2525205K%252520-%252520EqE%252520-%252520FairPlay.jpg", width: 50, target: "_blank", texte: "Diplome", desch: "5ème Provinciale K", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS05Eq5T = scmTrophNbr;
scmTroph[scmLFFS05Eq5T] = { Saison: "2004-2005", Name: "SC Mariners 5", Event: "Masters Fair Play LFFS - 2004-2005", src: "https://lh3.googleusercontent.com/-ew7C0veePEs/VVekoKSqxTI/AAAAAAAABTY/ut72d1rK8F4/s512/20042005%252520-%2525205K%252520-%252520EqE%252520-%252520FairPlay%252520-%252520LFFS.jpg", width: 50, target: "_blank", texte: "Trophée", desch: "5ème Provinciale K", descb: "" };


// 2003-2004
// *********

scmTrophNbr = scmTrophNbr + 1;
var scmZVK043 = scmTrophNbr;
scmTroph[scmZVK043] = { Saison: "2003-2004", Name: "SC Mariners - 2EME Place", Event: "Tournoi ZVK 2004", src: "https://lh3.googleusercontent.com/-kmUvREWA1qE/VVizpUAsAmI/AAAAAAAABgU/-N7ee-R_m-8/s512/Ms_Tph_ZVK_04_2.gif", width: 50, target: "_blank", texte: "2ème Place", desch: "Tournoi ZVK", descb: "" };


// 2002-2003
// *********
scmTrophNbr = scmTrophNbr + 1;
var scmAvia033 = scmTrophNbr;
scmTroph[scmAvia033] = { Saison: "2002-2003", Name: "SC Mariners - 3EME Place", Event: "Tournoi Avia 2003", src: "https://lh3.googleusercontent.com/T3RnNDVJ9f8CpZJOArlaHRS-tzMzA4T9gcuRbuH0rlZHR3hN6VQWtAd2q5vzcqbqInTKkwnCKQXt6tIcjBfiqHTi1bw2xGVJwwQrW7c_jDLq-9gKeh_ae9EKSLWYWJM5nPRR43UuwpBdjT11BjX3cavFXD0LY_9h3yu4s532pgiGUnbHiS-QyZuJXkNL6B1p18742CQT-99yybsilkJGQAk2M0nJVkJ4dEcNoZWjBXidewgBfNLMNB5Ts40xT_GP3s5P84AyK08rUxiAd1th70RtKqbIs_9KWvKFIkDc_P2CZUj7Umy5Yx_Z2IcP1LN4raQaWR4RBiE-tYIIFkhXQC5rjYLYVojJ890AC_9pqKLE4CC9uJ36-UHMUWtulkYmiSgoKmuTCKxDd7SHHlyDG4M-lxmVmg-TZFKwckMGrZD9oLnKTPTVSrzp2KavAA1dRyKR4hbVGmZuEC3KIRFCiggzZZTSjVsk2s8cl8FPe2eR0PpBs3bXkfuGmlFPSd9AUOOQ7JFLh7KDXdifZOGidfllPZrTqIyQ6pFTVjwpxr-a0bMbHXu4CIvr8U-9megvpfalZGustvp9Kckz7bA1oPJ-KzU6JBk=w153-h355-no", width: 50, target: "_blank", texte: "3ème Place", desch: "Tournoi Avia", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS03Eq5D = scmTrophNbr;
scmTroph[scmLFFS03Eq5D] = { Saison: "2002-2003", Name: "SC Mariners 5", Event: "Masters Fair Play LFFS - 2002-2003", src: "https://lh3.googleusercontent.com/-4DtrcmDDsKY/VVeih7ajR3I/AAAAAAAABTA/jlJ7wTvhSJ8/s640/20022003%252520-%2525205K%252520-%252520EqE%252520-%252520FairPlay.jpg", width: 50, target: "_blank", texte: "Diplome", desch: "5ème Provinciale K", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS03Eq5T = scmTrophNbr;
scmTroph[scmLFFS03Eq5T] = { Saison: "2002-2003", Name: "SC Mariners 5", Event: "Masters Fair Play LFFS - 2002-2003", src: "https://lh3.googleusercontent.com/-PgU08XL8zek/VVeigQ4suhI/AAAAAAAABS4/r70AeX0DSBo/s512/20022003%252520-%2525205K%252520-%252520EqE%252520-%252520FairPlay%252520-%252520LFFS.jpg", width: 50, target: "_blank", texte: "Trophée", desch: "5ème Provinciale K", descb: "" };


// 2001-2002
// *********
scmTrophNbr = scmTrophNbr + 1;
var scmAvia021 = scmTrophNbr;
scmTroph[scmAvia021] = { Saison: "2001-2002", Name: "SC Mariners 1 - 1ERE Place", Event: "Tournoi Avia 2002", src: "https://lh3.googleusercontent.com/-UEX_72xsWwg/VVi3fuOodZI/AAAAAAAABgk/Ek6FFLTsLhQ/s512/MS_Avia_2002_1er.jpg", width: 50, target: "_blank", texte: "1ère Place", desch: "Marinieri", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmAvia024 = scmTrophNbr;
scmTroph[scmAvia024] = { Saison: "2001-2002", Name: "SC Mariners 2 - 4EME Place", Event: "Tournoi Avia 2002", src: "https://lh3.googleusercontent.com/-Hu9YbGChfds/VVi4C7W7waI/AAAAAAAABgw/f_Hi8N-aBDU/s512/MS_Avia_2002_4e.jpg", width: 50, target: "_blank", texte: "4ème Place Place", desch: "Marinieri", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS02Eq1D = scmTrophNbr;
scmTroph[scmLFFS02Eq1D] = { Saison: "2001-2002", Name: "SC Mariners 1", Event: "Masters Fair Play LFFS - 2001-2002", src: "https://lh3.googleusercontent.com/-NrfmCD8TxGE/VVegZ6xWr7I/AAAAAAAABSk/U82Sw113BHw/s640/20012002%252520-%2525203E%252520-%252520EqA%252520-%252520FairPlay.jpg", width: 50, target: "_blank", texte: "Diplome", desch: "3ème Provinciale E", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS02Eq1T = scmTrophNbr;
scmTroph[scmLFFS02Eq1T] = { Saison: "2001-2002", Name: "SC Mariners 1", Event: "Masters Fair Play LFFS - 2001-2002", src: "https://lh3.googleusercontent.com/-FomhXPkXplY/VVegY4O0pvI/AAAAAAAABSc/MI00KoYIyOk/s512/20012002%252520-%2525203E%252520-%252520EqA%252520-%252520FairPlay%252520-%252520LFFS.jpg", width: 50, target: "_blank", texte: "Trophée", desch: "3ème Provinciale E", descb: "" };



// 2000-2001
// *********
scmTrophNbr = scmTrophNbr + 1;
var scmLFFS01Eq1D = scmTrophNbr;
scmTroph[scmLFFS01Eq1D] = { Saison: "2000-2001", Name: "SC Mariners 1", Event: "Masters Fair Play LFFS - 2000-2001", src: "https://lh3.googleusercontent.com/-OzQe1ZnfblY/VVeeKXBRYTI/AAAAAAAABR8/rOWI-uBLVes/s640/20002001%2520-%25203C%2520-%2520EqA%2520-%2520FairPlay.jpg", width: 50, target: "_blank", texte: "Diplome", desch: "3ème Provinciale C", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS01Eq1T = scmTrophNbr;
scmTroph[scmLFFS01Eq1T] = { Saison: "2000-2001", Name: "SC Mariners 1", Event: "Masters Fair Play LFFS - 2000-2001", src: "https://lh3.googleusercontent.com/-9YqbZkk4cTE/VVeefmiRkOI/AAAAAAAABSM/Dx2UnxKJpXM/s512/20002001%2520-%25203C%2520-%2520EqA%2520-%2520FairPlay%2520-%2520LFFS.jpg", width: 50, target: "_blank", texte: "Trophée", desch: "3ème Provinciale C", descb: "" };


// 1999-2000
// *********
scmTrophNbr = scmTrophNbr + 1;
var scmLFFS00Eq1D = scmTrophNbr;
scmTroph[scmLFFS00Eq1D] = { Saison: "1999-2000", Name: "SC Mariners 1", Event: "Masters Fair Play LFFS - 1999-2000", src: "https://lh3.googleusercontent.com/-Y9ibigQpLVE/VVeZ23vLk6I/AAAAAAAABRY/Y2T6tdb-CtI/s640/19992000%252520-%2525203C%252520-%252520EqA%252520-%252520FairPlay.jpg", width: 50, target: "_blank", texte: "Diplome", desch: "3ème Provinciale C", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS00Eq1T = scmTrophNbr;
scmTroph[scmLFFS00Eq1T] = { Saison: "1999-2000", Name: "SC Mariners 1", Event: "Masters Fair Play LFFS - 1999-2000", src: "https://lh3.googleusercontent.com/-j97FT1guwf0/VVebGfoVU5I/AAAAAAAABRo/ooLCl4CK-Wg/s512/19992000%252520-%2525203C%252520-%252520EqA%252520-%252520FairPlay%252520-%252520LFFS.jpg", width: 50, target: "_blank", texte: "Trophée", desch: "3ème Provinciale C", descb: "" };




// 1998-1999
// *********
scmTrophNbr = scmTrophNbr + 1;
var scmLFFS99Eq1D = scmTrophNbr;
scmTroph[scmLFFS99Eq1D] = { Saison: "1998-1999", Name: "SC Mariners 1", Event: "Masters Fair Play LFFS - 1998-1999", src: "https://lh3.googleusercontent.com/-4DFBAvmjl2M/VVUGuIzTOWI/AAAAAAAABP8/T1v92mKRsMI/s640/19981999%2520-%25203D%2520-%2520EqA%2520-%2520FairPlay.jpg", width: 50, target: "_blank", texte: "Diplome", desch: "3ème Provinciale D", descb: "" };

scmTrophNbr = scmTrophNbr + 1;
var scmLFFS99Eq1T = scmTrophNbr;
scmTroph[scmLFFS99Eq1T] = { Saison: "1998-1999", Name: "SC Mariners 1", Event: "Masters Fair Play LFFS - 1998-1999", src: "https://lh3.googleusercontent.com/-zpZ1jlEGduw/VVeFvGaWV7I/AAAAAAAABRE/zVUOqvSqE6w/s512/19981999%2520-%25203D%2520-%2520EqA%2520-%2520FairPlay%2520-%2520LFFS.jpg", width: 50, target: "_blank", texte: "Trophée", desch: "3ème Provinciale D", descb: "" };





// 1996-1997
// *********
scmTrophNbr = scmTrophNbr + 1;
var scmSouv15ans = scmTrophNbr;
scmTroph[scmSouv15ans] = { Saison: "1996-1997", Name: "Souvenirs 15 ans - 1982-1997", Event: "1996-1997", src: "https://lh3.googleusercontent.com/-2Ca-FPQLRIA/VVh4wOsZuqI/AAAAAAAABas/09X-pWRdXIg/s512/Souvenirs%25252015%252520ans%252520-%2525201996-1997.JPG", width: 50, target: "_blank", texte: "Anniversaire Club", desch: "Anniversaire Club", descb: "" };

// 1984-1985
// *********
scmTrophNbr = scmTrophNbr + 1;
var scmMaca851 = scmTrophNbr;
scmTroph[scmMaca851] = { Saison: "1984-1985", Name: "SC Mariners Cadets - 1ERE Place", Event: "Tournoi Macabi 1985", src: "https://lh3.googleusercontent.com/omFB10S7X4sqKrzDOoU0yPIJ59RuX26ZOP9lRHEfz4_J_bocyP-iRoQcGMXwoY7p70dJqGF4wAeQ1-mthcCWsaAqVVY7ghIFj0B4hb3qU4NfFpCe7n_nzEbfyjBf2FXwfRfI1z0L3kw2Z1W5f5pUATknYgMKCvPT2TYgIq50AtDWycrFTojdB1YVAjnVImDt0yILlJ2LdymHqdMb3UGZoq29u_UVzSHOSm8_bbjU51sxntv88M-JU5ZrTZCzTcJmrrUwvC8qObbv-Va59EgTO4KLl_PtkIlDckgU_LaDgfqBfEKQWaH_ce_s2PLdpWp4UgILK8ltblifCtz3tw5oaSjFioBDBJByuIQygbPMFXi5mBj0rwDuTYo5ngrC0HZkluuScYxdev07PynjvZN3REgpJxpmN5tfRBbUk7Fv4oZBvFfwNL6BuZ8b7xxtoidYKAEekVCxOehOdKR0PxBOKdzDIPuhZ_2-hReZ1hgDy2Axan_ezqRwUpzbcRkN6Lml8_bzZPd29zgmkorEjeUSDFrp19FuHikhOj0O5WMSXTuJO2Ab7e7JdCzTVL3oLTduII0Kd-HlIWyztHuJspADiczg8FSE034=w152-h355-no", width: 50, target: "_blank", texte: "1ère Place", desch: "Cadets", descb: "" };

function setSponsImgOnly(spId, spName, spWidth) {

    document.getElementById(spName).src = scmSpons[spId]["src"];
    document.getElementById(spName).alt = scmSpons[spId]["href"];
    document.getElementById(spName).width = spWidth;
}

function setTrophImgOnly(TrophId, TrophImg, TrophHeight) {

    document.getElementById(TrophImg).src = scmTroph[TrophId]["src"];
    document.getElementById(TrophImg).alt = scmTroph[TrophId]["texte"];
    document.getElementById(TrophImg).height = TrophHeight;

}

function setTrophImg(TrophId, TrophImg, TrophLnk, TrophHeight) {

    document.getElementById(TrophImg).src = scmTroph[TrophId]["src"];

    document.getElementById(TrophImg).alt = scmTroph[TrophId]["texte"];
    document.getElementById(TrophImg).height = TrophHeight;
    document.getElementById(TrophLnk).href = "javascript:setImgPage(" + TrophId + "," + TrophPageType + ");";
    //    document.getElementById(TrophLnk).target = scmTroph[TrophId]["target"];
    document.getElementById(TrophLnk).innerHTML = scmTroph[TrophId]["Name"] + "<br>" + scmTroph[TrophId]["texte"];
}

function setTeamImgOnly(TeamId, TeamImg, TeamWidth) {

    document.getElementById(TeamImg).src = scmTeams[TeamId]["src"];
    document.getElementById(TeamImg).alt = scmTeams[TeamId]["texte"];
    document.getElementById(TeamImg).width = TeamWidth;

}

function setTeamImgSrc(TeamId, TeamImg) {

    document.getElementById(TeamImg).src = scmTeams[TeamId]["src"];


}

function setSponsImgSrc(SponsId, SponsImg) {

    document.getElementById(SponsImg).src = scmSpons[SponsId]["src"];


}

function setTeamImg(TeamId, TeamImg, TeamLnk, TeamWidth) {

    document.getElementById(TeamImg).src = scmTeams[TeamId]["src"];
    document.getElementById(TeamImg).alt = scmTeams[TeamId]["texte"];
    //    document.getElementById(TeamImg).width = scmTeams[TeamId]["width"];
    document.getElementById(TeamImg).width = TeamWidth;
    document.getElementById(TeamLnk).href = "javascript:setImgPage(" + TeamId + "," + TeamsPageType + ");";
    //    document.getElementById(TeamLnk).target = scmTeams[TeamId]["target"];
    document.getElementById(TeamLnk).innerHTML = scmTeams[TeamId]["Name"] + "<br>" + scmTeams[TeamId]["texte"];
}


var getDaysInMonth = function (month, year) {
    // Here January is 1 based  
    //Day 0 is the last day in the previous month  
    return new Date(year, month, 0).getDate();
    // Here January is 0 based  
    // return new Date(year, month+1, 0).getDate();  
}
//getDaysInMonth(1, 2012);


function getNumDayOfYear() {

    var timestmp = new Date().setFullYear(new Date().getFullYear(), 0, 1);
    var yearFirstDay = Math.floor(timestmp / 86400000);
    var today = Math.ceil((new Date().getTime()) / 86400000);
    var dayOfYear = today - yearFirstDay;
    return dayOfYear;
}


function getNumDay() {
    var d = new Date();
    //var n = d.getDay();
    var n = d.getUTCDate();
    return n;
}

function setPageHeader(HeaderId, HeaderImg) {

    document.getElementById(HeaderId).src = HeaderImg;

}

function setSponsOfDay(SponsImg, SponsLnk) {
    var d = getNumDayOfYear() % nbrSpons;
    document.getElementById(SponsImg).src = scmSpons[d]["src"];
    document.getElementById(SponsImg).alt = scmSpons[d]["texte"];
    document.getElementById(SponsImg).width = scmSpons[d]["width"];

    if (scmSpons[d]["href"] == "") {
        document.getElementById(SponsLnk).href = "javascript:setImgPage(" + d + "," + SponsPagetYpe + ");";

    } else {
        document.getElementById(SponsLnk).href = scmSpons[d]["href"];
        document.getElementById(SponsLnk).target = scmSpons[d]["target"];
    }


    document.getElementById(SponsLnk).innerHTML = scmSpons[d]["texte"];
}

function setSponsImage(spName, spId) {

    var str1 = spName;
    var str2 = "lnk";
    var res = str1.concat(str2);

    document.getElementById(spName).src = scmSpons[spId]["src"];

    if (scmSpons[spId]["href"] == "") {
        document.getElementById(spName).alt = scmSpons[spId]["texte"];
        document.getElementById(res).href = "javascript:setImgPage(" + spId + "," + SponsPagetYpe + ");";
    } else {
        document.getElementById(spName).alt = scmSpons[spId]["texte"];
        document.getElementById(res).href = scmSpons[spId]["href"];
        document.getElementById(res).target = scmSpons[spId]["target"];
    }

}


function setSponsLink(SponsLnk, spId) {

    document.getElementById(SponsLnk).href = scmSpons[spId]["href"];
    document.getElementById(SponsLnk).target = scmSpons[spId]["target"];
    document.getElementById(SponsLnk).innerHTML = scmSpons[spId]["texte"];
}

function setImgPage(spId, spType) {

    var spCol = [];
    var spPageTitle = "SC Mariners Auderghem - ";

    if (spType == TeamsPageType) {
        spCol = scmTeams;
    } else if (spType == TrophPageType) {
        spCol = scmTroph;
    } else {
        spCol = scmSpons;
    }

    spPageTitle = spPageTitle + spCol[spId]["Name"];

    var sPath = window.location.pathname;
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

    document.body.innerHTML = '';

    document.write("<!DOCTYPE html>");
    document.write("<html> ");
    document.write("<head>");
    document.write("<title>" + spPageTitle + "</title>");
    document.write("<meta http-equiv='Content-Type' content='text/html; charset=iso-8859-1'>");
    document.write("<link href='SCMStyle.css' rel='stylesheet' type='text/css' />");
    document.write("<!--[if lt IE 9]>");
    document.write("<script src='http://html5shiv.googlecode.com/svn/trunk/html5.js'></script>");
    document.write("<![endif]-->");
    document.write("<link rel='stylesheet' href='newsticker.css' type='text/css' />");
    document.write("<script type='text/javascript' src='prototype.js'></script>");
    document.write("<script type='text/javascript' src='effects.js'></script>");
    //        document.write("<script type='text/javascript' src='newsticker.js'></script>");
    //        document.write("<script language='javascript' src='InfosMatchs.js'></script> ");
    //        document.write("<script language='javascript' src='SCMDate.js'></script>");
    //        document.write("<script type='text/javascript' src='scrollDiv.js'></script>");
    document.write("<script type='text/javascript' src='scmsponsors.js'></script>");
    document.write("</head>");


    document.write("    <!--[if IE 6 ]><body class='ie6 old_ie' marginwidth='0' marginheight='0' leftmargin='0' topmargin='0' bgcolor='#FFFFFF'><![endif]-->");
    document.write("    <!--[if IE 7 ]><body class='ie7 old_ie' marginwidth='0' marginheight='0' leftmargin='0' topmargin='0' bgcolor='#FFFFFF'><![endif]-->");
    document.write("    <!--[if IE 8 ]><body class='ie8' marginwidth='0' marginheight='0' leftmargin='0' topmargin='0' bgcolor='#FFFFFF'><![endif]-->");
    document.write("    <!--[if IE 9 ]><body class='ie9' marginwidth='0' marginheight='0' leftmargin='0' topmargin='0' bgcolor='#FFFFFF'><![endif]-->");
    document.write("    <!--[if !IE]><!--><body marginwidth='0' marginheight='0' leftmargin='0' topmargin='0' bgcolor='#FFFFFF'><!--<![endif]-->");
    document.write("    <br />");

    document.write("<div align='center'> <i><strong><font color='#CC0000' size='6' face='Verdana, Arial, Helvetica, sans-serif'> ");
    document.write("  " + spCol[spId]["Name"] + " </font></strong></i> </div>");
    document.write(" 		<br />");

    if (spType != SponsPagetYpe) {
        document.write("<div align='center'> <i><strong><font color='#CC0000' size='3' face='Verdana, Arial, Helvetica, sans-serif'> ");
        document.write("  " + spCol[spId]["Event"] + " </font></strong></i> </div>");
        document.write(" 		<br />");
    }

    document.write("<div align='center'>");

    document.write("        <table border='0' cellpadding='4' cellspacing='2' align='center'>");
    document.write("            <tr>");
    document.write("                <!-- colonne News -->");
    document.write("                <td width='550' align='center' valign='top'>");
    document.write("                    <table width='100%' border='0' cellspacing='0' cellpadding='1'>");
    document.write("                        <tr>");
    document.write("                            <td valign='top' >");
    document.write("                                <!-- News 1 -->");
    document.write("                                <table width='100%' border='0' cellspacing='0' cellpadding='2'>");
    document.write("                                    <tr>");
    document.write("                                        <td class='subnewsheader'>");
    document.write("                                            " + spCol[spId]["texte"]);
    document.write("                                        </td>");
    document.write("                                    </tr>");
    document.write("                                    <tr>");
    document.write("                                        <td class='subnewsbody' valign='top'>");
    document.write("                                            <table width='100%'>");

    document.write("                                                <tr>");
    document.write("                                                    <td align='center'>");
    document.write("                                                        <div align='center'>");
    document.write("             <a id='scmteamid' href='" + spCol[spId]["src"] + "' target='_blank'>");
    document.write("                <img id='scmteamimgid' src='" + spCol[spId]["src"] + "' width='" + spCol[spId]["width"] + "' alt='" + spCol[spId]["Name"] + "' border='0' />");
    document.write("             </a>");
    document.write("                                                        </div>");
    document.write("                                                    </td>");
    document.write("                                                </tr>");
    document.write("                                                <tr>");
    document.write("                                                    <td align='center'>");


    if (spType != SponsPagetYpe) {
        document.write("                                                        <div align='center'><font size='1' face='Verdana, Arial, Helvetica, sans-serif'>");
        document.write("                                                            " + spCol[spId]["desch"] + "<br>" + spCol[spId]["descb"]);
        document.write("                                                        </font></div>");
    } else {
        document.write("                                                        <div align='center'><font size='1' face='Verdana, Arial, Helvetica, sans-serif'>");
        document.write("                                                            " + spCol[spId]["infodesc"]);
        document.write("                                                            <br>" + spCol[spId]["infoAdr"]);
        document.write("                                                            <br>" + spCol[spId]["infoTel"]);
        if (spCol[spId]["infoMail"] != "") {

            document.write("                                                            <br><a href='mailto:" + spCol[spId]["infoMail"] + "' >" + spCol[spId]["infoMail"] + "</a>");
        }


        document.write("                                                        </font></div>");
    }



    document.write("                                                    </td>");
    document.write("                                                </tr>");


    document.write("                                            </table>");
    document.write("                                        </td>");
    document.write("                                    </tr>");
    document.write("                                </table>");
    document.write("                            </td>");
    document.write("                        </tr>");
    document.write("                    </table>");
    document.write("                </td>");
    document.write("                <!-- Fin colonne News -->");
    document.write("            </tr>");

    document.write("        <tr> ");
    document.write("          <td valign='top'> <br /> <div align='center'> <a href='" + sPage + "' target='mainFrame'><font size='1' face='Verdana, Arial, Helvetica, sans-serif'> ");
    document.write("              <strong>Retour</strong></font></a></div>");
    document.write("            <br /> </td>");
    document.write("        </tr>");

    document.write("        </table>");
    document.write("</div>");
    document.write("</body>");
    document.write("</html>");




}




function CreateSponsPage() {

    var spCol = [];
    var spPageTitle = "SC Mariners Auderghem - Sponsors";

    var sPath = window.location.pathname;
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

    var spLine = 0;

    document.write("<!DOCTYPE html>");
    document.write("<html> ");
    document.write("<head>");
    document.write("<title>" + spPageTitle + "</title>");
    document.write("<meta http-equiv='Content-Type' content='text/html; charset=iso-8859-1'>");
    document.write("<link href='SCMStyle.css' rel='stylesheet' type='text/css' />");
    document.write("<!--[if lt IE 9]>");
    document.write("<script src='http://html5shiv.googlecode.com/svn/trunk/html5.js'></script>");
    document.write("<![endif]-->");
    document.write("<link rel='stylesheet' href='newsticker.css' type='text/css' />");
    document.write("<script type='text/javascript' src='prototype.js'></script>");
    document.write("<script type='text/javascript' src='effects.js'></script>");
    //    document.write("<script type='text/javascript' src='newsticker.js'></script>");
    //    document.write("<script language='javascript' src='InfosMatchs.js'></script> ");
    //    document.write("<script language='javascript' src='SCMDate.js'></script>");
    //    document.write("<script type='text/javascript' src='scrollDiv.js'></script>");
    document.write("<script type='text/javascript' src='scmsponsors.js'></script>");
    document.write("</head>");


    document.write("    <!--[if IE 6 ]><body class='ie6 old_ie' marginwidth='0' marginheight='0' leftmargin='0' topmargin='0' bgcolor='#FFFFFF'><![endif]-->");
    document.write("    <!--[if IE 7 ]><body class='ie7 old_ie' marginwidth='0' marginheight='0' leftmargin='0' topmargin='0' bgcolor='#FFFFFF'><![endif]-->");
    document.write("    <!--[if IE 8 ]><body class='ie8' marginwidth='0' marginheight='0' leftmargin='0' topmargin='0' bgcolor='#FFFFFF'><![endif]-->");
    document.write("    <!--[if IE 9 ]><body class='ie9' marginwidth='0' marginheight='0' leftmargin='0' topmargin='0' bgcolor='#FFFFFF'><![endif]-->");
    document.write("    <!--[if !IE]><!--><body marginwidth='0' marginheight='0' leftmargin='0' topmargin='0' bgcolor='#FFFFFF'><!--<![endif]-->");
    document.write("    <br />");


    document.write("<table border='0' cellpadding='4' cellspacing='2' align='center'>");
    document.write("  <tr><td width='100%' align='center' valign='top'>");
    document.write("    <table width='100%' border='0' cellspacing='0' cellpadding='2'>");
    document.write("      <tr><td class='subnewsheader'>Nos Sponsors et Partenaires</td></tr>");

    document.write("      <tr valign='top'><td align='left'>");

    if (nbrSpons != 0) {

        document.write("        <table border='0' width='100%'>");
        document.write("          <tr valign='top'><td align='left'>&nbsp;</td><td align='left'>&nbsp;</td><td align='left'>&nbsp;</td></tr>");

        for (i = 1; i < scmSpons.length; i++) {
            //        for (i = 1; i < 10; i++) {
            spLine = spLine + 1;
            if (spLine == 1) {
                document.write("          <tr valign='top'>");
            }
            document.write("            <td align='center' valign='middle'>");
            document.write("              <div align='center'>");
            document.write("              <a id='spons" + i + "lnk' href='' target=''>");
            document.write("                <img id='spons" + i + "' src='smiley.gif' width='" + scmSpons[i]["width"] + "' alt='' border='0' />");
            document.write("                <script>setSponsImage('spons" + i + "', " + i + ");</script>");
            document.write("              </a>");
            document.write("              </div>");
            document.write("            </td>");
            if (spLine == 3) {
                document.write("          </tr>");
                spLine = 0;
            }

        }

        if (spLine != 3 && spLine != 0) {

            for (i = spLine; i < 3; i++) {
                document.write("            <td align='center' valign='middle'>");
                document.write("            </td>");
                if (i == 3) {
                    document.write("          </tr>");
                }

            }
        }



        document.write("");

        document.write("        </table>");

    }

    document.write("      </td></tr>");

    document.write("        <tr> ");
    document.write("          <td valign='top'> <br /> <div align='center'> <a href='frmMain.htm' target='mainFrame'><font size='1' face='Verdana, Arial, Helvetica, sans-serif'> ");
    document.write("              <strong>Retour</strong></font></a></div>");
    document.write("            <br /> </td>");
    document.write("        </tr>");

    document.write("    </table>");
    document.write("  </td></tr>");
    document.write("</table>");



    document.write("</body>");
    document.write("</html>");




}


function CreatePhotosPage(vType) {

    var spCol = [];
    var spNbrItems = 0;
    var cursaison = "";

    var spPageTitle = "SC Mariners Auderghem - ";

    if (vType == TeamsPageType) {
        spCol = scmTeams;
        spPageTitle = spPageTitle + "Nos Marins";
        spNbrItems = scmTeamsNbr;
    } else {
        spCol = scmTroph;
        spPageTitle = spPageTitle + "Nos Trophees";
        spNbrItems = scmTrophNbr;
    }


    var sPath = window.location.pathname;
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

    var spLine = 0;

    document.write("<!DOCTYPE html>");
    document.write("<html> ");
    document.write("<head>");
    document.write("<title>" + spPageTitle + "</title>");
    document.write("<meta http-equiv='Content-Type' content='text/html; charset=iso-8859-1'>");



    document.write("<link href='SCMStyle.css' rel='stylesheet' type='text/css' />");
    document.write("<!--[if lt IE 9]>");
    document.write("<script src='http://html5shiv.googlecode.com/svn/trunk/html5.js'></script>");
    document.write("<![endif]-->");
    //    document.write("<link rel='stylesheet' href='newsticker.css' type='text/css' />");
    document.write("<script type='text/javascript' src='prototype.js'></script>");
    document.write("<script type='text/javascript' src='effects.js'></script>");
    //        document.write("<script type='text/javascript' src='newsticker.js'></script>");
    //    document.write("<script language='javascript' src='InfosMatchs.js'></script> ");
    //    document.write("<script language='javascript' src='SCMDate.js'></script>");
    //    document.write("<script type='text/javascript' src='scrollDiv.js'></script>");
    document.write("<script type='text/javascript' src='scmsponsors.js'></script>");
    document.write("</head>");


    document.write("    <!--[if IE 6 ]><body class='ie6 old_ie' marginwidth='0' marginheight='0' leftmargin='0' topmargin='0' bgcolor='#FFFFFF'><![endif]-->");
    document.write("    <!--[if IE 7 ]><body class='ie7 old_ie' marginwidth='0' marginheight='0' leftmargin='0' topmargin='0' bgcolor='#FFFFFF'><![endif]-->");
    document.write("    <!--[if IE 8 ]><body class='ie8' marginwidth='0' marginheight='0' leftmargin='0' topmargin='0' bgcolor='#FFFFFF'><![endif]-->");
    document.write("    <!--[if IE 9 ]><body class='ie9' marginwidth='0' marginheight='0' leftmargin='0' topmargin='0' bgcolor='#FFFFFF'><![endif]-->");
    document.write("    <!--[if !IE]><!--><body marginwidth='0' marginheight='0' leftmargin='0' topmargin='0' bgcolor='#FFFFFF'><!--<![endif]-->");
    document.write("    <br />");


    document.write("<table border='0' cellpadding='4' cellspacing='2' align='center'>");
    document.write("  <tr><td width='100%' align='center' valign='top'>");
    document.write("    <table width='100%' border='0' cellspacing='0' cellpadding='2'>");

    if (vType == TeamsPageType) {
        document.write("      <tr><td class='subnewsheader'>Nos Marins</td></tr>");
    } else {
        document.write("      <tr><td class='subnewsheader'>Nos Trophees</td></tr>");
    }


    document.write("      <tr valign='top'><td align='left'>");

    if (spNbrItems != 0) {

        document.write("        <table border='0' width='100%'>");
        document.write("          <tr valign='top'><td align='left'>&nbsp;</td><td align='left'>&nbsp;</td><td align='left'>&nbsp;</td></tr>");

        for (i = 1; i < spCol.length; i++) {
            //            for (i = 1; i < 20; i++) {

            spLine = spLine + 1;
            if (cursaison != spCol[i]["Saison"]) {

                if (spLine != 1) {

                    for (j = spLine; j < 3; j++) {
                        document.write("            <td align='center' valign='middle'>");
                        document.write("            </td>");
                        if (j == 3) {
                            document.write("          </tr>");
                        }

                    }
                    spLine = 1;
                }

                document.write("          <tr valign='top'>");
                document.write("            <td colspan='3' align='left'><div align='center'><font color='#FF0000' size='3'><strong>" + spCol[i]["Saison"] + "</strong></font></div></td>");
                document.write("          </tr>");
                cursaison = spCol[i]["Saison"];
            }

            if (spLine == 1) {
                document.write("          <tr valign='top'>");
            }

            document.write("              <td align='center' valign='middle'>");

            document.write("                <div align='center'>");
            document.write("                <font size='2' face='Verdana, Arial, Helvetica, sans-serif'>");
            document.write("                <img id='scmimg" + i + "' src='smiley.gif' alt='l' />");
            document.write("                <br>");
            document.write("                <a id='scmimg" + i + "Lnk' href='' target=''>link</a> </font>");
            document.write("                <script>");

            if (vType == TeamsPageType) {
                document.write("                setTeamImg(" + i + ", 'scmimg" + i + "', 'scmimg" + i + "Lnk',100);");
            } else {
                document.write("                setTrophImg(" + i + ", 'scmimg" + i + "', 'scmimg" + i + "Lnk', 100);");
            }

            document.write("                </script>");

            document.write("                </div>");
            document.write("              </td>");

            if (spLine == 3) {
                document.write("          </tr>");
                spLine = 0;
            }

        }

        if (spLine != 3 && spLine != 0) {

            for (i = spLine; i < 3; i++) {
                document.write("            <td align='center' valign='middle'>");
                document.write("            </td>");
                if (i == 3) {
                    document.write("          </tr>");
                }

            }
        }



        document.write("");

        document.write("        </table>");

    }

    document.write("      </td></tr>");

    document.write("        <tr> ");
    document.write("          <td valign='top'> <br /> <div align='center'> <a href='frmMain.htm' target='mainFrame'><font size='1' face='Verdana, Arial, Helvetica, sans-serif'> ");
    document.write("              <strong>Retour</strong></font></a></div>");
    document.write("            <br /> </td>");
    document.write("        </tr>");

    document.write("    </table>");
    document.write("  </td></tr>");
    document.write("</table>");



    document.write("</body>");
    document.write("</html>");




}

function CreateGallery(vType) {

    // vType 
    //Global var TeamsPageType = 1;
    //Global var TrophPageType = 2;
    //Global var SponsPagetYpe = 3;

    var spCol = [];
    //
    //Global var scmSpons = [];
    //Global var scmTeams = [];
    //Global var scmTroph = [];

    var spNbrItems = 0;
    var cursaison = "";


    var spPageTitle = "SC Mariners Auderghem - ";

    switch (vType) {
        case TeamsPageType:
            spCol = scmTeams;
            spPageTitle = spPageTitle + "Nos Marins";
            spNbrItems = scmTeamsNbr;
            break;
        case TrophPageType:
            spCol = scmTroph;
            spPageTitle = spPageTitle + "Nos Trophees";
            spNbrItems = scmTrophNbr;
            break;
        default:
            spCol = scmSpons;
            spPageTitle = spPageTitle + "Nos Sponsors";
            spNbrItems = nbrSpons;
    }


    var sPath = window.location.pathname;
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

    var spLine = 0;

    document.write("<!DOCTYPE html>");
    document.write("<html> ");
    document.write("<head>");
    document.write("<title>" + spPageTitle + "</title>");
    document.write("<meta http-equiv='Content-Type' content='text/html;charset=UTF-8'>");

    document.write("<script type='text/javascript' src='scmsponsors.js'></script>");
    document.write("<script type='text/javascript' src='scmmenunew.js'></script>");
    document.write("<link rel='stylesheet' href='SCMStylenew.css'>");
    document.write("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>");
    document.write("</head>");

    document.write("<style>");
    document.write("* {");
    document.write("  box-sizing: border-box;");
    document.write("}");
    document.write("</style>");

    document.write("<body>");


    document.write("    <div class='scm-menu-container'>");
    document.write("        <div w3-include-html='SCMMenuPush.htm'>");
    document.write("        </div>");
    document.write("    </div>");
    document.write("    <script>         includeHTML();     </script>");

    document.write("    <div class='scm-header' id='myHeader'>");
    document.write("        <img src='https://lh3.googleusercontent.com/_bZfXkh9N7hstRVbWdGBIJaj2tVWPYNARFK2A-0pn159j2P3q76_IROl81rLSesZV68EQWLM6vVUxgN9FYK6sD_fwIMIUeGj3Ksud7l3-XAb2I-IPZwgQPGwr1dUCePy4dL1zfonNf6gONbLIFgBX8mXVu8TrHqZHvFlJgog5tEsIACI_4G4zXkdx8XIQWkdHMy4X8IJp3TT6fXcIRJ1E4btvfsH9egSEDBPEA0q3OOqAfpA5tWzUjKdGIdsQFLNmfGQcJoJkF0MYtG71pTqCE9VhH5Xi_Zw6dj-H1WbbmFOTmbnfTzYrZgFOTNEd1TilhAvJhmLVXlvKDbgF-vjUe0MOGqbLUC0Y_tyLh6hfLl4hOwIZAFtwHYx14MlZiAHPxssM11IXmIEP7yFjItVCo_aEGB6Uyd89MD6NmCIYSnrwvwJAHVc-D7JV4jZJ3tyziuVHI9RuceL17p8drgHa1zML6XYwt3YMUIfQzkS01rjND53-Q23OrSj60qSm0aLhhwxWNw6jyiIMYI1uPdQevar8IvL8PtF4VsC3xsZMqQtm7eGsGvHkwev0eYjPH5_8WQRryL3RBTUr8_94eoHjjdKjQKXibOJDZhRBIMq2xnhzEo65NrTACvT3X2ymy3a6XgDgfhy_jFJ12k02jveYhs_A135R8A=w737-h354-no' class='scm-header-img-responsive'>");
    document.write("        <div class='scm-header-txt-container'>");

    document.write("            <p class='scm-header-txt-big'>");
    document.write("" + spPageTitle + "</p>");

    document.write("        </div>");
    document.write("    </div>");


    if (spNbrItems != 0) {

        for (i = 1; i < spCol.length; i++) {

            spLine = spLine + 1;

            document.write("<div class='scm-gallery-responsive-container'>");
            document.write("    <div class='scm-gallery-container'>");
            document.write("        <a target='_blank' href='" + spCol[i]["src"] + "'>");
            document.write("            <img src='" + spCol[i]["src"] + "' alt='" + spCol[i]["Name"] + "' width='250' height='200'>"); // 
            document.write("        </a>");

            switch (vType) {
                case TeamsPageType:
                    document.write("        <div class='desc'>" + spCol[i]["Event"] + "<br/>" + spCol[i]["Name"] + "");
                    break;
                case TrophPageType:
                    document.write("        <div class='desc'>" + spCol[i]["Event"] + "<br/>" + spCol[i]["Name"] + "");
                    break;
                default:
                    document.write("        <div class='desc' align='center'>" + spCol[i]["Name"] + "");
                    if (spCol[i]["webname"] != "") {
                        document.write("        <br/><i class='fa fa-laptop' fa-fw></i> ");
                        document.write("        <a target='_blank' href='" + spCol[i]["href"] + "'>")
                        document.write("        " + spCol[i]["webname"] + "");
                        document.write("        </a>");
                    }
                    if (spCol[i]["fb"] != "") {
                        document.write("        <br/><a target='_blank' href='" + spCol[i]["fb"] + "'>")
                        document.write("        <i class='fa fa-facebook-official' fa-fw></i>");
                        document.write("        </a>");
                    }


            }


            document.write("        </div>");
            document.write("    </div>");
            document.write("</div>");


        }

        document.write("</div>");

    }

    document.write("</div>");


    document.write("<div class='scm-iframe-container'>");
    document.write("    <iframe class='scm-responsive-iframe' src='SCMSponsFooter.htm' gesture='media' scrolling='no'");
    document.write("        allow='encrypted-media' allowfullscreen></iframe>");
    document.write("</div>");


    document.write("</body>");
    document.write("</html>");

}

function setSponsOfDaynew() {
    var d = getNumDayOfYear() % nbrSpons;

    document.write("        <a target='_blank' href='" + scmSpons[d]["src"] + "'>");
    document.write("            <img src='" + scmSpons[d]["src"] + "' alt='" + scmSpons[d]["Name"] + "' width='" + scmSpons[d]["width"] + "'>"); // 
    document.write("        </a>");


    document.write("        <div class='desc' align='center'>" + scmSpons[d]["Name"] + "");
    if (scmSpons[d]["webname"] != "") {
        document.write("        <br/><i class='fa fa-laptop' fa-fw></i> ");
        document.write("        <a target='_blank' href='" + scmSpons[d]["href"] + "'>")
        document.write("        " + scmSpons[d]["webname"] + "");
        document.write("        </a>");
    }
    if (scmSpons[d]["fb"] != "") {
        document.write("        <br/><a target='_blank' href='" + scmSpons[d]["fb"] + "'>")
        document.write("        <i class='fa fa-facebook-official' fa-fw></i>");
        document.write("        </a>");
    }




    document.write("        </div>");


}

function setImageOfDaynew() {
    var d = getNumDayOfYear() % scmTeamsNbr;

    document.write("        <a target='_blank' href='" + scmTeams[d]["src"] + "'>");
    //document.write("            <img src='" + scmTeams[d]["src"] + "' alt='" + scmTeams[d]["Name"] + "' width='" + scmTeams[d]["width"] + "'>"); // 
    document.write("            <img class='scm-news-img-responsive'  src='" + scmTeams[d]["src"] + "' alt='" + scmTeams[d]["Name"] + "'>"); // 


    document.write("        </a>");


    document.write("        <div class='desc' align='center'>" + scmTeams[d]["Name"] + "");

    document.write("        <br/>" + scmTeams[d]["Event"] + "");
    document.write("        </div>");


}

function GetLastFBNews() {


    document.write("        <iframe src='" + fbnews[lastnews[nbrNews]]["src"] + "'");
    document.write("            width='100%' height='600px' style='border: none; overflow: hidden' scrolling='yes'"); // 
    document.write("            frameborder='0' allowtransparency='true' allow='encrypted-media' allowfullscreen>");
    document.write("        </iframe>");


}

function GetFBNews(fbdate) {


    document.write("        <iframe src='" + fbnews[fbdate]["src"] + "'");
    document.write("            width='100%' height='600px' style='border: none; overflow: hidden' scrolling='yes'"); // 
    document.write("            frameborder='0' allowtransparency='true' allow='encrypted-media' allowfullscreen>");
    document.write("        </iframe>");


}


function SetImageItem(value) {

    var spCol = [];


    if (value > nbrSpons) {
        spCol = scmOldSpons;
    } else {
        spCol = scmSpons;
    }

    document.write("<div class='scm-gallery-responsive-container'>");
    document.write("    <div class='scm-gallery-container'>");
    document.write("        <a target='_blank' href='" + spCol[value]["src"] + "'>");
    document.write("            <img src='" + spCol[value]["src"] + "' alt='" + spCol[value]["Name"] + "' width='50' >");
    document.write("        </a>");



    document.write("        <div class='desc' align='center'>" + spCol[value]["Name"] + "");
    if (spCol[value]["webname"] != "") {
        document.write("        <br/><i class='fa fa-laptop' fa-fw></i> ");
        document.write("        <a target='_blank' href='" + spCol[value]["href"] + "'>")
        document.write("        " + spCol[value]["webname"] + "");
        document.write("        </a>");
    }
    if (spCol[value]["fb"] != "") {
        document.write("        <br/><a target='_blank' href='" + spCol[value]["fb"] + "'>")
        document.write("        <i class='fa fa-facebook-official' fa-fw></i>");
        document.write("        </a>");
    }





    document.write("        </div>");
    document.write("    </div>");
    document.write("</div>");

}


function CreateSponsGallery(vChallenge) {


    var spNbrItems = 0;

    spNbrItems = vChallenge.length;



    if (spNbrItems != 0) {

        vChallenge.forEach(SetImageItem);


    }



}

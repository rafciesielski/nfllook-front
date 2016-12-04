import {Injectable} from '@angular/core';

export interface OppsOfPlayedGames {
    wins: number;
    losses: number;
    draws: number;
}

export interface OppsOfRemainingGames {
    wins: number;
    losses: number;
    draws: number;
}

export interface Team {
    name: string;
    wins: number;
    losses: number;
    draws: number;
    oppsOfPlayedGames: OppsOfPlayedGames;
    oppsOfRemainingGames: OppsOfRemainingGames;
}

export interface Division {
    name: string;
    teams: Team[];
}

export interface Conference {
    name: string;
    divisions: Division[];
}

export interface Standings {
    _id: string;
    week: number;
    conferences: Conference[];
}

@Injectable()
export class StandingsService {

    private standings = {
        "_id": "2016_13",
        "week": 13,
        "conferences": [
            {
                "name": "AFC",
                "divisions": [
                    {
                        "name": "East",
                        "teams": [
                            {
                                "name": "BUF",
                                "wins": 6,
                                "losses": 5,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "MIA",
                                "wins": 7,
                                "losses": 4,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "NE",
                                "wins": 9,
                                "losses": 2,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "NYJ",
                                "wins": 3,
                                "losses": 8,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            }
                        ]
                    },
                    {
                        "name": "North",
                        "teams": [
                            {
                                "name": "BAL",
                                "wins": 6,
                                "losses": 5,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "CIN",
                                "wins": 3,
                                "losses": 7,
                                "draws": 1,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "CLE",
                                "wins": 0,
                                "losses": 12,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "PIT",
                                "wins": 6,
                                "losses": 5,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            }
                        ]
                    },
                    {
                        "name": "South",
                        "teams": [
                            {
                                "name": "HOU",
                                "wins": 6,
                                "losses": 5,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "IND",
                                "wins": 5,
                                "losses": 6,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "JAX",
                                "wins": 2,
                                "losses": 9,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "TEN",
                                "wins": 6,
                                "losses": 6,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            }
                        ]
                    },
                    {
                        "name": "West",
                        "teams": [
                            {
                                "name": "DEN",
                                "wins": 7,
                                "losses": 4,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "KC",
                                "wins": 8,
                                "losses": 3,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "OAK",
                                "wins": 9,
                                "losses": 2,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "SD",
                                "wins": 5,
                                "losses": 6,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "name": "NFC",
                "divisions": [
                    {
                        "name": "East",
                        "teams": [
                            {
                                "name": "DAL",
                                "wins": 10,
                                "losses": 1,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "NYG",
                                "wins": 8,
                                "losses": 3,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "PHI",
                                "wins": 5,
                                "losses": 6,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "WAS",
                                "wins": 6,
                                "losses": 4,
                                "draws": 1,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            }
                        ]
                    },
                    {
                        "name": "North",
                        "teams": [
                            {
                                "name": "CHI",
                                "wins": 2,
                                "losses": 9,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "DET",
                                "wins": 7,
                                "losses": 4,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "GB",
                                "wins": 5,
                                "losses": 6,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "MIN",
                                "wins": 6,
                                "losses": 5,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            }
                        ]
                    },
                    {
                        "name": "South",
                        "teams": [
                            {
                                "name": "ATL",
                                "wins": 7,
                                "losses": 4,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "CAR",
                                "wins": 4,
                                "losses": 7,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "NO",
                                "wins": 5,
                                "losses": 6,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "TB",
                                "wins": 6,
                                "losses": 5,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            }
                        ]
                    },
                    {
                        "name": "West",
                        "teams": [
                            {
                                "name": "ARI",
                                "wins": 4,
                                "losses": 6,
                                "draws": 1,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "LA",
                                "wins": 4,
                                "losses": 7,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "SF",
                                "wins": 1,
                                "losses": 10,
                                "draws": 0,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            },
                            {
                                "name": "SEA",
                                "wins": 7,
                                "losses": 3,
                                "draws": 1,
                                "oppsOfPlayedGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                },
                                "oppsOfRemainingGames": {
                                    "wins": 0,
                                    "losses": 0,
                                    "draws": 0
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    };

    get(week: number) {
        return this.standings;
    }
}

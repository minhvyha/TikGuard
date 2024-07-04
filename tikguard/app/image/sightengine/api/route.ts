// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server';
const axios = require('axios');
export const dynamic = 'force-dynamic'; // <- add this to force dynamic render

export async function GET(request: NextRequest) {
  // try {
  //   let url = request.nextUrl.searchParams.get('url') ?? '';

  //   const result = await fetch(
  //     'https://api.sightengine.com/1.0/check.json?' +
  //       new URLSearchParams({
  //         url: url,
  //         models:
  //           'nudity-2.1,weapon,alcohol,recreational_drug,offensive,gore-2.0,qr-content,tobacco,violence,self-harm,money,gambling',
  //         api_user: process.env.SIGHTENGINE_USER ?? '',
  //         api_secret: process.env.SIGHTENGINE_SECRET ?? '',
  //       }),
  //     {
  //       method: 'GET',
  //     }
  //   );
  //   const data = await result.json();

  //   return NextResponse.json(data);
  // } catch (error) {
  //   console.error('Error uploading file:', error);
  //   return NextResponse.json({ error });
  // }
  let result = {
    "status": "success",
    "request": {
        "id": "req_gyziWGpcR4TOYZ3t2yjyU",
        "timestamp": 1719996773.076914,
        "operations": 11
    },
    "nudity": {
        "sexual_activity": 0.01,
        "sexual_display": 0.01,
        "erotica": 0.01,
        "very_suggestive": 0.01,
        "suggestive": 0.01,
        "mildly_suggestive": 0.03,
        "suggestive_classes": {
            "bikini": 0.01,
            "cleavage": 0.01,
            "cleavage_categories": {
                "very_revealing": 0.01,
                "revealing": 0.01,
                "none": 0.99
            },
            "lingerie": 0.01,
            "male_chest": 0.01,
            "male_chest_categories": {
                "very_revealing": 0.01,
                "revealing": 0.01,
                "slightly_revealing": 0.01,
                "none": 0.99
            },
            "male_underwear": 0.01,
            "miniskirt": 0.01,
            "minishort": 0.01,
            "nudity_art": 0.01,
            "schematic": 0.01,
            "sextoy": 0.01,
            "suggestive_focus": 0.01,
            "suggestive_pose": 0.01,
            "swimwear_male": 0.01,
            "swimwear_one_piece": 0.01,
            "visibly_undressed": 0.01,
            "other": 0.01
        },
        "none": 0.97,
        "context": {
            "sea_lake_pool": 0.03,
            "outdoor_other": 0.81,
            "indoor_other": 0.16
        }
    },
    "weapon": {
        "classes": {
            "firearm": 0.01,
            "firearm_gesture": 0.01,
            "firearm_toy": 0.01,
            "knife": 0.01
        },
        "firearm_type": {
            "animated": 0.01
        },
        "firearm_action": {
            "aiming_threat": 0.01,
            "aiming_safe": 0.01,
            "in_hand_not_aiming": 0.01,
            "worn_not_in_hand": 0.01,
            "not_worn": 0.01
        }
    },
    "recreational_drug": {
        "prob": 0.01,
        "classes": {
            "cannabis": 0.01,
            "cannabis_logo_only": 0.01,
            "cannabis_plant": 0.01,
            "cannabis_drug": 0.01,
            "recreational_drugs_not_cannabis": 0.01
        }
    },
    "medical": {
        "prob": 0.01,
        "classes": {
            "pills": 0.01,
            "paraphernalia": 0.01
        }
    },
    "alcohol": {
        "prob": 0.01
    },
    "offensive": {
        "prob": 0.01,
        "nazi": 0.01,
        "confederate": 0.01,
        "supremacist": 0.01,
        "terrorist": 0.01,
        "middle_finger": 0.01
    },
    "gore": {
        "prob": 0.01,
        "classes": {
            "very_bloody": 0.01,
            "slightly_bloody": 0.01,
            "body_organ": 0.01,
            "serious_injury": 0.01,
            "superficial_injury": 0.01,
            "corpse": 0.01,
            "skull": 0.01,
            "unconscious": 0.01,
            "body_waste": 0.01,
            "other": 0.01
        },
        "type": {
            "animated": 0.01,
            "fake": 0.01,
            "real": 0.01
        }
    },
    "tobacco": {
        "prob": 0.01,
        "classes": {
            "regular_tobacco": 0.01,
            "ambiguous_tobacco": 0.01
        }
    },
    "violence": {
        "prob": 0.01,
        "classes": {
            "physical_violence": 0.01,
            "firearm_threat": 0.01,
            "combat_sport": 0.01
        }
    },
    "self-harm": {
        "prob": 0.01,
        "type": {
            "real": 0.01,
            "fake": 0.01,
            "animated": 0.01
        }
    },
    "money": {
        "prob": 0.01
    },
    "gambling": {
        "prob": 0.01
    },
    "media": {
        "id": "med_gyziMYNSrxx9DWTKyAEPN",
        "uri": "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
    }
}
delete result?.request;
delete result?.status;
delete result?.media

return NextResponse.json(result);
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as Blob;
  console.log(file);

  let data = new FormData();
  data.append('media', file);
  data.append(
    'models',
    'nudity-2.1,weapon,alcohol,recreational_drug,offensive,gore-2.0,tobacco,violence,self-harm,money,gambling'
  );
  data.append('api_user', process.env.SIGHTENGINE_USER ?? '');
  data.append('api_secret', process.env.SIGHTENGINE_SECRET ?? '');

  const response = await axios({
    method: 'post',
    url: 'https://api.sightengine.com/1.0/check.json',
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data',
      models:
        'nudity-2.1,weapon,alcohol,recreational_drug,medical,offensive,text-content,gore-2.0,tobacco,violence,self-harm,money,gambling',
    },
  });

  return NextResponse.json(response.data);
}

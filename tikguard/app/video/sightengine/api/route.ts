import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'; // <- add this to force dynamic render
export const maxDuration = 60;
var sightengine = require('sightengine')(
  process.env.VIDEO_USER,
  process.env.VIDEO_SECRET
);

export async function GET(request: NextRequest) {
  try {
    // let url = request.nextUrl.searchParams.get('url') ?? '';

    // const result = await sightengine.check(['nudity-2.1,weapon,alcohol,recreational_drug,offensive,gore-2.0,tobacco,violence,self-harm,money,gambling']).video_sync(url)

    // let returnData = cleanData(result);
    let returnData = {
          "nudity": [
              {
                  "time": 0,
                  "classes": {
                      "sexual_activity": 0.01,
                      "sexual_display": 0.01,
                      "erotica": 0.01,
                      "very_suggestive": 0.01,
                      "suggestive": 0.01,
                      "mildly_suggestive": 0.03,
                      "bikini": 0.01,
                      "cleavage": 0.01,
                      "cleavage_categories": 0.010000000000000009,
                      "lingerie": 0.01,
                      "male_chest": 0.01,
                      "male_chest_categories": 0.010000000000000009,
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
                      "other": 0.01,
                      "sea_lake_pool": 0.01,
                      "outdoor_other": 0.12,
                      "indoor_other": 0.88
                  }
              },
              {
                  "time": 2,
                  "classes": {
                      "sexual_activity": 0.01,
                      "sexual_display": 0.01,
                      "erotica": 0.01,
                      "very_suggestive": 0.01,
                      "suggestive": 0.01,
                      "mildly_suggestive": 0.03,
                      "bikini": 0.01,
                      "cleavage": 0.01,
                      "cleavage_categories": 0.010000000000000009,
                      "lingerie": 0.01,
                      "male_chest": 0.01,
                      "male_chest_categories": 0.010000000000000009,
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
                      "other": 0.01,
                      "sea_lake_pool": 0.01,
                      "outdoor_other": 0.3,
                      "indoor_other": 0.7
                  }
              },
              {
                  "time": 4,
                  "classes": {
                      "sexual_activity": 0.01,
                      "sexual_display": 0.01,
                      "erotica": 0.01,
                      "very_suggestive": 0.01,
                      "suggestive": 0.02,
                      "mildly_suggestive": 0.04,
                      "bikini": 0.01,
                      "cleavage": 0.01,
                      "cleavage_categories": 0.010000000000000009,
                      "lingerie": 0.01,
                      "male_chest": 0.02,
                      "male_chest_categories": 0.020000000000000018,
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
                      "other": 0.01,
                      "sea_lake_pool": 0.01,
                      "outdoor_other": 0.19,
                      "indoor_other": 0.81
                  }
              },
              {
                  "time": 6,
                  "classes": {
                      "sexual_activity": 0.01,
                      "sexual_display": 0.01,
                      "erotica": 0.01,
                      "very_suggestive": 0.01,
                      "suggestive": 0.01,
                      "mildly_suggestive": 0.03,
                      "bikini": 0.01,
                      "cleavage": 0.01,
                      "cleavage_categories": 0.010000000000000009,
                      "lingerie": 0.01,
                      "male_chest": 0.01,
                      "male_chest_categories": 0.010000000000000009,
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
                      "other": 0.01,
                      "sea_lake_pool": 0.01,
                      "outdoor_other": 0.15,
                      "indoor_other": 0.85
                  }
              },
              {
                  "time": 8,
                  "classes": {
                      "sexual_activity": 0.01,
                      "sexual_display": 0.01,
                      "erotica": 0.01,
                      "very_suggestive": 0.01,
                      "suggestive": 0.01,
                      "mildly_suggestive": 0.03,
                      "bikini": 0.01,
                      "cleavage": 0.01,
                      "cleavage_categories": 0.010000000000000009,
                      "lingerie": 0.01,
                      "male_chest": 0.01,
                      "male_chest_categories": 0.010000000000000009,
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
                      "other": 0.01,
                      "sea_lake_pool": 0.01,
                      "outdoor_other": 0.18,
                      "indoor_other": 0.82
                  }
              },
              {
                  "time": 10,
                  "classes": {
                      "sexual_activity": 0.01,
                      "sexual_display": 0.01,
                      "erotica": 0.01,
                      "very_suggestive": 0.01,
                      "suggestive": 0.01,
                      "mildly_suggestive": 0.03,
                      "bikini": 0.01,
                      "cleavage": 0.01,
                      "cleavage_categories": 0.010000000000000009,
                      "lingerie": 0.01,
                      "male_chest": 0.01,
                      "male_chest_categories": 0.010000000000000009,
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
                      "other": 0.01,
                      "sea_lake_pool": 0.01,
                      "outdoor_other": 0.14,
                      "indoor_other": 0.85
                  }
              },
              {
                  "time": 12,
                  "classes": {
                      "sexual_activity": 0.01,
                      "sexual_display": 0.01,
                      "erotica": 0.01,
                      "very_suggestive": 0.01,
                      "suggestive": 0.01,
                      "mildly_suggestive": 0.03,
                      "bikini": 0.01,
                      "cleavage": 0.01,
                      "cleavage_categories": 0.010000000000000009,
                      "lingerie": 0.01,
                      "male_chest": 0.01,
                      "male_chest_categories": 0.010000000000000009,
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
                      "other": 0.01,
                      "sea_lake_pool": 0.02,
                      "outdoor_other": 0.88,
                      "indoor_other": 0.1
                  }
              },
              {
                  "time": 14,
                  "classes": {
                      "sexual_activity": 0.01,
                      "sexual_display": 0.01,
                      "erotica": 0.01,
                      "very_suggestive": 0.01,
                      "suggestive": 0.01,
                      "mildly_suggestive": 0.03,
                      "bikini": 0.01,
                      "cleavage": 0.01,
                      "cleavage_categories": 0.010000000000000009,
                      "lingerie": 0.01,
                      "male_chest": 0.01,
                      "male_chest_categories": 0.010000000000000009,
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
                      "other": 0.01,
                      "sea_lake_pool": 0.05,
                      "outdoor_other": 0.64,
                      "indoor_other": 0.31
                  }
              }
          ],
          "money": [
              {
                  "time": 0,
                  "classes": {
                      "money": 0.01
                  }
              },
              {
                  "time": 2,
                  "classes": {
                      "money": 0.01
                  }
              },
              {
                  "time": 4,
                  "classes": {
                      "money": 0.01
                  }
              },
              {
                  "time": 6,
                  "classes": {
                      "money": 0.01
                  }
              },
              {
                  "time": 8,
                  "classes": {
                      "money": 0.01
                  }
              },
              {
                  "time": 10,
                  "classes": {
                      "money": 0.01
                  }
              },
              {
                  "time": 12,
                  "classes": {
                      "money": 0.01
                  }
              },
              {
                  "time": 14,
                  "classes": {
                      "money": 0.01
                  }
              }
          ],
          "self-harm": [
              {
                  "time": 0,
                  "classes": {
                      "self_harm": 0.01,
                      "real": 0.01,
                      "fake": 0.01,
                      "animated": 0.01
                  }
              },
              {
                  "time": 2,
                  "classes": {
                      "self_harm": 0.01,
                      "real": 0.01,
                      "fake": 0.01,
                      "animated": 0.01
                  }
              },
              {
                  "time": 4,
                  "classes": {
                      "self_harm": 0.01,
                      "real": 0.01,
                      "fake": 0.01,
                      "animated": 0.01
                  }
              },
              {
                  "time": 6,
                  "classes": {
                      "self_harm": 0.01,
                      "real": 0.01,
                      "fake": 0.01,
                      "animated": 0.01
                  }
              },
              {
                  "time": 8,
                  "classes": {
                      "self_harm": 0.01,
                      "real": 0.01,
                      "fake": 0.01,
                      "animated": 0.01
                  }
              },
              {
                  "time": 10,
                  "classes": {
                      "self_harm": 0.01,
                      "real": 0.01,
                      "fake": 0.01,
                      "animated": 0.01
                  }
              },
              {
                  "time": 12,
                  "classes": {
                      "self_harm": 0.01,
                      "real": 0.01,
                      "fake": 0.01,
                      "animated": 0.01
                  }
              },
              {
                  "time": 14,
                  "classes": {
                      "self_harm": 0.01,
                      "real": 0.01,
                      "fake": 0.01,
                      "animated": 0.01
                  }
              }
          ],
          "gore": [
              {
                  "time": 0,
                  "classes": {
                      "gore": 0.01,
                      "very_bloody": 0.01,
                      "slightly_bloody": 0.01,
                      "body_organ": 0.01,
                      "serious_injury": 0.01,
                      "superficial_injury": 0.01,
                      "corpse": 0.01,
                      "skull": 0.01,
                      "unconscious": 0.01,
                      "body_waste": 0.01,
                      "other": 0.01,
                      "animated": 0.01,
                      "fake": 0.01,
                      "real": 0.01
                  }
              },
              {
                  "time": 2,
                  "classes": {
                      "gore": 0.01,
                      "very_bloody": 0.01,
                      "slightly_bloody": 0.01,
                      "body_organ": 0.01,
                      "serious_injury": 0.01,
                      "superficial_injury": 0.01,
                      "corpse": 0.01,
                      "skull": 0.01,
                      "unconscious": 0.01,
                      "body_waste": 0.01,
                      "other": 0.01,
                      "animated": 0.01,
                      "fake": 0.01,
                      "real": 0.01
                  }
              },
              {
                  "time": 4,
                  "classes": {
                      "gore": 0.01,
                      "very_bloody": 0.01,
                      "slightly_bloody": 0.01,
                      "body_organ": 0.01,
                      "serious_injury": 0.01,
                      "superficial_injury": 0.01,
                      "corpse": 0.01,
                      "skull": 0.15,
                      "unconscious": 0.01,
                      "body_waste": 0.01,
                      "other": 0.01,
                      "animated": 0.01,
                      "fake": 0.01,
                      "real": 0.01
                  }
              },
              {
                  "time": 6,
                  "classes": {
                      "gore": 0.01,
                      "very_bloody": 0.01,
                      "slightly_bloody": 0.01,
                      "body_organ": 0.01,
                      "serious_injury": 0.01,
                      "superficial_injury": 0.01,
                      "corpse": 0.01,
                      "skull": 0.01,
                      "unconscious": 0.01,
                      "body_waste": 0.01,
                      "other": 0.01,
                      "animated": 0.01,
                      "fake": 0.01,
                      "real": 0.01
                  }
              },
              {
                  "time": 8,
                  "classes": {
                      "gore": 0.01,
                      "very_bloody": 0.01,
                      "slightly_bloody": 0.01,
                      "body_organ": 0.01,
                      "serious_injury": 0.01,
                      "superficial_injury": 0.01,
                      "corpse": 0.01,
                      "skull": 0.01,
                      "unconscious": 0.01,
                      "body_waste": 0.01,
                      "other": 0.01,
                      "animated": 0.01,
                      "fake": 0.01,
                      "real": 0.01
                  }
              },
              {
                  "time": 10,
                  "classes": {
                      "gore": 0.01,
                      "very_bloody": 0.01,
                      "slightly_bloody": 0.01,
                      "body_organ": 0.01,
                      "serious_injury": 0.01,
                      "superficial_injury": 0.01,
                      "corpse": 0.01,
                      "skull": 0.01,
                      "unconscious": 0.01,
                      "body_waste": 0.01,
                      "other": 0.01,
                      "animated": 0.01,
                      "fake": 0.01,
                      "real": 0.01
                  }
              },
              {
                  "time": 12,
                  "classes": {
                      "gore": 0.01,
                      "very_bloody": 0.01,
                      "slightly_bloody": 0.01,
                      "body_organ": 0.01,
                      "serious_injury": 0.01,
                      "superficial_injury": 0.01,
                      "corpse": 0.01,
                      "skull": 0.01,
                      "unconscious": 0.01,
                      "body_waste": 0.01,
                      "other": 0.01,
                      "animated": 0.01,
                      "fake": 0.01,
                      "real": 0.01
                  }
              },
              {
                  "time": 14,
                  "classes": {
                      "gore": 0.01,
                      "very_bloody": 0.01,
                      "slightly_bloody": 0.01,
                      "body_organ": 0.01,
                      "serious_injury": 0.01,
                      "superficial_injury": 0.01,
                      "corpse": 0.01,
                      "skull": 0.01,
                      "unconscious": 0.01,
                      "body_waste": 0.01,
                      "other": 0.01,
                      "animated": 0.01,
                      "fake": 0.01,
                      "real": 0.01
                  }
              }
          ],
          "offensive": [
              {
                  "time": 0,
                  "classes": {
                      "offensive": 0.01,
                      "nazi": 0.01,
                      "confederate": 0.01,
                      "supremacist": 0.01,
                      "terrorist": 0.01,
                      "middle_finger": 0.01
                  }
              },
              {
                  "time": 2,
                  "classes": {
                      "offensive": 0.01,
                      "nazi": 0.01,
                      "confederate": 0.01,
                      "supremacist": 0.01,
                      "terrorist": 0.01,
                      "middle_finger": 0.01
                  }
              },
              {
                  "time": 4,
                  "classes": {
                      "offensive": 0.01,
                      "nazi": 0.01,
                      "confederate": 0.01,
                      "supremacist": 0.01,
                      "terrorist": 0.01,
                      "middle_finger": 0.01
                  }
              },
              {
                  "time": 6,
                  "classes": {
                      "offensive": 0.01,
                      "nazi": 0.01,
                      "confederate": 0.01,
                      "supremacist": 0.01,
                      "terrorist": 0.01,
                      "middle_finger": 0.01
                  }
              },
              {
                  "time": 8,
                  "classes": {
                      "offensive": 0.01,
                      "nazi": 0.01,
                      "confederate": 0.01,
                      "supremacist": 0.01,
                      "terrorist": 0.01,
                      "middle_finger": 0.01
                  }
              },
              {
                  "time": 10,
                  "classes": {
                      "offensive": 0.01,
                      "nazi": 0.01,
                      "confederate": 0.01,
                      "supremacist": 0.01,
                      "terrorist": 0.01,
                      "middle_finger": 0.01
                  }
              },
              {
                  "time": 12,
                  "classes": {
                      "offensive": 0.01,
                      "nazi": 0.01,
                      "confederate": 0.01,
                      "supremacist": 0.01,
                      "terrorist": 0.01,
                      "middle_finger": 0.01
                  }
              },
              {
                  "time": 14,
                  "classes": {
                      "offensive": 0.01,
                      "nazi": 0.01,
                      "confederate": 0.01,
                      "supremacist": 0.01,
                      "terrorist": 0.01,
                      "middle_finger": 0.01
                  }
              }
          ],
          "weapon": [
              {
                  "time": 0,
                  "classes": {
                      "firearm": 0.01,
                      "firearm_gesture": 0.01,
                      "firearm_toy": 0.01,
                      "knife": 0.01,
                      "animated": 0.01,
                      "aiming_threat": 0.01,
                      "aiming_safe": 0.01,
                      "in_hand_not_aiming": 0.01,
                      "worn_not_in_hand": 0.01,
                      "not_worn": 0.01
                  }
              },
              {
                  "time": 2,
                  "classes": {
                      "firearm": 0.01,
                      "firearm_gesture": 0.01,
                      "firearm_toy": 0.01,
                      "knife": 0.01,
                      "animated": 0.01,
                      "aiming_threat": 0.01,
                      "aiming_safe": 0.01,
                      "in_hand_not_aiming": 0.01,
                      "worn_not_in_hand": 0.01,
                      "not_worn": 0.01
                  }
              },
              {
                  "time": 4,
                  "classes": {
                      "firearm": 0.1,
                      "firearm_gesture": 0.01,
                      "firearm_toy": 0.01,
                      "knife": 0.01,
                      "animated": 0.87,
                      "aiming_threat": 0.01,
                      "aiming_safe": 0.01,
                      "in_hand_not_aiming": 0.02,
                      "worn_not_in_hand": 0.01,
                      "not_worn": 0.97
                  }
              },
              {
                  "time": 6,
                  "classes": {
                      "firearm": 0.01,
                      "firearm_gesture": 0.01,
                      "firearm_toy": 0.01,
                      "knife": 0.01,
                      "animated": 0.01,
                      "aiming_threat": 0.01,
                      "aiming_safe": 0.01,
                      "in_hand_not_aiming": 0.01,
                      "worn_not_in_hand": 0.01,
                      "not_worn": 0.01
                  }
              },
              {
                  "time": 8,
                  "classes": {
                      "firearm": 0.01,
                      "firearm_gesture": 0.01,
                      "firearm_toy": 0.01,
                      "knife": 0.01,
                      "animated": 0.01,
                      "aiming_threat": 0.01,
                      "aiming_safe": 0.01,
                      "in_hand_not_aiming": 0.01,
                      "worn_not_in_hand": 0.01,
                      "not_worn": 0.01
                  }
              },
              {
                  "time": 10,
                  "classes": {
                      "firearm": 0.01,
                      "firearm_gesture": 0.01,
                      "firearm_toy": 0.01,
                      "knife": 0.01,
                      "animated": 0.01,
                      "aiming_threat": 0.01,
                      "aiming_safe": 0.01,
                      "in_hand_not_aiming": 0.01,
                      "worn_not_in_hand": 0.01,
                      "not_worn": 0.01
                  }
              },
              {
                  "time": 12,
                  "classes": {
                      "firearm": 0.01,
                      "firearm_gesture": 0.01,
                      "firearm_toy": 0.01,
                      "knife": 0.01,
                      "animated": 0.01,
                      "aiming_threat": 0.01,
                      "aiming_safe": 0.01,
                      "in_hand_not_aiming": 0.01,
                      "worn_not_in_hand": 0.01,
                      "not_worn": 0.01
                  }
              },
              {
                  "time": 14,
                  "classes": {
                      "firearm": 0.01,
                      "firearm_gesture": 0.01,
                      "firearm_toy": 0.01,
                      "knife": 0.01,
                      "animated": 0.01,
                      "aiming_threat": 0.01,
                      "aiming_safe": 0.01,
                      "in_hand_not_aiming": 0.01,
                      "worn_not_in_hand": 0.01,
                      "not_worn": 0.01
                  }
              }
          ],
          "alcohol": [
              {
                  "time": 0,
                  "classes": {
                      "alcohol": 0.01
                  }
              },
              {
                  "time": 2,
                  "classes": {
                      "alcohol": 0.01
                  }
              },
              {
                  "time": 4,
                  "classes": {
                      "alcohol": 0.01
                  }
              },
              {
                  "time": 6,
                  "classes": {
                      "alcohol": 0.01
                  }
              },
              {
                  "time": 8,
                  "classes": {
                      "alcohol": 0.01
                  }
              },
              {
                  "time": 10,
                  "classes": {
                      "alcohol": 0.01
                  }
              },
              {
                  "time": 12,
                  "classes": {
                      "alcohol": 0.01
                  }
              },
              {
                  "time": 14,
                  "classes": {
                      "alcohol": 0.01
                  }
              }
          ],
          "recreational_drug": [
              {
                  "time": 0,
                  "classes": {
                      "recreational_drug": 0.01,
                      "cannabis": 0.01,
                      "cannabis_logo_only": 0.01,
                      "cannabis_plant": 0.01,
                      "cannabis_drug": 0.01,
                      "recreational_drugs_not_cannabis": 0.01
                  }
              },
              {
                  "time": 2,
                  "classes": {
                      "recreational_drug": 0.01,
                      "cannabis": 0.01,
                      "cannabis_logo_only": 0.01,
                      "cannabis_plant": 0.01,
                      "cannabis_drug": 0.01,
                      "recreational_drugs_not_cannabis": 0.01
                  }
              },
              {
                  "time": 4,
                  "classes": {
                      "recreational_drug": 0.01,
                      "cannabis": 0.01,
                      "cannabis_logo_only": 0.01,
                      "cannabis_plant": 0.01,
                      "cannabis_drug": 0.01,
                      "recreational_drugs_not_cannabis": 0.01
                  }
              },
              {
                  "time": 6,
                  "classes": {
                      "recreational_drug": 0.01,
                      "cannabis": 0.01,
                      "cannabis_logo_only": 0.01,
                      "cannabis_plant": 0.01,
                      "cannabis_drug": 0.01,
                      "recreational_drugs_not_cannabis": 0.01
                  }
              },
              {
                  "time": 8,
                  "classes": {
                      "recreational_drug": 0.01,
                      "cannabis": 0.01,
                      "cannabis_logo_only": 0.01,
                      "cannabis_plant": 0.01,
                      "cannabis_drug": 0.01,
                      "recreational_drugs_not_cannabis": 0.01
                  }
              },
              {
                  "time": 10,
                  "classes": {
                      "recreational_drug": 0.01,
                      "cannabis": 0.01,
                      "cannabis_logo_only": 0.01,
                      "cannabis_plant": 0.01,
                      "cannabis_drug": 0.01,
                      "recreational_drugs_not_cannabis": 0.01
                  }
              },
              {
                  "time": 12,
                  "classes": {
                      "recreational_drug": 0.01,
                      "cannabis": 0.01,
                      "cannabis_logo_only": 0.01,
                      "cannabis_plant": 0.01,
                      "cannabis_drug": 0.01,
                      "recreational_drugs_not_cannabis": 0.01
                  }
              },
              {
                  "time": 14,
                  "classes": {
                      "recreational_drug": 0.01,
                      "cannabis": 0.01,
                      "cannabis_logo_only": 0.01,
                      "cannabis_plant": 0.01,
                      "cannabis_drug": 0.01,
                      "recreational_drugs_not_cannabis": 0.01
                  }
              }
          ],
          "tobacco": [
              {
                  "time": 0,
                  "classes": {
                      "tobacco": 0.01,
                      "regular_tobacco": 0.01,
                      "ambiguous_tobacco": 0.01
                  }
              },
              {
                  "time": 2,
                  "classes": {
                      "tobacco": 0.01,
                      "regular_tobacco": 0.01,
                      "ambiguous_tobacco": 0.01
                  }
              },
              {
                  "time": 4,
                  "classes": {
                      "tobacco": 0.01,
                      "regular_tobacco": 0.01,
                      "ambiguous_tobacco": 0.01
                  }
              },
              {
                  "time": 6,
                  "classes": {
                      "tobacco": 0.01,
                      "regular_tobacco": 0.01,
                      "ambiguous_tobacco": 0.01
                  }
              },
              {
                  "time": 8,
                  "classes": {
                      "tobacco": 0.01,
                      "regular_tobacco": 0.01,
                      "ambiguous_tobacco": 0.01
                  }
              },
              {
                  "time": 10,
                  "classes": {
                      "tobacco": 0.01,
                      "regular_tobacco": 0.01,
                      "ambiguous_tobacco": 0.01
                  }
              },
              {
                  "time": 12,
                  "classes": {
                      "tobacco": 0.01,
                      "regular_tobacco": 0.01,
                      "ambiguous_tobacco": 0.01
                  }
              },
              {
                  "time": 14,
                  "classes": {
                      "tobacco": 0.01,
                      "regular_tobacco": 0.01,
                      "ambiguous_tobacco": 0.01
                  }
              }
          ],
          "violence": [
              {
                  "time": 0,
                  "classes": {
                      "violence": 0.01,
                      "physical_violence": 0.01,
                      "firearm_threat": 0.01,
                      "combat_sport": 0.01
                  }
              },
              {
                  "time": 2,
                  "classes": {
                      "violence": 0.01,
                      "physical_violence": 0.01,
                      "firearm_threat": 0.01,
                      "combat_sport": 0.01
                  }
              },
              {
                  "time": 4,
                  "classes": {
                      "violence": 0.01,
                      "physical_violence": 0.01,
                      "firearm_threat": 0.01,
                      "combat_sport": 0.01
                  }
              },
              {
                  "time": 6,
                  "classes": {
                      "violence": 0.01,
                      "physical_violence": 0.01,
                      "firearm_threat": 0.01,
                      "combat_sport": 0.01
                  }
              },
              {
                  "time": 8,
                  "classes": {
                      "violence": 0.01,
                      "physical_violence": 0.01,
                      "firearm_threat": 0.01,
                      "combat_sport": 0.01
                  }
              },
              {
                  "time": 10,
                  "classes": {
                      "violence": 0.01,
                      "physical_violence": 0.01,
                      "firearm_threat": 0.01,
                      "combat_sport": 0.01
                  }
              },
              {
                  "time": 12,
                  "classes": {
                      "violence": 0.01,
                      "physical_violence": 0.01,
                      "firearm_threat": 0.01,
                      "combat_sport": 0.01
                  }
              },
              {
                  "time": 14,
                  "classes": {
                      "violence": 0.01,
                      "physical_violence": 0.01,
                      "firearm_threat": 0.01,
                      "combat_sport": 0.01
                  }
              }
          ],
          "gambling": [
              {
                  "time": 0,
                  "classes": {
                      "gambling": 0.01
                  }
              },
              {
                  "time": 2,
                  "classes": {
                      "gambling": 0.01
                  }
              },
              {
                  "time": 4,
                  "classes": {
                      "gambling": 0.01
                  }
              },
              {
                  "time": 6,
                  "classes": {
                      "gambling": 0.01
                  }
              },
              {
                  "time": 8,
                  "classes": {
                      "gambling": 0.01
                  }
              },
              {
                  "time": 10,
                  "classes": {
                      "gambling": 0.01
                  }
              },
              {
                  "time": 12,
                  "classes": {
                      "gambling": 0.01
                  }
              },
              {
                  "time": 14,
                  "classes": {
                      "gambling": 0.01
                  }
              }
          ]
      
  }
    return NextResponse.json({ data: returnData });
  } catch (err) {
    console.error('Error uploading file:', err);
    return NextResponse.json({ error: err });
  }
}

function cleanData(result: any){
  delete result.status;
  delete result.request;
  delete result.media;
  result.nudity = [];
  result.money = [];
  result['self-harm'] = [];
  result.gore = [];
  result.offensive = [];
  result.weapon = [];
  result.alcohol = [];
  result.recreational_drug = [];
  result.tobacco = [];
  result.violence = [];
  result.gambling = [];
  result.data.frames.forEach((frame: any) => {
    result.nudity.push({
      time: frame.info.position / 1000,
      classes: {
        sexual_activity: frame.nudity.sexual_activity,
        sexual_display: frame.nudity.sexual_display,
        erotica: frame.nudity.erotica,
        very_suggestive: frame.nudity.very_suggestive,
        suggestive: frame.nudity.suggestive,
        mildly_suggestive: frame.nudity.mildly_suggestive,

        bikini: frame.nudity.suggestive_classes.bikini,
        cleavage: frame.nudity.suggestive_classes.cleavage,
        cleavage_categories:
          1 - frame.nudity.suggestive_classes.cleavage_categories.none,

        lingerie: frame.nudity.suggestive_classes.lingerie,
        male_chest: frame.nudity.suggestive_classes.male_chest,
        male_chest_categories:
          1 - frame.nudity.suggestive_classes.male_chest_categories.none,

        male_underwear: frame.nudity.suggestive_classes.male_underwear,
        miniskirt: frame.nudity.suggestive_classes.miniskirt,
        minishort: frame.nudity.suggestive_classes.minishort,
        nudity_art: frame.nudity.suggestive_classes.nudity_art,
        schematic: frame.nudity.suggestive_classes.schematic,
        sextoy: frame.nudity.suggestive_classes.sextoy,
        suggestive_focus: frame.nudity.suggestive_classes.suggestive_focus,
        suggestive_pose: frame.nudity.suggestive_classes.suggestive_pose,
        swimwear_male: frame.nudity.suggestive_classes.swimwear_male,
        swimwear_one_piece: frame.nudity.suggestive_classes.swimwear_one_piece,
        visibly_undressed: frame.nudity.suggestive_classes.visibly_undressed,
        other: frame.nudity.suggestive_classes.other,

        sea_lake_pool: frame.nudity.context.sea_lake_pool,
        outdoor_other: frame.nudity.context.outdoor_other,
        indoor_other: frame.nudity.context.indoor_other,
      },
    });
    result.money.push({
      time: frame.info.position / 1000,
      classes: {
        money: frame.money.prob,
      },
    });
    result.gambling.push({
      time: frame.info.position / 1000,
      classes: {
        gambling: frame.gambling.prob,
      },
    });
    result['self-harm'].push({
      time: frame.info.position / 1000,
      classes: {
        self_harm: frame['self-harm'].prob,
        real: frame['self-harm'].type.real,
        fake: frame['self-harm'].type.fake,
        animated: frame['self-harm'].type.animated,
      },
    });
    result.gore.push({
      time: frame.info.position / 1000,
      classes: {
        gore: frame.gore.prob,
        very_bloody: frame.gore.classes.very_bloody,
        slightly_bloody: frame.gore.classes.slightly_bloody,
        body_organ: frame.gore.classes.body_organ,
        serious_injury: frame.gore.classes.serious_injury,
        superficial_injury: frame.gore.classes.superficial_injury,
        corpse: frame.gore.classes.corpse,
        skull: frame.gore.classes.skull,
        unconscious: frame.gore.classes.unconscious,
        body_waste: frame.gore.classes.body_waste,
        other: frame.gore.classes.other,
        animated: frame.gore.type.animated,
        fake: frame.gore.type.fake,

        real: frame.gore.type.real,
      },
    });
    result.offensive.push({
      time: frame.info.position / 1000,
      classes: {
        offensive: frame.offensive.prob,
        nazi: frame.offensive.nazi,
        confederate: frame.offensive.confederate,
        supremacist: frame.offensive.supremacist,
        terrorist: frame.offensive.terrorist,
        middle_finger: frame.offensive.middle_finger
      },
    });
    result.weapon.push({
      time: frame.info.position / 1000,
      classes: {
        firearm: frame.weapon.classes.firearm,
        firearm_gesture: frame.weapon.classes.firearm_gesture,
        firearm_toy: frame.weapon.classes.firearm_toy,
        knife: frame.weapon.classes.knife,
        animated: frame.weapon.firearm_type.animated,
        aiming_threat: frame.weapon.firearm_action.aiming_threat,
        aiming_safe: frame.weapon.firearm_action.aiming_safe,
        in_hand_not_aiming: frame.weapon.firearm_action.in_hand_not_aiming,
        worn_not_in_hand: frame.weapon.firearm_action.worn_not_in_hand,
        not_worn: frame.weapon.firearm_action.not_worn,
      },
    });
    result.alcohol.push({
      time: frame.info.position / 1000,
      classes: {
        alcohol: frame.alcohol.prob,
      },
    });
    result.recreational_drug.push({
      time: frame.info.position / 1000,
      classes: {
        recreational_drug: frame.recreational_drug.prob,
        cannabis: frame.recreational_drug.classes.cannabis,
        cannabis_logo_only: frame.recreational_drug.classes.cannabis_logo_only,
        cannabis_plant: frame.recreational_drug.classes.cannabis_plant,
        cannabis_drug: frame.recreational_drug.classes.cannabis_drug,
        recreational_drugs_not_cannabis:
          frame.recreational_drug.classes.recreational_drugs_not_cannabis,
      },
    });
    result.tobacco.push({
      time: frame.info.position / 1000,
      classes: {
        tobacco: frame.tobacco.prob,
        regular_tobacco: frame.tobacco.classes.regular_tobacco,
        ambiguous_tobacco: frame.tobacco.classes.ambiguous_tobacco,
      },
    });
    result.violence.push({
      time: frame.info.position / 1000,
      classes: {
        violence: frame.violence.prob,
        physical_violence: frame.violence.classes.physical_violence,
        firearm_threat: frame.violence.classes.firearm_threat,
        combat_sport: frame.violence.classes.combat_sport,
      },
    });
  });
  delete result.data;
  return result;
}
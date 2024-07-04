// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server';
const axios = require('axios');
export const dynamic = 'force-dynamic'; // <- add this to force dynamic render
export const maxDuration = 60;

function cleanResult(result: any) {
  delete result?.request;
  delete result?.status;
  delete result?.media;
  console.log()
  result.nudity = {
    none: result.nudity.none,
    classes: {
      sexual_activity: result.nudity.sexual_activity,
      sexual_display: result.nudity.sexual_display,
      erotica: result.nudity.erotica,
      very_suggestive: result.nudity.very_suggestive,
      suggestive: result.nudity.suggestive,
      mildly_suggestive: result.nudity.mildly_suggestive,

      bikini: result.nudity.suggestive_classes.bikini,
      cleavage: result.nudity.suggestive_classes.cleavage,
      cleavage_categories:
        result.nudity.suggestive_classes.cleavage_categories.none,

      lingerie: result.nudity.suggestive_classes.lingerie,
      male_chest: result.nudity.suggestive_classes.male_chest,
      male_chest_categories:
        result.nudity.suggestive_classes.male_chest_categories.none,

      male_underwear: result.nudity.suggestive_classes.male_underwear,
      miniskirt: result.nudity.suggestive_classes.miniskirt,
      minishort: result.nudity.suggestive_classes.minishort,
      nudity_art: result.nudity.suggestive_classes.nudity_art,
      schematic: result.nudity.suggestive_classes.schematic,
      sextoy: result.nudity.suggestive_classes.sextoy,
      suggestive_focus: result.nudity.suggestive_classes.suggestive_focus,
      suggestive_pose: result.nudity.suggestive_classes.suggestive_pose,
      swimwear_male: result.nudity.suggestive_classes.swimwear_male,
      swimwear_one_piece: result.nudity.suggestive_classes.swimwear_one_piece,
      visibly_undressed: result.nudity.suggestive_classes.visibly_undressed,
      other: result.nudity.suggestive_classes.other,

      sea_lake_pool: result.nudity.context.sea_lake_pool,
      outdoor_other: result.nudity.context.outdoor_other,
      indoor_other: result.nudity.context.indoor_other,
    },
  };
  result.weapon = {
    classes: {
      firearm: result.weapon.classes.firearm,
      firearm_gesture: result.weapon.classes.firearm_gesture,
      firearm_toy: result.weapon.classes.firearm_toy,
      knife: result.weapon.classes.knife,
      animated: result.weapon.firearm_type.animated,
      aiming_threat: result.weapon.firearm_action.aiming_threat,
      aiming_safe: result.weapon.firearm_action.aiming_safe,
      in_hand_not_aiming: result.weapon.firearm_action.in_hand_not_aiming,
      worn_not_in_hand: result.weapon.firearm_action.worn_not_in_hand,
      not_worn: result.weapon.firearm_action.not_worn,
    },
  };
  result['self-harm'] = {
    prob: result['self-harm'].prob,
    classes: {
      real: result['self-harm'].type.real,
      fake: result['self-harm'].type.fake,
      animated: result['self-harm'].type.animated,
    },
  };
  result.offensive = {
    prob: result.offensive.prob,
    classes: {
      nazi: result.offensive.nazi,
      confederate: result.offensive.confederate,
      supremacist: result.offensive.supremacist,
      terrorist: result.offensive.terrorist,
      middle_finger: result.offensive.middle_finger,
    },
  };
  result.gore = {
    prob: result.gore.prob,
    classes: {
      very_bloody: result.gore.classes.very_bloody,
      slightly_bloody: result.gore.classes.slightly_bloody,
      body_organ: result.gore.classes.body_organ,
      serious_injury: result.gore.classes.serious_injury,
      superficial_injury: result.gore.classes.superficial_injury,
      corpse: result.gore.classes.corpse,
      skull: result.gore.classes.skull,
      unconscious: result.gore.classes.unconscious,
      body_waste: result.gore.classes.body_waste,
      other: result.gore.classes.other,
      animated: result.gore.type.animated,
      fake: result.gore.type.fake,
      real: result.gore.type.real,
    },
  };

  return result;
}

export async function GET(request: NextRequest) {
  try {
    let url = request.nextUrl.searchParams.get('url') ?? '';

    const result = await fetch(
    'https://api.sightengine.com/1.0/check.json?' +
        new URLSearchParams({
          url: url,
          models:
            'nudity-2.1,weapon,alcohol,recreational_drug,offensive,gore-2.0,qr-content,tobacco,violence,self-harm,money,gambling',
          api_user: process.env.SIGHTENGINE_USER ?? '',
          api_secret: process.env.SIGHTENGINE_SECRET ?? '',
        }),
      {
        method: 'GET',
      }
    );
    let data = await result.json();
    if (data.status === 'failure') {
      return NextResponse.json({ error: data.error });
    }
    delete data?.request;
    delete data?.status;
    delete data?.media;
    data = cleanResult(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error });
  }
  
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

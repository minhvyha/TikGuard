import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'; // <- add this to force dynamic render
export const maxDuration = 60;
var sightengine = require('sightengine')(
  process.env.VIDEO_USER,
  process.env.VIDEO_SECRET
);

export async function GET(request: NextRequest) {
  try {
    let url = request.nextUrl.searchParams.get('url') ?? '';

    const result = await sightengine.check(['nudity-2.1,weapon,alcohol,recreational_drug,offensive,gore-2.0,tobacco,violence,self-harm,money,gambling']).video_sync(url)

    let returnData = cleanData(result);

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
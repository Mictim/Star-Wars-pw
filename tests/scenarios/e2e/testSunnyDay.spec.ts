import { test } from '../../fixtures/fixture';
import { defaultStarship } from '../../model/starships-details';
import { defaultActor } from '../../model/actor-details';

test('test starships', async ({ mainSteps, starshipsSteps }) => {
  await starshipsSteps.openStarshipsPage();
  await starshipsSteps.openStarshipByName("Star Destroyer");
  await starshipsSteps.verifyDataForStarship(defaultStarship);
  
});

test('test actors', async({ actorsSteps }) => {
    await actorsSteps.openActorsPage();
    await actorsSteps.openActorByName(defaultActor.name);
    await actorsSteps.verifyDataForActor(defaultActor);
});
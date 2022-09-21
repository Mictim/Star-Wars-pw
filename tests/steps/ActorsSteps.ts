import { Locator } from "@playwright/test";
import { ActorDetails } from "../model/dto/ActorDetails";
import { ActorsPage } from "../pages/ActorsPage";


export class ActorsSteps extends ActorsPage {

    async selectActorById(index: number): Promise<ActorDetails> {
        return this.selectActorByValue(index);
      }
    
      async selectActorByName(name: string): Promise<ActorDetails> {
        return this.selectActorByValue(name);
      }
    
      private async getActorLocator(value: string | number): Promise<Locator> {
        if(typeof value === 'string') {
            return this.actorLink.locator(`[data-name=${value}]`);
        } else {
            return this.actorLink.nth(value - 1);
        }
      }
    
      private async selectActorByValue(value: string | number): Promise<ActorDetails> {
        const [response] = await Promise.all([
            this.page.waitForResponse(RegExp("/people/[0-9]/")),
            (await this.getActorLocator(value)).click(),
          ]);
          if (response.status() === 200) {
            return response.json();
          } else {
            throw new Error(`Response failed with status: ${response.status()}`);
          }
      } 
}
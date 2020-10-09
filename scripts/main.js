import {FishList} from "./fish/FishList.js"
import {PopulateTips} from "./tips/TipList.js"
import {LocationsHTML} from "./locations/LocationList.js"
import { holyFish, soldierFish, unHolyFish } from "./fish/FishDataProvider.js";

FishList();
PopulateTips();
LocationsHTML();
holyFish();
soldierFish();
unHolyFish();
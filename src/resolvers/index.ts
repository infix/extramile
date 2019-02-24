import { BusResolver } from "./BusResolver";
import { DriverResolver } from "./DriverResolver";
import { UserResolver } from "./UserResolver";
import { TripResolver } from "./TripResolver";
import { FeedbackResolver } from "./FeedbackResolver";
import { ReservationResolver } from "./ReservationResolver";
import { TripStopResolver } from "./TripStopResolver";
import { Query, Resolver } from "type-graphql";

@Resolver()
export class ConnectionResolver {
  @Query(() => String, { description: "toy resolver used to check connection with the backend." })
  async Connection() {
    return "Connected!";
  }
}

export {
  UserResolver,
  TripResolver,
  FeedbackResolver,
  BusResolver,
  TripStopResolver,
  DriverResolver,
  ReservationResolver
}
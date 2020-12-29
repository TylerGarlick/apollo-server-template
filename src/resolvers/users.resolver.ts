import { Query, Resolver } from 'type-graphql'
import { User } from '../entities/user'

@Resolver(User)
export class UserResolver {

  @Query(() => [User])
  async users(): Promise<User[]> {
    return []
  }

}
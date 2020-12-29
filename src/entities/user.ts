import { Field, ObjectType } from 'type-graphql'
import { IsString, MaxLength, MinLength } from 'class-validator'

@ObjectType()
export class User {

  @Field()
  @IsString()
  @MinLength(3)
  @MaxLength(512)
  username: string = ''

}
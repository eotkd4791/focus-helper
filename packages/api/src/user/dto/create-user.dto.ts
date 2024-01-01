import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class CreateUserDto {
	@Field() readonly id?: number
	@Field() readonly name: string
	@Field() readonly email: string
}

import { Resolver, Mutation, Args, Query, ID } from '@nestjs/graphql'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from '@prisma/client'

@Resolver('User')
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@Query('findUser')
	findUserById(@Args({ name: 'id', type: () => ID }) id: User['id']) {
		return this.userService.findUserById(id)
	}

	@Mutation('createUser')
	create(@Args('createUserDto') createUserDto: CreateUserDto) {
		return this.userService.create(createUserDto)
	}
}

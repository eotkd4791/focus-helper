import { CreateUserDto } from './dto/create-user.dto'
import { DbService } from 'src/db/db.service'
import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'

@Injectable()
export class UserService {
	constructor(private readonly dbService: DbService) {}

	async create({ email, name }: CreateUserDto) {
		try {
			const existUser = await this.dbService.user.findUnique({
				where: { email },
			})

			if (existUser) {
				throw new Error('중복 유저')
			}

			const newUser = await this.dbService.user.create({
				data: { email, name },
			})
			return newUser
		} catch (error) {
			return null
			// 중복 유저 처리
		}
	}

	async findUserById(id: User['id']) {
		const user = await this.dbService.user.findUnique({
			where: {
				id,
			},
		})
		return user
	}
}

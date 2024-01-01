import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserResolver } from './user.resolver'
import { DbService } from 'src/db/db.service'

@Module({
	providers: [UserResolver, UserService, DbService],
})
export class UserModule {}

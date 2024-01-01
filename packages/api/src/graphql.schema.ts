/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserDto {
	email: string
	name: string
}

export interface User {
	id?: Nullable<number>
	email: string
	name: string
}

export interface IMutation {
	createUser(
		createUserDto: CreateUserDto,
	): Nullable<User> | Promise<Nullable<User>>
}

export interface IQuery {
	findUser(id: number): Nullable<User> | Promise<Nullable<User>>
}

type Nullable<T> = T | null

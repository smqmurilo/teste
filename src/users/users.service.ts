import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}
}

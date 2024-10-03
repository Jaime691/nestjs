import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Must include at least one digit (0-9) or one special character (like @, #, $, etc.). Must include at least one uppercase letter (A-Z). Must include at least one lowercase letter (a-z). Cannot start with a dot or a newline character.',
  })
  password: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class currentAccountInput {
  id?: number;

  @ApiProperty({ example: '1' })
  custumerId?: number | null;

  @ApiProperty({ example: '10.51' })
  initialCredit?: number;

  total?: number;
}

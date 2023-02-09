import { Controller, Get } from '@nestjs/common';
import { TransactionService } from '../../service/transaction/transaction.service';

@Controller()
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('/')
  getHello(): string {
    return this.transactionService.getHello();
  }
}

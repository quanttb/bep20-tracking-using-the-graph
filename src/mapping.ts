import { BigInt } from '@graphprotocol/graph-ts';
import { Transfer } from '../generated/ERC20/ERC20';
import { Account } from '../generated/schema';

const GENESIS_ADDRESS = '0x0000000000000000000000000000000000000000';

export function handleTransfer(event: Transfer): void {
  if (event.params.to.toHex() !== GENESIS_ADDRESS) {
    let account = Account.load(event.params.to.toHex());

    if (!account) {
      account = new Account(event.params.to.toHex());
      account.address = event.params.to;
      account.balance = BigInt.fromI32(0);
      account.transactionCount = 0;
    }
    account.balance = account.balance.plus(event.params.value);
    account.transactionCount += 1;

    account.save();
  }

  if (event.params.from.toHex() !== GENESIS_ADDRESS) {
    let account = Account.load(event.params.from.toHex());

    if (account) {
      account.balance = account.balance.minus(event.params.value);
      account.transactionCount += 1;

      account.save();
    }
  }
}

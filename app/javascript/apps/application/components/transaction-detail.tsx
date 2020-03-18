import React from 'react';
import { Descriptions, Avatar } from 'antd';

export function TransactionDetail(props: { transaction: any }) {
  const { transaction } = props;
  return (
    <Descriptions title='Transaction Detail'>
      <Descriptions.Item label='id'>{transaction.id}</Descriptions.Item>
      <Descriptions.Item label='amount'>
        {transaction.amount} {transaction.asset.symbol}
      </Descriptions.Item>
      <Descriptions.Item label='Receiver'>
        {transaction.receivers.map((receiver: any) => (
          <Avatar key={receiver.mixinUuid} src={receiver.avatar}>
            {receiver.name[0]}
          </Avatar>
        ))}
      </Descriptions.Item>
      <Descriptions.Item label='Senders'>
        {transaction.senders.map((sender: any) => (
          <Avatar key={sender.mixinUuid} src={sender.avatar}>
            {sender.name[0]}
          </Avatar>
        ))}
      </Descriptions.Item>
      <Descriptions.Item label='Threshold'>
        {transaction.threshold}
      </Descriptions.Item>
      <Descriptions.Item label='Signers'>
        {transaction.signers.map((signer: any) => (
          <Avatar key={signer.mixinUuid} src={signer.avatar}>
            {signer.name[0]}
          </Avatar>
        ))}
      </Descriptions.Item>
      <Descriptions.Item label='Raw Transaction'>
        <span style={{ wordBreak: 'break-all' }}>
          {transaction.rawTransaction}
        </span>
      </Descriptions.Item>
    </Descriptions>
  );
}
module.exports = {
	FXRootContractAbi: [
		{
			inputs: [
				{
					internalType: 'address',
					name: '_checkpointManager',
					type: 'address',
				},
				{ internalType: 'address', name: '_fxRoot', type: 'address' },
				{ internalType: 'address', name: '_fxERC721Token', type: 'address' },
			],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'rootToken',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'depositor',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'userAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'id',
					type: 'uint256',
				},
			],
			name: 'FxDepositERC721',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'rootToken',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'childToken',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'userAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'id',
					type: 'uint256',
				},
			],
			name: 'FxWithdrawERC721',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'rootToken',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'childToken',
					type: 'address',
				},
			],
			name: 'TokenMappedERC721',
			type: 'event',
		},
		{
			inputs: [],
			name: 'DEPOSIT',
			outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'MAP_TOKEN',
			outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'SEND_MESSAGE_EVENT_SIG',
			outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'checkpointManager',
			outputs: [
				{
					internalType: 'contract ICheckpointManager',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'childTokenTemplateCodeHash',
			outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'bytes32', name: 'salt', type: 'bytes32' },
				{ internalType: 'bytes32', name: 'bytecodeHash', type: 'bytes32' },
				{ internalType: 'address', name: 'deployer', type: 'address' },
			],
			name: 'computedCreate2Address',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'address', name: 'rootToken', type: 'address' },
				{ internalType: 'address', name: 'user', type: 'address' },
				{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
				{ internalType: 'bytes', name: 'data', type: 'bytes' },
			],
			name: 'deposit',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'fxChildTunnel',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'fxRoot',
			outputs: [
				{ internalType: 'contract IFxStateSender', name: '', type: 'address' },
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'address', name: 'rootToken', type: 'address' }],
			name: 'mapToken',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'address', name: '', type: 'address' },
				{ internalType: 'address', name: '', type: 'address' },
				{ internalType: 'uint256', name: '', type: 'uint256' },
				{ internalType: 'bytes', name: '', type: 'bytes' },
			],
			name: 'onERC721Received',
			outputs: [{ internalType: 'bytes4', name: '', type: 'bytes4' }],
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
			name: 'processedExits',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'bytes', name: 'inputData', type: 'bytes' }],
			name: 'receiveMessage',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'address', name: '', type: 'address' }],
			name: 'rootToChildTokens',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'address', name: '_fxChildTunnel', type: 'address' },
			],
			name: 'setFxChildTunnel',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
}
            

window.indexData = {
  header: {
    headerItems: [
      {
        title: 'Menu',
        links: [
          {
            text: 'WHAT: Lock n Load Technology',
            link: 'https://shiftnrg.org/#LockNLoad'
          },
          {
            text: 'HOW: A Better Platform',
            link: 'https://shiftnrg.org/#Phoenix'
          },
          {
            text: 'WHEN: Roadmap',
            link: 'https://shiftnrg.org/#Roadmap'
          },
          {
            text: 'WHO: Team',
            link: 'https://shiftnrg.org/#Team'
          },
          {
            text: 'STAY WITH US: News, Updates, and Announcements',
            link: 'https://shiftnrg.org/#News'
          },
          {
            text: 'CODE: GitHub',
            link: 'https://github.com/shiftnrg'
          },
          {
            text: 'EXPLORE: Explorer',
            link: 'https://explorer.shiftnrg.org'
          },
          {
            text: 'WALLET: Web Wallet',
            link: 'https://wallet.shiftnrg.org'
          }
        ]
      }
    ]
  },
  banner: {
    newsFlash: {
      badge: 'Update',
      description:
        '2020.12.03: We have given the green light for MonteLabs to audit our wSHIFT smart contract',
      link: 'https://github.com/ShiftNrg/wrappedShift'
    },
    line1: 'Decentralized Cloud Hosting',
    line2:
      'Shift combines the transparency, immutability, and decentralization of blockchain technology with distributed hosting'
  },
  lockNLoad: {
    title: {
      left: 'Shift reinvents decentralized cloud hosting with',
      middle: 'Lock n’ Load™',
      right: ' technology'
    },
    subtitle: 'Store your files by following these simple steps.',
    steps: [
      {
        icon: '/images/locknload/locknload--lock.svg',
        title: 'Lock',
        description: 'Start by locking some SHIFT to receive storage space'
      },
      {
        icon: '/images/locknload/locknload--upload.svg',
        title: 'Upload',
        description: 'Next, select a file to upload'
      },
      {
        icon: '/images/locknload/locknload--pin.svg',
        title: 'Pin',
        description:
          'Now, record the hash of your file permanently on the blockchain'
      },
      {
        icon: '/images/locknload/locknload--load.svg',
        title: 'Load',
        description: 'Lift off! Open your file using our gateway'
      }
    ],
    stepsReversed: [
      {
        icon: '/images/locknload/locknload--unpin.svg',
        title: 'Unpin',
        description:
          'Select the hash of a file you no longer wish to have saved'
      },
      {
        icon: '/images/locknload/locknload--unlock.svg',
        title: 'Unlock',
        description: 'Finished hosting your files? Then unlock your SHIFT'
      }
    ],
    intro: {
      description:
        '...and when you’re done, retrieve your tokens by reversing these steps',
      linkText: 'Reverse the steps',
      activeText: 'Restart the cycle'
    },
    buttons: [
      {
        link: 'https://demo.shiftproject.com',
        target: '_blank',
        text: 'Try our demo now'
      },
      {
        link: 'https://github.com/shiftnrg/shift-cluster-setup',
        target: '_blank',
        text: 'Set up a storage node'
      }
    ]
  },
  issues: {
    title: 'Simply A Better Service Model',
    subtitle: 'The foundation of a new token utility',
    description:
      'Shift solves today and tomorrow’s hardest blockchain-based cloud hosting problems.',
    items: [
      {
        icon: 'issues/issues--p2p',
        title: 'Usability',
        content:
          'Decentralized storage marketplaces using smart contracts are complex and difficult to understand for both developers and end users.',
        answer: {
          title: '<strong>Token locking</strong> fixes this.',
          description:
            'Token locking is a simple and reversible transaction type that incorporates a fully automated pricing mechanism for storage that is efficient, fair and verifiable.'
        }
      },
      {
        icon: 'issues/issues--stability',
        title: 'Stability',
        content:
          'IPFS is a groundbreaking distributed file system. However, it does not offer an easy or reliable way to allocate and replicate the pinning of data to multiple nodes across a cluster of IPFS daemons.',
        answer: {
          title: '<strong>Phoenix</strong> fixes this.',
          description:
            'Phoenix is a simple pinning interface to bridge IPFS and the Shift blockchain.'
        }
      },
      {
        icon: 'issues/issues--operability',
        title: 'Operability',
        content:
          'Most decentralized cloud hosting platforms do not support the same tools and languages developers know and love.',
        answer: {
          title: '<strong>Phoenix SDK</strong> fixes this.',
          description:
            'The Phoenix SDK will support lambda functions that allow the user to effortlessly write and execute their custom code at a global scale through Trusted Delegation.'
        },
        upcoming: true
      },
      {
        icon: 'issues/issues--scalability',
        title: 'Scalability',
        content:
          'Decentralized cloud hosting platforms using Proof-of-Work protocols are slow and unscalable.',
        answer: {
          title:
            '<strong>Transactional lattice (DAG)</strong> and <strong>sharding</strong> fix this.',
          description:
            'Shift accounts will each have their own blockchain, which removes the need for transactions to be bundled into blocks. The lattice therefore allows unbounded (unlimited) transaction growth.'
        },
        upcoming: true
      }
    ]
  },
  cases: {
    title: 'Simply Better Use Cases',
    subtitle: 'Traditional web development',
    description:
      'Shift enables traditional web development in a decentralized world.',
    items: [
      {
        icon: '/images/cases/static-hosting.svg',
        title: 'Static hosting',
        description:
          'Host your website or application-specific assets in under 60 seconds at incredibly cheap rates. Test your changes for free on our Testnet before pushing them live on the Mainnet. Your content will be replicated across the globe for super fast and reliable access.'
      },
      {
        icon: '/images/cases/dynamic-hosting.svg',
        title: 'Dynamic hosting',
        description:
          'Bring your website or API to life by running custom code (Java, C#, Go, JavaScript, Scala and Python are all supported). Test your custom code locally using the Phoenix SDK. Use lambda functions to render content, process requests, output results, manage data and much, much more!'
      },
      {
        icon: '/images/cases/encrypted-hosting.svg',
        title: 'Encrypted hosting',
        description:
          'Choose to use strong client-side encryption for secure storage of your personal files. After encryption, your files are split into pieces before then being distributed across the global network of storage nodes. You own your private keys and you are in control of your data. Optionally, add the public key of others to safely share your files.'
      }
    ]
  },
  usps: {
    title: 'Simply A Better Cloud',
    subtitle: 'Decentralized hosting',
    description: 'Shift brings decentralized cloud hosting to the masses.',
    items: [
      {
        icon: 'usps/usps--usage',
        title: 'Peer-to-peer',
        description:
          'Rent out the unused storage on your hard drive or lend the storage space of others.',
        excerpt:
          'Shift is a decentralized cloud hosting platform. No trusted third party is involved, it is fully p2p: anyone can rent out the unused storage on their hard drive or use the storage space of others. The renting and lending of storage occurs directly through the network and is recorded within the Shift blockchain, a public and digital ledger. Participation only requires registering an anonymous wallet and possession of the SHIFT token.'
      },
      {
        icon: 'usps/usps--tokenized',
        title: 'Tokenized',
        description:
          'Swap your tokens for distributed storage with a single, simple transaction.',
        excerpt:
          'The SHIFT token is intrinsically valued because it represents distributed storage that can easily be acquired with a single transaction. No need to construct a smart contract, no need to bid in a marketplace. Simply enter the amount of storage you want: the required equivalent of tokens you need to lock is shown based on real-time data of the platform’s supply and demand. Confirm the transaction and your tokens are swapped for bytes. The claimed storage is now available for your permanent use.'
      },
      {
        icon: 'usps/usps--retrievable',
        title: 'Retrievable',
        description:
          'Retrieve your tokens with a reversed swap once you no longer need your storage.',
        excerpt:
          'Simply enter the amount of storage you want to return to the network and get the corresponding amount of your tokens unlocked. Now you can do as you wish with your tokens, such as selling them back on the market. After using the platform’s hosting service, you will only have paid minor transaction fees: once for locking your tokens, once for unlocking, and the times you pinned your files hashes. You know exactly what you are paying, up front.'
      },
      {
        icon: 'usps/usps--profitable',
        title: 'Profitable',
        description:
          'Earn revenue as a storage node operator by providing storage to the platform.',
        excerpt:
          'The platform rewards storage providers that successfully pass a proof-of-storage validation and punishes those that fail. The reward-based economic model thrives on the transaction fees that are collected and then divided between reliable storage node operators. Additionally, they are also rewarded by an inflationary component that is sustainably calibrated to the network’s growth and the demand for its services.'
      },
      {
        icon: 'usps/usps--secure',
        title: 'Redundant',
        description:
          'Pin your files to have them replicated across the network for guaranteed triple redundancy.',
        excerpt:
          'Upload and pin your files. They will automatically be allocated and replicated across the network. Your files are stored on 3 different storage nodes in the network, permanently. In the future, if one of those 3 initial hosting nodes goes down, the content is replicated to another, thereby restoring the replication factor to 3.'
      },
      {
        icon: 'usps/usps--sovereign',
        title: 'Sovereign',
        description:
          'Monitor for flagged content and decide as a node operator if you wish to remove it.',
        excerpt:
          'With no central authority involved in the platform’s regulation, there is no single point of control capable of censoring content. While some people may try to abuse the platform by hosting inappropriate content or services, content can be flagged. Gateway and storage node operators are sovereign and may decide if they want to remove it. Rules can be quickly setup allowing individual nodes to decide how to handle flags and prevent abuse of the flagging mechanism.'
      },
      {
        icon: 'usps/usps--bridgeable',
        title: 'Bridgeable',
        description:
          'Bridge the old web to the new by making your website accessible through standard web browsers.',
        excerpt:
          'The process simply involves assigning a parent ID to your website’s hash and pointing your DNS TXT record to that parent ID. There is no need to re-publish your website every time changes are made, and it can still be served from any peer on the network. The Shift platform has a custom-built DNS monitor in place that allows only healthy nodes to be in DNS.'
      },
      {
        icon: 'usps/usps--lock',
        title: 'Private',
        description:
          'Run a Trusted Delegation client to enable untrusted nodes to process your private data in a secure fashion.',
        excerpt:
          'The trouble with decentralized hosting of private data is that it is an inherently untrusted environment. Shift gets around this by offering users the option to specify Trusted Delegation. This is a lightweight service which is operated by a third party you trust. You appoint a node to hold and process your private data, relying on that trusted delegate to do so without accessing it.'
      }
    ]
  },
  overview: {
    title: 'Platform Overview',
    subtitle: 'Software applications that communicate',
    description:
      'The current Shift platform incorporates two software applications that communicate with each other. There is Phoenix and the Shift blockchain.',
    items: [
      {
        title: 'Phoenix',
        subtitle: 'Stand-alone application',
        description: [
          'Phoenix is a stand-alone application facilitating the allocation and conservation through replication of data across a cluster of storage nodes, called the Phoenix Cluster. Phoenix consists of three components: Phoenix-core, Phoenix-cluster and a customized IPFS daemon.'
        ],
        image: '/images/overview/phoenix.svg',
        items: [
          '<strong>Phoenix-core</strong> is a p2p library and responsible for networking and message relaying between peers of the Phoenix Cluster. Phoenix-core is equipped with a very simple programming API that is used by Phoenix-cluster.',
          '<strong>Phoenix-cluster</strong> is a pinset orchestration layer for IPFS and responsible for the allocation and replication of data (pinsets) to multiple nodes across a cluster of IPFS daemons. Phoenix-cluster is stateless and does not depend on any cluster leader or DHT, a factor that makes it very stable.',
          '<strong>IPFS (InterPlanetary File System)</strong> is a p2p distributed file system and responsible for storing and accessing data. Phoenix-cluster has been implemented with a custom IPFS daemon that adds support to URL rewriting (routing), URL redirecting, custom 404 error pages and the implementation of Regex (a superset of wildcards) support for IPFS rewrites. All to improve the use case of web hosting.'
        ]
      },
      {
        title: 'Blockchain',
        subtitle: 'Delegated Proof-of-Stake (DPoS)',
        description: [
          'The Shift blockchain facilitates a decentralized and immutable means of governance that is consulted by the Phoenix Cluster.',
          'The Shift blockchain runs using a Lisk-based DPoS consensus engine, where 101 delegated nodes oversee the sequential forging of blocks. The selection process involves token holders selecting appropriate delegates. Each user account can vote for 101 delegates, a vote representing their ongoing account balance. This balance or ‘vote weight’ is used to rank and select the 101 forging delegates every 101 assigned blocks.',
          'Shift has modified the historic Lisk Core in two primary ways.'
        ],
        image: '/images/overview/blockchain.svg',
        items: [
          'In addition to the standard Lisk transaction types, Shift has created four unique transaction modules that are fully storage-related: <strong>LOCK</strong>, <strong>UNLOCK</strong>, <strong>PIN</strong> and <strong>UNPIN</strong>.',
          'Likewise, Shift has extended the standard block format to include cluster statistics obtained via a Phoenix-cluster API. The <strong>cluster size</strong>, which is the total amount of storage that is being offered to the platform, goes into every block. The value from matured blocks is then used by the pricing mechanism that is incorporated within the LOCK transaction.'
        ]
      }
    ],
    footerLink: {
      text: 'Join our growing community',
      link: '#'
    }
  },
  vision: {
    title: 'A New Blockchain Core',
    subtitle: 'Vision',
    description:
      'Shift envisions a core that securely scales to meet the needs of a popular, global cloud hosting platform no other blockchain project can match.',
    items: [
      {
        title: 'Chain of Command',
        description:
          'The Chain of Command (CoC) blockchain provides the heartbeat of the platform and ultimate governance.',
        excerpt:
          'The CoC will be a central blockchain running through Shift that regulates Account and Pool management, along with providing a constant timeline. The CoC is an inflationary system where each newly forged block will reward the node that forged it. Who forges the next block is decided by Verifiable Random Functions (VRF) Lottery. Nodes can increase their chances of winning the lottery by increasing their stake or receiving delegated token weight.'
      },
      {
        title: 'Block Lattice',
        description:
          'Shift accounts each have their own blockchain, which removes the need for transactions to be bundled into blocks.',
        excerpt:
          'Transactions are made between Accounts by placing a SEND transaction on one blockchain and placing a RECEIVE transaction on the other. This creates a lattice of transactions between all the accounts. Transactions do not need to be ordered because they can only flow in a single direction – one account to another. Transactions are tagged with the most recent CoC block ID to synchronous them.'
      },
      {
        title: 'VRF Lottery',
        description:
          'The account that generates the next block of the CoC is determined using Verifiable Random Functions (VRF).'
      },
      {
        title: 'Byzantine Fault Detection',
        description:
          'Byzantine Fault Detection (BFD) is used to prevent double spends and network attacks.',
        excerpt:
          'Shift will operate using Byzantine Fault Detection, which means that the network only has to detect a fault, not prevent it. Should a fault be detected, the upstream transaction chain for the transaction will be invalidated. In order to protect receiving nodes from this, senders can establish Pool Guarantors which will vouch for the sender. Receivers can also whitelist or blacklist Pools, avoiding potential bad senders.'
      },
      {
        title: 'Sharding',
        description:
          'With trillions of potential shards, nodes can decide how much of the network they want to service.',
        excerpt:
          'Because the Shift network can grow to vast proportions, it is unfair to expect all nodes to process all requests for the entire network. As such, the network may be split into trillions of shards. Nodes can then specify which shards they are willing to service, reducing or increasing their shard space depending on how much their servers can handle. A greater shard space will increase the potential earnings received.'
      },
      {
        title: 'Pools',
        description:
          'Token weight can be assigned to pools which increases their earning power.'
      }
    ]
  },
  roadmap: {
    title: 'Roadmap',
    subtitle: 'Milestones to production',
    description:
      'Shift has entered a new development phase that focuses on the storage validation protocols that form the foundation of the compensation system that will reward node operators.',
    items: [
      {
        label: 'January 2021',
        percentage: '75',
        title: 'wrapped SHIFT',
        items: [
          { item: 'wSHIFT coded', class: 'checked' },
          { item: 'submitted for audit', class: 'checked' },
          { item: 'audit complete', class: 'checked' },
          { item: 'integration' }
        ]
      },
      {
        label: 'March 2021',
        percentage: '50',
        title: 'Substrate Migration',
        items: [
          { item: 'Substrate', class: 'checked' },
          { item: 'NPoS', class: 'checked' },
          { item: 'Account conversion' },
          { item: 'Node installer' }
        ]
      },
      {
        label: 'May 2021',
        percentage: '50',
        title: 'Phoenix Integration',
        items: [
          { item: 'Phoenix-Substrate Fusion' },
          { item: 'Demo Launch' },
          { item: 'Creativity Contests' }
        ]
      },
      {
        label: 'TBD',
        percentage: '50',
        title: 'Core Migration',
        items: [
          { item: 'Substrate', class: 'checked' },
          { item: 'NPoS', class: 'checked' },
          { item: 'Account conversion' },
          { item: 'Node installer' }
        ]
      },
      {
        label: 'TBD',
        percentage: '25',
        title: 'Phoenix v1.0.0',
        items: [
          { item: 'Pin queueing', class: 'checked' },
          { item: 'IPNS resolution at blockchain (IPFS)' },
          { item: 'Blacklisting functionality for hashes' },
          { item: 'Auto recovery' }
        ]
      },
      {
        label: 'TBD',
        percentage: '50',
        title: 'Content Encryption',
        items: [
          { item: 'Encrypt before uploading', class: 'checked' },
          { item: 'Decrypt on loading', class: 'checked' },
          { item: 'Content sharing (asymmetric key pairs)' },
          { item: 'Recursive encryption' }
        ]
      },
      {
        label: 'TBD',
        percentage: '25',
        title: 'Proof-of-Capacity',
        items: [
          { item: 'Storage provider registration' },
          { item: 'Storage deposits/withdrawals' },
          { item: 'Generation of plot files' },
          { item: 'Zero Knowledge Proofs (zkrp)' }
        ]
      },
      {
        label: 'TBD',
        percentage: '25',
        title: 'Proof-of-Storage',
        items: [
          { item: 'Distributed Hash Table (DHT)' },
          { item: 'Storage deposits/withdrawals' },
          { item: 'Zero Knowledge Proofs (zkrp)' },
          { item: 'Peer entanglement challenges' }
        ]
      },
      {
        label: 'TBD',
        percentage: '5',
        title: 'Incentive Model',
        items: [
          { item: 'Dynamic transaction fees' },
          { item: 'Dynamic block rewards' },
          { item: 'Token burning/redistribution' },
          { item: 'Run experimental (artificial) data' }
        ]
      }
    ]
  },
  Team: {
    title: 'Team members',
    subtitle: 'Milestones to production',
    description:
      'Shift has revamped its team to include 2 world-class developers who lead the project with the help of a dedicated and strong community of willing and able probem-solvers.',
    items: [
      {
        label: 'Matt Swezey ',
        percentage: '100',
        title: 'Software Engineer',
        items: [
          { item: '> 1000 GitHub Contributions this year', class: 'checked' },
          { item: '> 10 years experience', class: 'checked' }
        ]
      },
      {
        label: 'Richard Merrill ',
        percentage: '100',
        title: 'Software Engineer',
        items: [
          { item: 'Experienced coder in multiple languages', class: 'checked' },
          { item: '> 10 years experience', class: 'checked' }
        ]
      }
    ]
  },
  news: {
    label: 'updates',
    title: 'Latest Updates and News',
    readMore: 'Read more',
    readMoreInsights: 'Read more insights from Shift',
    items: [
      {
        id: 7,
        datetime: '2019-11-28',
        day: '28',
        month: 'nov',
        category: 'announcement',
        title: 'Migration to Polkadot / Substrate Codebase',
        intro:
          'In our September newsletter we announced that the Shift blockchain will be migrating from the current Lisk codebase to a new core built on a modular framework. This transition is designed to allow us to conduct our own development on the blockchain, while the task of networking, consensus and interoperability maintenance is managed by the developers of the framework. Once migrated, we will thus be able to focus solely on Phoenix and our custom blockchain modules, increasing the speed of the project’s development significantly. After conducting weeks of research on the various modular cores currently available, we can now reveal the selection we have made and believe perfectly meets the needs of our visionary Shift Core. We are happy to announce that we will be migrating to the Polkadot/Substrate codebase.',
        content: `
          <p>Dear Community,</p>
          <p>In our September newsletter we announced that the Shift blockchain will be migrating from the current Lisk codebase to a new core built on a modular framework. This transition is designed to allow us to conduct our own development on the blockchain, while the task of networking, consensus and interoperability maintenance is managed by the developers of the framework. Once migrated, we will thus be able to focus solely on Phoenix and our custom blockchain modules, increasing the speed of the project’s development significantly. After conducting weeks of research on the various modular cores currently available, we can now reveal the selection we have made and believe perfectly meets the needs of our visionary Shift Core. We are happy to announce that we will be migrating to the Polkadot/Substrate codebase.
          </p>
          <p>As we anticipate many of you may be unfamiliar with Polkadot, we would like to begin by providing a basic introduction and overview of the project before describing the implications of the migration to Shift and its users. Should you wish to broaden your knowledge further, you might consider checking out the project’s wiki at: <a href="https://wiki.polkadot.network/docs/en" target="_blank">https://wiki.polkadot.network/docs/en</a> Many factors went into our decision to choose Polkadot but we would like to also take this newsletter as an opportunity to thank the Web3 Foundation, Parity Technologies and Gavin Wood, all of whom have provided incredible support and assistance during the research phase.</p>
          <h2>What is Polkadot?</h2>
          <p>Polkadot is an open-source, inter-chain blockchain protocol that allows independent blockchains to transfer messages and exchange information in a trustless fashion. Empowering a united network of participants that benefit from the protection of shared security, it serves as a foundation in the creation of an interoperable, scalable and decentralized internet (Web3.0). A heterogenous and multi-chain technology, Polkadot makes no assumptions about the nature of the structure of the participants in the network. Even non-blockchain systems and data structures can be integrated if they fulfil a set of criteria. What is more, interchain transactability allows for the sharing of unique features and the pooling of security through the enforcement of order and the validation of the messages sent between chains. On this foundation, an ecosystem of DApps and services is being built that will distribute power and equity for the common good, of which Shift will now be a part.
          </p>
          <h3>Chain Fundamentals</h3>
          <p>Polkadot consists of three principal components:</p>
          <ul>
            <li>
              <h4>Relay-chain</h4>
              <p>The relay-chain is the central chain in the Polkadot network and is secured by validators. Polkadot uses NPoS (Nominated Proof-of-Stake) as its mechanism for selecting the validator set. To maximize chain security, it requires validators secure the relay-chain by staking DOTs, the native token of the Polkadot protocol, and tasks nominators with selecting good validators by nominating their stake to them. The relay-chain is composed of a small variety of transaction types that provide the functionality to participate in NPoS, to interact with the governance mechanism and to conduct auctions for parachain slots (a topic that will be covered shortly). This is where the utility and economics of the DOT token comes in.</p>
              <p>The responsibility of the relay-chain is the achievement of consensus and transaction delivery among the large number of data structures that are linked with it. These application-specific data structures are called parallelized chains, or parachains. Within the Polkadot ecosystem Shift will function as a parachain and, through the use of the relay-chain as a source of shared security, be able to communicate and transact with all other parachains in a trustless fashion.</p>
            </li>
            <li>
              <h4>Parachains</h4>
              <p>Polkadot consists of many parachains with potentially differing characteristics. Parachains function independently and have their own state transition and validator sets, while sharing networking and the consensus layer with the relay-chain. As this networking and consensus layer is provisioned by Polkadot, parachain developers are able to focus on creating applications with their own unique features. In Shift’s case, this is the provision of distributed storage functionalities through integrating blockchain with IPFS.</p>
              <p>In order to share security in the context of interoperability, each parachain needs to lease a parachain slot on the relay-chain. A parachain slot is essentially a license for cross-chain validation and provides a parachain with unlimited access to cross-chain transactions to be included on the relay-chain. Parachain slots are acquirable through the aforementioned auctions, in which DOTs are “bonded” on the Polkadot relay-chain as a form of collateral.</p>
              <ul>
                <li>
                  <h5>Parachain-threads (Parathreads)</h5>
                <p>Once Polkadot has been launched, the number of available parachain slots will be dynamically limited. Due to the fact that parachain slots can only be acquired through auctions, it is likely that their cost will rapidly increase (due to a large amount of DOTs needing to be locked over a long period of time) and even become infeasible for smaller projects. That is why, for the purpose of fair distribution of the ability to share in security, in addition to those standard parachain slots some slots are set aside to run so-called parathreads. Parathreads function in exactly the same manner as parachains, but differ in their economic cost. While parachains have unlimited access to the relay-chain during the lease contract, parathreads bid on a per-block basis to be included on the relay-chain. This allows smaller parachain projects to temporarily participate in Polkadot security (on a block by block basis) without the need to lease a dedicated parachain slot. A parathread is thus a way to distribute the scarce number of parachain slots among a number of competing resources—parachain-threads, hence its name.</p>
                <p>Since the Shift Team does not currently possess any DOTs on the Polkadot relay-chain, the Shift chain will become a parathread. However, it should be noted that parachains and parathreads can switch roles with relative ease, as the difference that separates them is an economic distinction rather than a technological one. This means that Shift may become a standard parachain in the future.</p>
                </li>
              </ul>
            </li>
            <li>
              <h4>Bridges</h4>
              <p>The last of the three principal components Polkadot introduces are bridges. Bridges are connecting layers that will enable existing blockchains with their own state histories and methods of consensus to link with Polkadot without having to be a native parachain. Examples of existing blockchains that could potentially be “bridged” include Bitcoin and that of the Ethereum network. This functionality has great relevance to Shift as bridges will allow users to transact a wider array of tokens into SHIFT without the necessity of going through exchanges.</p>
            </li>
          </ul>
          <h2>What is Substrate?</h2>
          <p>Substrate is a next-generation framework for blockchain development and underlies the building of Polkadot and its chains. Both Polkadot and Substrate are a product of the same creators: founded by the <a href="https://web3.foundation" target="_blank">Web3 Foundation</a>, researched by <a href="https://www.inria.fr/centre/paris" target="_blank">Inria Paris</a> and <a href="https://ethz.ch/en.html" target="_blank">ETH Zurich</a> and developed by <a href="https://www.parity.io" target="_blank">Parity Technologies</a>. The most important part of understanding the difference between Polkadot and Substrate is that while Polkadot is the relay-chain within its ecosystem, Substrate is the blockchain framework used by any native chain in the network, including Polkadot itself. Although Polkadot is itself built with Substrate and projects built with Substrate can run natively on Polkadot, anyone can use Substrate to build new blockchains without being dependent on the development of Polkadot.</p>
          <p>Substrate is both a library for building new blockchains, as well as a “skeleton key” of a blockchain client that is able to synchronize with any Substrate-based chain. This is why all parachains in the Polkadot network run parallel to the relay-chain. Substrate chains have three distinct features that make them, and thus Shift, next-generation:</p>
          <ol>
            <li>1. A dynamic, self-defining state-transition function (STF).</li>
            <li>2. Light-client functionality.</li>
            <li>3. A progressive, hybrid consensus algorithm with fast block production and adaptive, definite finality.</li>
          </ol>
          <h2>Why Polkadot/Substrate?</h2>
          <p>Shift will be using Polkadot and Substrate as a modular framework. Not only does this mean we will benefit from the work of the framework’s developers moving forward, we will also be able to incorporate some standard Substrate modules from the default Substrate Runtime Module Library (SRML) into our own. This grants us a large amount of freedom over the Shift blockchain’s logic, letting us change data types, add or remove modules, and, crucially, create our own custom, storage-related modules.</p>
          <p>The three primary features of our approach that will allow us to take our blockchain-integrated IPFS storage solution to the next level are:</p>
          <ol>
            <li>
              <h3>1. BFT-based hybrid consensus (GRANDPA and BABE)</h3>
              <p>Given that blockchains are managed by a network of decentralized nodes, ensuring those nodes maintain consensus on the blockchain’s state is essential. Many blockchain protocols have the property of eventual consensus, which means that at some point in the future all nodes will agree on the truthfulness of the blockchain’s state. As this eventual consensus may take significant time to be reached (hence exchanges often require multiple block confirmations), the time until a transaction is declared final can be subjective. In other words, blockchain protocols generally only give a <strong>probabilistic finality</strong> on a specific block. However, what we would prefer is to have <strong>provable finality</strong> (irreversible consensus), which means that all participants have a universal agreement on the canonical chain with no chance of reversion. This is useful because it allows light-clients, who do not maintain the full chain or are not actively listening to the network, to establish its state. What is more, this further benefits the provision of scalability in that not every node in the network needs to contain all data. A sharded network is useful for us as Proof-of-Capacity and Proof-of-Storage challenges, essential components of our storage network, will not overload blockchain nodes with the results of the challenges. Instead, every blockchain node maintains the results of just a few storage nodes.</p>
              <p>The above is accomplished through Substrate’s introduction of GRANDPA (GHOST-based Recursive ANcestor Deriving Prefix Agreement), a “finality gadget” that is designed to give stronger and faster guarantees on the finality of blocks. Specifically, it prevents them being reverted after some process of Byzantine agreements has taken place. What makes Polkadot unique is that it uses a hybrid form of Byzantine Fault Tolerance (BFT) consensus. Hybrid consensus separates the finality gadget from the block production mechanism, known as BABE (Blind Assignment for Blockchain Extension). This is a way of getting the benefits of both probabilistic finality (the ability to always produce new blocks) and provable finality. It also avoids the corresponding drawbacks of each mechanism: the chance of unknowingly following the wrong fork in probabilistic finality and the chance of “stalling”—not being able to produce new blocks of provable finality. By combining these two mechanisms, blocks can be rapidly produced, while the slower finality mechanism is run in a separate process that finalizes those blocks without risking slower transaction processing or stalling.</p>
              <p>We believe this hybrid consensus is ideal for Shift’s use case as a global file system. Byzantine Fault Tolerance as the consensus algorithm brings more security to the platform, while the hybrid consensus allows for transactions to be quickly processed and finalized. This will allow Phoenix to rapidly execute PIN transactions on the IPFS cluster and users to carry out PINs quickly and efficiently after LOCKing their SHIFT. Without this provable finality, an intensively used system may be forced to make assumptions about the validity of transactions that could later prove to be false, compromising the system by risking data being stored on nodes illegitimately. These two components relevance to Shift can be summarised in the following way:
                <ul>
                  <li>
                    <h5>GRANDPA</h5>
                    <p>In the case of Shift, a partially synchronous network model, GRANDPA works as long as ⅔ of the participating nodes are honest, i.e. GRANDPA can cope with ⅓ Byzantine nodes (nodes demonstrating arbitrary behavior such as not sending messages, or recording incorrect input values). A notable distinction is that GRANDPA reaches agreements on chains rather than blocks, greatly speeding up the finalization process, even after long-term network partitioning or other networking failures. In other words, as soon as more than ⅔ of Shift validators attest to the chain containing a certain block, all blocks leading up to that one are finalized simultaneously.</p>
                  </li>
                  <li>
                    <h5>BABE</h5>
                    <p>BABE is the block production mechanism that runs between the Shift validator nodes and determines the authors of new blocks. BABE assigns block production slots to Shift validators according to stake and using the Polkadot randomness cycle that is based upon a Verifiable Random Function (VRF) lottery.</p>
                  </li>
                </ul>
              </p>
              <small><strong>GRANDPA white paper:</strong> <a href="https://research.web3.foundation/en/latest/polkadot/GRANDPA" target="_blank">https://research.web3.foundation/en/latest/polkadot/GRANDPA</a></small>
            </li><br/>
            <li>
              <h3>2. Nominated Proof-of-Stake (NPoS)</h3>
              <p>Besides the algorithm that determines how consensus among nodes is achieved, it is also important to have a secure way of selecting the validators that participate in the consensus protocol. This allows for efficiency improvements as the number of  nodes producing blocks is reduced. We have put a lot of thought into choosing secure validator selection logic, reaching the conclusion that the new Shift chain will be best served by using Polkadot’s own, new Nominated Proof-of-Stake (NPoS) system. While similar to DPoS, it introduces some radical changes that improves its operation.</p>
              <p>The core concepts mirror that which our community will be used to. In pre-defined cycles, the system selects a group of entities called <strong>validators</strong> (currently known as delegates) who during a cycle will play a key role in highly sensitive protocols such as block production and the GRANDPA finality gadget. This task demands that they: invest in node operation, ensure a high communication responsiveness, and build a long-term reputation for reliability. In contrast to DPoS, they must stake their Shift tokens for a duration of time as a form of collateral to qualify as a validator. While they’ll receive block rewards for conforming with the role’s requirements, their stake will be slashed whenever they deviate from the expected behavior necessary to uphold the consensus protocol. Any node operator can publicly volunteer to act as a validator candidate, however, for operational reasons, only a limited number of validators can be selected. We anticipate initially beginning with 100 validators, but, as the platform scales, will consider increasing this number.</p>
              <p>The system also encourages any SHIFT holder to participate as a <strong>nominator</strong> (currently known as a voter). A nominator publishes a list of validator candidates that they back, and stakes an amount of SHIFT tokens as a means of supporting them. In contrast to DPoS, if some of these candidates are elected as validators, the nominators automatically share their block rewards with them according to a preset and time-locked variable. However, they are also subject to whatever sanctions the validator is dealt. This means that if the stake of a validator gets slashed, the stake of that validator’s nominators are also slashed. The concept of shared slashing is a radical improvement on DPoS, as it introduces a strong game theory element that motivates nominators to carefully consider their nominations based on good security practices, and not purely on financial motives. As long as nominators are diligent in their choice and only support validator candidates with a good and well-maintained reputation for reliability, their role carries low risk and provides a continuous source of additional Shift tokens. What is more, an added protection exists in that validators that fail to perform as expected will eventually be removed from the validator set automatically, thereby ending the slashing process.</p>
              <p>Besides the slashing feature, there are two more distinctions worth mentioning:
                <ul>
                  <li>
                    <h5>Fair representation</h5>
                    <p>In both DPoS and NPoS, a fixed (maximum) number of validators is elected in each cycle based on the votes of the nominators. The winners of each election are assigned a block production slot according to a randomness cycle . Now, the main question is: how exactly are validators elected according to the votes of nominators? In DPoS a vote represents the ongoing account balance of the account holder, assigned to up to 101 delegates. The 101 candidates with the largest amount of vote weight then “win” a block production slot in that cycle. This election method, however, does not give representation to minorities. Ruling out minorities in this way leaves the system open to being compromised by various methods, not least by the collision of popular validator candidates.</p>
                    <p>NPoS, in contrast, uses a more proportional election method that also gives representation to minorities, achieving fair representation. In NPoS validators are elected based on their own self-stake and the stake from nominators that is nominated to them. While election results still come down to the top n validators (as measured by stake) being selected from the validator set, the way this is achieved has far greater subtlety than DPoS. The method, called the sequential Phragmén method (named for the Swedish mathematician, Lars Edvard Phragmén), aims for a fair representation property. This is achieved through the implementation of the rule that, in case n validators need to be elected, any nominator holding at least one n-th of the total stake is guaranteed to have at least one of their trusted validators elected. Subsequently, if a nominator gets two or more of its trusted validators elected, her stake is automatically distributed among them, in such a way that the validators’ backings are as balanced as possible. Furthermore, the backing of the initially elected validators are equalized so that it is made as difficult as possible for an adversarial pool to eventually get a validator elected. This minimum amount of backing required by any elected validator is called the security level. The goal of the NPoS selection process is to provide an election result that achieves fair representation and a security level that is as high as possible. This gives rise to a rather challenging optimization problem for which NPoS uses a heuristic algorithm with strong guarantees on security and scalability.</p>
                  </li>
                  <li>
                    <h5>Chain-regulated reward distribution</h5>
                    <p>While the phenomenon of validators sharing their rewards with their nominators—a great incentive for non-validators to participate in the chain’s governance—also occurs in DPoS, these payments were not automatically regulated by the chain’s protocol. On the current Shift chain this resulted in distributions that were difficult to verify and track, as well as adversarial pools that collude or cease distributing their stated shares.</p>
                    <p>NPoS addresses this issue through chain-regulated reward distribution. Validators are paid for authoring blocks based on the total amount of Shift tokens at stake, with the reward peaking when the amount staked is at 50% of the total supply. The block authoring payout is equally split across all validators that have authored a block, with each able to keep a part of their reward by setting their preference for the validator payment in SHIFT. The SHIFT remaining are then shared based on the bonded stake behind each validator. This includes the stake of the validator itself, as well as any stake bonded by nominators. These SHIFT will be distributed proportionally, though only when the dynamic block reward assigned to the validator is sufficient to ensure that the amount left over for its nominators is greater than zero.</p>
                    <p>While we hope that this introductory explanation of NPoS is a good start point in familiarizing the community with the new validator election method, we ask you to understand that many essential details required to participate in Shift’s future NPoS scheme are still being determined. In light of this, we will keep the community updated as details and rules are solidified.</p>
                  </li>
                </ul>
              </p>
            </li>
            <li>
              <h3>3. Off-chain workers</h3>
              <p>A specific benefit of Polkadot relates to the Shift chain’s use in the storage of IPFS data. Due to the fact that IPFS data, other than hashes, is stored off-chain, achieving on-chain consensus on the state of this data is problematic. As a storage-based blockchain, the Shift chain will nevertheless need to be able to manage a lot of off-chain data. Therefore, it is very important that there is a secure and scalable system in place that can incorporate off-chain data in the on-chain state in the most effective way possible. In the current, Lisk-based (testnet) chain the “consensus” on off-chain data is directly achieved at the event that a block that includes a data field for storage capacity (off-chain data) is accepted or rejected. The primary disadvantage of this method is that if a block is rejected by the majority of validators based on a violation of the tolerance factor for off-chain data, the block production of on-chain data is also hindered (unfinalized and remaining in the transaction pool). We have seen this phenomenon on the testnet chain where almost no new blocks were produced due to the large dispersion of IPFS clusters statistics needing to be included in blocks. </p>
              <p>Substrate addresses this issue with the introduction of off-chain workers that make off-chain data integration more secure and efficient. The off-chain worker subsystem (included in any Substrate node) is essentially an intermediary relay system between the chain and external services like Phoenix. It allows execution of long-running and non-deterministic tasks. Off-chain workers have their own execution environment outside of the Substrate runtime. This separation of concerns is to ensure that the block production is not impaired by long-running tasks. However, as the off-chain workers are declared in the same code as the runtime, they can easily access the on-chain state for their computations.</p>
              <p>To communicate results back to the chain, off-chain workers can submit extrinsics that are later included in subsequent blocks. The beauty of this subsystem is that an on-chain verification mechanism (e.g. voting, averaging, challenging) can be implemented to determine what information gets into the chain. By this means we can make sure that validators are only provided with IPFS data that was computed by a majority of the off-chain workers. As a result, no blocks will unnecessarily be missed and the chain will keep running smoothly.</p>
            </li>
          </ol>
          <h2>What’s next?</h2>
          <p>We currently already have a development chain running for the purpose of experimenting with NPoS. So far the chain is working as expected. This means that for a mainnet launch only two things are left that need to be readied. These are the account conversion and the production of a node installer, both of which are currently being worked on.</p>
          <ul>
            <li>
              <h3>Account conversion</h3>
              <p>Account conversion is by far the most complex task of the two that remain. This is due to the fact that user accounts are bound to the Lisk-style key derivation. To remedy this, we will need to find a way of moving balances from the end block of the old chain to the 0-block of the new chain. In order to achieve this we intend creating an on-chain ‘smart’ contract, essentially a fixed module or a custom transaction type that the user interacts with to prove ownership of an old address in order to claim funds. The major advantage of this approach is that it will allow us to cease using mnemonic key derivation entirely and switch to a hierarchical deterministic (HD) derivation like SLIP-0010 or the Cardano-style HD derivation.</p>
              <p>HD key derivation is a cryptographic technology that automatically generates a hierarchical tree-like structure of private/public keys using a path. It allows the generation of a unique key pair for each leaf (path) with just one single master seed. The advantage of HD key derivation is it allows the user to manage multiple different key pairs within their blockchain account, each of the key pairs serving a different purpose, such as the stash (staking/bonding), controller (sending/signing) and session (running a node) accounts in Substrate. From a security perspective, this is very important because a user can keep their master seed in cold storage, while still being able to sign ‘in the name of’ X. Also, if a session key gets lost or compromised, a user could simply create a new one from the controller account. Please note that HD key derivation is thus a solid solution to guarantee account security and a far more secure and efficient approach than the Lisk two passphrase solution.</p>
              <p>So how will this smart contract or custom ‘claim’ transaction likely work? Although the procedure is yet to be fully determined, the transaction module will likely function as follows. All legacy accounts will be recorded in the 0-block of the new chain where they already have been multiplied according to a factor of 10, as was discussed in the previous newsletter. All the user will need to do is enter their secret(s) or passphrase(s) in an input-field. By entering the passphrase(s), a transaction signature will be created in the old style. Validator nodes will receive this signature (not the secret itself!) as proof that the signer is the legitimate owner of the corresponding legacy account (this will also mean the claim is signed and thus a legitimate request). Subsequently, nodes will verify the public key of the signature by doing a lookup in the 0-block to see if the public key exists. Once verified, the validator nodes will move the funds of the legacy account to a new account (a new ed25519 key pair) with the same single mnemonic passphrase used when the legacy account was first created. This transaction can only be executed once.</p>
              <small><strong>Please note:</strong> In order to prevent collision during the claiming process all users must have initialized their account on the current Lisk-based chain by sending one outgoing transaction to register the public key. This is an example of good practise, as, while incredibly unlikely, accounts that have not registered their public key could hypothetically be in danger of losing their funds due to collision or brute forcing.</small>
            </li><br/>
            <li>
              <h3>Node installer</h3>
              <p>The second thing we’re currently working on is a Shift node installer. We are developing something that is able to grab the latest sources from Substrate and our custom code from our repository using git, and subsequently efficiently merge both together to build a Shift node. This will likely be done using submodules. As new Substrate versions are released, this will allow us to easily maintain the Shift Core, test compatibility with our custom code and then compile the sources and update the commit hash.</p>
            </li>
          </ul>
          <h2>Conclusion</h2>
          <p>As for a release date of the new Shift chain, we can reveal that we hope to launch a testnet in the next few weeks, with the mainnet launch currently planned to take place before or, at the latest, during early 2020. As the depth of this newsletter may imply, we are incredibly happy and engaged with our choice of Polkadot/Substrate for the new Shift core, looking forward with great anticipation to the mainnet launch. We believe this will mark a new era for the Shift Project, incorporating our team, community and technology within a new and exciting ecosystem of collaborating projects. This will give us the opportunity to share our ambitions and work with a wider network of developers, enthusiasts and users with a mutual interest in bringing about censorship resistance in the field of online storage and hosting. We thank you for your commitment to the Shift Project, and ask you to stay tuned as more details of the migration will be revealed soon.
          </p>
          <p>
          Sincerely,<br/><br/>
          The Shift Team
          </p>
        `
      },
      {
        id: 6,
        datetime: '2019-11-27',
        day: '27',
        month: 'nov',
        category: 'announcement',
        title: 'Migration to Polkadot / Substrate Summary',
        intro:
          '<p class="Intro">The Shift Team can now announce that the current Lisk-based Shift Core will be migrating to the Polkadot/Substrate codebase.<ul><li>Polkadot is an inter-chain blockchain protocol and serves as the foundation for an internet of blockchains. Polkadot solves interoperability and scalability by allowing all interconnected chains to share in security through a central blockchain: the Polkadot relay-chain. Shift will function as a chain within this network.</li><li>Substrate is a next-generation, modular blockchain framework and used to build Polkadot. All chains built with Substrate can natively interact with the Polkadot relay-chain. The new Shift Core will be built using Substrate.</li></ul></p>',
        content: `<p>The Shift Team can now announce that the current Lisk-based Shift Core will be migrating to the Polkadot/Substrate codebase.
            <ul><li>Polkadot is an inter-chain blockchain protocol and serves as the foundation for an internet of blockchains. Polkadot solves interoperability and scalability by allowing all interconnected chains to share in security through a central blockchain: the Polkadot relay-chain. Shift will function as a chain within this network.</li>
            <li>Substrate is a next-generation, modular blockchain framework and used to build Polkadot. All chains built with Substrate can natively interact with the Polkadot relay-chain. The new Shift Core will be built using Substrate.</li></ul>
          </p>
          <h2>What consensus algorithm will the new Shift Core be using?</h2>
          <p>The new Shift Core will be using a hybrid consensus system that is based on Byzantine Fault Tolerance (BFT). Hybrid consensus splits up the finality gadget (GRANDPA) from the block production mechanism (BABE) and allows for fast block production and definite finality.</p>
          <h2>Who will be creating the blocks and maintaining the new chain?</h2>
          <p>Validators will run a validator node and produce blocks on the Shift blockchain. Shift will be using a new method to select the validators that participate in the consensus protocol: Nominated Proof-of-Stake (NPoS). Although very similar to Delegated Proof-of-Stake (DPoS) in the presence of validator (delegate) and nominator (voter) roles, it possesses many improvements over that system. The primary advantage is that both validators and nominators need to stake tokens in order to participate in the blockchain’s governance system. If a validator verifiably acts against the interests of the network, a proportion of its stake and the stake of its nominators gets slashed. If a validator continues misbehaving, it will automatically be removed from the validator set entirely. This will encourage validators to play by the rules of the consensus protocol and nominators to carefully consider and reconsider their nominations, only supporting validator candidates with a reputation for reliability.</p>
          <p>As long as validators demonstrate appropriate behavior the system will incentivize them with block rewards. As long as their engagement with the consensus system remains consistent, the role of nominator carries low risk and provides a continuous source of revenue as the block rewards are automatically shared in the form of chain-regulated (pool) payouts. More information on the specifics and implications of the selection method will follow soon.</p>
          <h2>Do I need to act in order to keep my tokens?</h2>
          <p>No. We will transfer all account balances of the end block of the current chain to the genesis block of the new chain. Once this is done, it is only when you wish to perform a transaction that you’ll need to sign a claim transaction (by entering your current passphrase(s)) to unlock the funds in your Substrate chain account. You will have a new public key and wallet address, but your passphrase will remain the same. As was mentioned in the previous newsletter, your account balance will be multiplied by a factor of 10. This means that for every 1 SHIFT you currently hold you will have 10 SHIFT on the new chain.</p>
          <h2>Why migrate?</h2>
          <p>Over the past few years the Lisk codebase has demonstrated many drawbacks in terms of security and its suitability for our purposes. In essence, its development does not meet the needs of our visionary Shift blockchain. What is more, since Lisk’s foundation superior alternatives have emerged. Migrating to a modular core that manages the consensus and the networking layer will allow us to devote more time to Phoenix and our custom blockchain modules, innovating in the space at a faster rate. It will also incorporate us within a larger ecosystem of interactable projects, developers and users.</p>
          <h2>When will the migration take place?</h2>
          <p>The mainnet launch of the new Shift Core is planned to take prior to or following the New Year. The most important task that remains is the account migration, followed by completion of a Shift node. The first of these is a complex task as it entails a change from Lisk-style key derivation to hierarchical deterministic (HD) derivation in a manner that allows retention of the passphrases our users associate with their Shift accounts. That said, the team is progressing well in meeting this challenge.</p>
          <h2>Where can I learn more?</h2>
          <p>Please see the in-depth newsletter we have written for more detailed information on the <a href="/news/7">migration to Polkadot / Substrate</a>.</p>
          `
      },
      {
        id: 5,
        datetime: '2019-10-14',
        day: '14',
        month: 'oct',
        category: 'announcement',
        title: 'The Next Chapter: Core Migration & Partnership',
        intro:
          '<p class="Intro">We appreciate your patience in awaiting this newsletter. As many of you are likely already aware, in addition to our usual development work this last week we’ve been involved in some unanticipated but necessary back and forth with a cryptocurrency exchange. As this topic has also obviously occupied a lot of our community’s time, we’d like to cut to the chase and address it directly, before then moving on to some positive news for the project.</p>',
        content: `<p>Dear Community,<br/><br/>We appreciate your patience in awaiting this newsletter. As many of you are likely already aware, in addition to our usual development work this last week we’ve been involved in some unanticipated but necessary back and forth with a cryptocurrency exchange. As this topic has also obviously occupied a lot of our community’s time, we’d like to cut to the chase and address it directly, before then moving on to some positive news for the project.</p>
          <h2>Bittrex Delisting</h2><p>On September 27th Bittrex announced their intention to delist the SHIFT token. This came as a complete surprise to us. On learning of the decision, our immediate response was to commence dialogue with Bittrex in order to discuss it with them. Due to the dialogue that followed being necessarily subject to a non-disclosure agreement (NDA), we regret that we are limited in our ability to outline the specifics of the conversation but we can confirm that the delisting is being carried out in accordance with the factors outlined in the <a href="https://bittrex.zendesk.com/hc/en-us/articles/360000474232-Bittrex-Market-Token-Removal-Policy" target="_blank">Bittrex removal policy</a>.</p>
          <p>Together with Bittrex we subsequently prepared an announcement that was approved by their legal department. It is this process that took longer than expected, for which we apologize. An abridged version of that announcement is as follows:</p>
          <p><i>It is necessary for us to emphasize at this point that the Bittrex SHIFT wallets are to be removed on November 1st. As a result, we recommend that you withdraw your funds. Here you can find the <a href="https://bittrex.zendesk.com/hc/en-us/articles/360029362911-What-options-do-I-have-if-my-coin-token-was-delisted" target="_blank">details of the appropriate procedure</a>.</i></p>
          <p>To reiterate, if you possess any SHIFT on Bittrex, we strongly encourage you to withdraw them to an account for which you hold the keys prior to the wallet removal. If you do not possess one already, such an account can be created using <a href="https://github.com/shiftnrg/shift-nano/releases" target="_blank">Shift’s Nano wallet</a>.</p>
          <h2>Core Migration</h2><p>In our previous newsletter of September 26th we announced that we plan to migrate to a different modular core than the historic Lisk core that we are currently using. This migration is continuing as planned and we are happy to now be able to elaborate on the reasoning behind the migration and share some further details.</p>
          <ul><li>The main motivation for our decision to make the planned migration to a modular core is that it will better allow us to devote resources to the development of Phoenix and our custom blockchain transaction modules. Up until now, in addition to these tasks, we have also been required to maintain a modified Lisk core, something that took time away from our developers that they could otherwise spend on adding value to our technology. Therefore, the choice to port to a modular core that will remove this necessity strikes us as the right decision, allowing us to more easily conduct blockchain maintenance through the implementation of patches the core’s own developers create while leaving our own custom modules intact.</li>
          <li>One might ask, why, if Lisk’s current core is now modular, doesn’t Shift simply work off that? Our decision to not take that path is a result of our desire to choose the best possible core for the project from all of those that are available. With little limiting the scope of the search process, we shall use this opportunity to find the one we believe has the brightest future.</li>
          <li>At Shift we envision our decentralized storage solution being available to all connected bridge chains within a larger blockchain ecosystem, each of which may wish to use our technology for their own unique hosting purposes. We have thus taken into account the existence of other promising projects within the specific ecosystems we have been researching.</li>
          <li>We have previously shared our criticism concerning Lisk’s DPoS consensus model. These feelings have not changed. What is more, our aversion to maintaining the DPoS system in its current state is not just based on the impediments it creates in maintaining decentralization and security, but also the negative impact it has on our community. We therefore plan on using the core migration as an opportunity to overhaul the consensus model for the good of the project, the community and the platform’s users.</li>
          <li>A further advantage of existing within the larger ecosystem of a modular core, an advantage that we have become particular eager to see realized due to recent events, is that doing so has the potential to grant interoperability through Hashed Timelock Contracts (HTLCs) or Atomic Swaps. In available, these would provide a decentralized means of exchanging one token for another, something we would be excited to see implemented as a function available to Shift users.</li>
          <li>A core migration also provides us with the opportunity to make an important and smoothly actualized adjustment to the Shift supply. The primary motive behind this is to make individual tokens more affordable to a greater number of users and small investors, yet without impacting the underlying value of the company. This will also have the practical effect of increasing liquidity. This change will be carried out by multiplying account balances by a factor of 10 in the genesis block of the new chain. This means that for every 1 SHIFT you hold at the current chain you will receive 10 SHIFT at the new chain. The end block of the current Lisk-based Shift chain, that will contain the balances for the genesis block, will not be announced until we have an exact date for the mainnet launch.</li>
          <li>With the supply increase the inflation rate will also be altered. More information on this will be released closer to the launch.</li>
          <li>While we have narrowed down candidates, we have not yet concluded the selection process of our modular core candidates. However, we are able to share some of the features that we are looking for in our new core: modularity, interoperability, scalability, secure governance, reliable staking and/or voting rules and validator selection logic.</li>
          <li>Completion of core migration, i.e. a mainnet launch, is planned for Q4 of 2019. We hope to announce more information of the migration process and chosen candidate within the next few weeks.</li></ul>
          <h2>Partnership with China’s Largest Anti-Censorship Project</h2><p>We are happy to finally be able to disclose some details of the work we have been doing on our partnership. We are proud to announce that we are currently collaborating with Open Technology Fund awardee, <a href="https://greatfire.org" target="_blank">GreatFire</a>, China’s largest anti-censorship project. By helping to meet the technological challenges that they are facing in serving content, we hope to play a role in ensuring the provision of the information and technology they provide in a resilient manner able to circumvent domain blocks carried out by the Chinese government. Although we can't disclose everything that’s in the pipeline, we can disclose some of the work we have been conducting with GreatFire:</p>
          <ul><li>Shift has been mirroring GreatFire’s FreeBrowser homepage, a news aggregator/information resource, on our decentralized and censorship-resistant network. Escaping the disinformation and propaganda spread by the government under which Chinese citizens live is almost impossible, yet this service allows such people to keep themselves informed of news and views originating from outside of their country that might otherwise be targeted for removal. Our software grabs content from GreatFire's URL using an automated sync script, encrypts it (preventing a middleman from observing the traffic), adds it to our IPFS network, pins the hash to the blockchain, and publishes it to the InterPlanetary Name System (IPNS). What is more, we are currently streamlining this process further by replacing the last step of this process with our full replacement of IPNS. Reference: <a href="https://greatfire.shiftproject.com" target="_blank">https://greatfire.shiftproject.com</a>.</li>
          <li>The one remaining issue prior to going live with our hosting solution is a means of circumventing China’s advanced IP surveillance that is used to enable the blocking of any IP to which connections are made. In order to overcome this final hurdle we are currently searching for viable means of masking node IPs, addresses that remain fundamental in carrying out the peer discovery process used within any peer-to-peer network.</li></ul>
          <h2>Replacement for the InterPlanetary Name System (IPNS)</h2><p>Lastly, we are pleased to be able to share that we have developed a blockchain solution that functions as a complete replacement for the InterPlanetary Name System (IPNS).</p>
          <p>Within our system, a pinning transaction contains an optional (extra) data field: the parent ID. A storage user is able to point their DNS TXT record to this parent ID, allowing them to modify their file without the need to update their DNS TXT record, i.e. pointing it to a new IPFS hash every time the file has been edited. This is incredibly useful due to the nature of IPFS, wherein a file’s hash will change with any modification made to it. Without the incorporation of this data field, one either needs to re-publish a website following every update, or run a re-publish script on a node while putting the relevant IPNS keys onto a server (something that creates an obvious safety risk). The introduction of the parent ID solves both of these issues as one only needs to create the parent ID once and use it within every related PIN transaction, thus pointing the DNS TXT record to that parent ID while blockchain keys, necessary for any PIN transaction, remain safe at the client level.</p>
          <p>We are currently in the process of modifying our custom IPFS daemon in such a way that when a website domain is being requested, Phoenix/IPFS resolves at the blockchain to find the latest corresponding IPFS hash.</p>
          <h2>Conclusion</h2><p>While this has not been an easy week for anyone involved in the Shift Project, we would like our community to rest assured that we are forging ahead, intent on seeing our vision for a resilient hosting solution that serves the interests of all people made a reality.</p>
          <p>Sincerely,</p><p>The Shift Team</p>`
      },
      {
        id: 4,
        datetime: '2019-09-26',
        day: '26',
        month: 'sep',
        category: 'announcement',
        title: 'New Shift Project Website: The Project Reborn',
        intro:
          '<p class="Intro">As many of you will be aware, this is our first newsletter after an extended period during which we have been devoting a great deal of time and energy to the fulfilment of several important objectives designed to bring Shift to the next stage in its evolution as a platform, some of which we have been able to discuss publicly and others we have had to be more discreet about. While those users of our project Discord have had some hint of what has been going on in the background, we are happy, today, to be able to release to the community as a whole information on many of these exciting developments. We’d now like to outline some of the Shift Project’s latest and most important news.</p>',
        content: `<p>Dear Community,<br/><br/>Welcome to the new Shift Project website!</p>\
          <p>As many of you will be aware, this is our first newsletter after an extended period during which we have been devoting a great deal of time and energy to the fulfilment of several important objectives designed to bring Shift to the next stage in its evolution as a platform, some of which we have been able to discuss publicly and others we have had to be more discreet about. While those users of our project Discord have had some hint of what has been going on in the background, we are happy, today, to be able to release to the community as a whole information on many of these exciting developments. We’d now like to outline some of the Shift Project’s latest and most important news.</p>\
          <h2>The New Shift Project Website</h2><p>As we are sure you are aware, our much anticipated new website is live! Created in collaboration with Ibizz, a respected web development agency based in the Netherlands, the Shift Project now benefits from a professional public face that both outlines our core values and offerings, while also demonstrating the innovation and potential of our technology. Hosted on the Shift development network running the latest version of Phoenix Cluster and IPFS, this new website presents for the first time in one place our vision for the project. Over the coming weeks the site will be further improved, with the addition of dynamic content, pages that go into greater depth by covering the specifics of our token locking model, economic formula and other technical information on the Phoenix/IPFS network. Perhaps the most exciting aspect of the new website for longtime Shift Community members, however, is that it already presents for the first time essential information on our transition to a new blockchain core, an ambition we are now pleased to be moving forward with.</p>\
          <h2>Visionary Blockchain Core</h2><p>It is no secret that for a long time we have had some dissatisfaction with the historic Lisk Core. While it has served the purpose of protecting the blockchain against 51% attacks that have afflicted many Proof-of-Work projects admirably, we believe a migration to a more optimized core is required to meet our objective of provisioning an invaluable decentralized hosting application. In light of this, we have been intensively researching existing secure and well-established modular cores and reaching out to their developers. From among these we intend to select the one that will provide the optimal foundation for our specific use case and its need for scalability. The advantage of a modular core is that maintenance will be far less labor-intensive, allowing us to devote more time to our custom transaction modules and to Phoenix, our main value proposition. Thanks to the assistance of a new member to the Shift Team, our research is close to completion and we plan to start on the migration during quarter three of 2019, finalizing the process by the conclusion of quarter four. Though we are not yet able to reveal the modular core we shall be adopting due to ongoing discussions with several projects, we would like to assure the community that a binding decision to port will soon be made and announced.</p>\
          <h2>New Developer</h2><p>Since the beginning of September, Shift has had the benefit of an additional talented member working on its development team. Arriving at Shift following the conclusion of a long term role at another blockchain project, Francis M. has been taking the lead in researching the various modular cores we have been considering for migration. Once this task is complete, it will be he and Ralf who will then be managing the core migration collaboratively, after which they will devote themselves to Shift’s custom transaction modules and features related to the Shift Core.</p><p>We consider Francis an asset to Shift and are excited to see his contributions as a member of the growing Shift Team.</p>\
          <h2>Next Development Phase: Proof-of-Capacity, Proof-of-Storage & Incentive Model</h2><p>In addition to research and preparation for the core migration, a further reason we have been very busy lately is the time we have been devoting to laying the groundwork for our next major development phase. Once core migration has been completed, we shall be fully instigating work towards the completion of three major development milestones that will be responsible for the extension of platform functionality to include compensated storage provision. In chronological order, these are: a Proof-of-Capacity (PoC) algorithm, a Proof-of-Storage (PoS) algorithm and an incentive model for the storage node operators. These three components have already passed the initial design stage and are now ready to be moved into full development status once core migration is complete. Furthermore, in order to speed this process once it is fully underway, we have submitted several grant applications intended to support this development phase, some of which we hope to shortly hear responses from.</p>\
          <h2>Recap: Shift Core v7.0t and Phoenix v0.9</h2><p>Prior to concluding this newsletter, we’d would like to provide a brief recap of the updates that we’ve recently made to the two key components of Shift Project’s technology suite, the Shift Core, our blockchain, and Phoenix, our IPFS daemon.</p>\
          <p>Since the release of our last newsletter, we succeeded in troubleshooting a message relaying issue with Phoenix that had resulted in the postponement of Shift Core v7.0t until its release in July. Prior to its release, we had discovered that messages were not being relayed effectively to all peers in the network and, as a result, Phoenix peers were reporting very different values for the cluster size. As cluster size consensus is integral for the correct functioning of the economic formula used to dynamically determine the value of tSHIFT tokens relative to storage capacity, and a lack of consensus would result in forking of the testnet blockchain (due these values being stored in blocks), we turned our full attention to finding the root of the problem. After a great deal code changes and testing, we finally solved the issue. It was successfully combated by adjusting the way Phoenix works to allow messages to be received by peers even if the sending peer is not recognized from the recipient’s peer list. This change, released in the form of Phoenix v0.9, has resulted in all storage peers of the Phoenix Cluster now reporting the exact same values for the cluster size, the major breakthrough necessary to activate Shift Core v7.0t.</p>
          <p>During the period of troubleshooting, we also created a working demo of the hosting abilities of Phoenix and the blockchain released as the interactive storage demo. This demo was released shortly after the release of Shift Core v7.0t and was positively received. The demo, being a proof-of-concept for the end user interaction of our decentralized cloud hosting platform, showed the simple steps involved in our blockchain-enabled storage and file management. With a faucet created to allow anyone to try it out for themselves, it can be accessed <a href="https://faucet.testnet.shiftproject.com" target="_blank">here</a>.</p>\
          <h2>Conclusion</h2><p>While it has been a long road, we are incredibly happy to have reached this point in our journey with the support of our community. We believe that our new website and its contents allows us to clearly demonstrate to the community and others our vision for the project. The Internet owes its creation to an ambition to connect people directly, peer-to-peer, without the incursion of centralized bodies into the management of communication protocols. By building the best possible decentralized hosting platform, we hope to help protect the ability to share on a network open to all.</p>\
          <p>Sincerely,</p><p>The Shift Team</p>`
      },
      {
        id: 3,
        datetime: '2019-05-10',
        day: '10',
        month: 'may',
        category: 'development',
        title: 'Development Update: Phoenix v0.6',
        intro:
          '<p>As many of you know, two weeks ago we began the process of troubleshooting the online/offline issue that emerged during the release of the newly public Phoenix testnet cluster. Upon launch, it quickly became evident that consensus was not being reached throughout the network on the online/offline status of peers. Differing values for the cluster size were being relayed by many peers, a state that could, if the release had gone ahead, have resulted in inconsistent data being recorded in blocks and thus an unmanageable number of forks in the chain. In light of this, it was decided that a postponement of the release of Shift Core v7.0t and the activation of its token locking mechanism would be necessary until the matter is resolved. If you would like to know about the issue in greater detail, please consider reading our <a href="/news/2">previous newsletter</a>.</p>',
        content:
          '<p>As many of you know, two weeks ago we began the process of troubleshooting the online/offline issue that emerged during the release of the newly public Phoenix testnet cluster. Upon launch, it quickly became evident that consensus was not being reached throughout the network on the online/offline status of peers. Differing values for the cluster size were being relayed by many peers, a state that could, if the release had gone ahead, have resulted in inconsistent data being recorded in blocks and thus an unmanageable number of forks in the chain. In light of this, it was decided that a postponement of the release of Shift Core v7.0t and the activation of its token locking mechanism would be necessary until the matter is resolved. If you would like to know about the issue in greater detail, please consider reading our <a href="/news/2">previous newsletter</a>.</p><p>After analyzing the network, it soon became apparent that the way that the relaying of data was set to function in Phoenix 0.5.6 did not sufficiently account for a variety of conditions under which cluster peers could function. Each peer uses its own peer list to relay messages, and is designed to not relay messages to peers that appear offline. Despite setting up the system so that this peer list is maintained and updated with the online/offline status of each peer based on health checks carried out by pinging at frequent intervals, we found that if a peer went offline but the health check did not register that the peer had gone offline within a sufficient time window, then it resulted in relays being disrupted. As our devnet cluster had not experienced even close to the delays necessary to render it unstable, we had not anticipated the testnet health checks getting out of sync beyond our generous margins for error. It thus became clear that the Phoenix-core, which is responsible for data relaying, needs to be made less prone to asynchronous health checks.</p><p>Once the root of the issue was established, we immediately began to design a new method of data relaying, while also maintaining our goal of creating an adaptable Phoenix-core (p2p library). For our own use case, Phoenix Cluster, we will be implementing a method for relaying that uses a <a href="https://en.wikipedia.org/wiki/Gossip_protocol" target="_blank">gossip protocol</a> and does not depend on the online/offline status of the peer list. In addition to refactoring the gossip code to Phoenix-core, we have also decided to implement several other improvements that will contribute to mitigating the online/offline issue and improving the collection of cluster statistics. All these changes can be found below and, once they are all finalized, will be released together as a part of Phoenix v0.6.</p><h2>Phoenix v0.6: Completed Subtasks</h2><ul><li><h3>Add persistent public peer keys</h3><p>With Phoenix 0.5.6, the public key of each peer was not persistent and would change on each occasion that a peer rejoined the cluster. The changing of keys made the relaying of data less efficient because it meant that when a peer was restarted, the new key had to be sent to all other peers. This was something that also contributed to the pre-existing relaying issue where the public key of the new peer was not being sent to all other peers, causing even more peers to fail to see each other. With some peers able to communicate but others not, with time and more reconnections the number of peers able to communicate gradually decreased as the network grew more and more out of sync.</p><p>Within Phoenix v0.6 peers have persistent keys.</p></li><li><h3>Go data race prevention/locking</h3><p>There is a possibility that a principal factor in the issue in which peers were getting out of sync may be the <a href="https://golang.org/doc/articles/race_detector.html" target="_blank">‘go data race condition’</a>. The peer list was being modified in multiple places within the code of Phoenix-core without its content being locked down, which meant that if the peer list itself changed, those changes were not reflected elsewhere within the goroutines.</p><p>Phoenix v0.6 now uses a lock for the peer list anytime a peer edits or reads from it, preventing the list from being changed.</p></li></ul><h2>Phoenix v0.6: To-Do List</h2><ul><li><h3>Refactoring the message relaying code (gossip implementation)</h3><p>With the gossip protocol a peer can relay a message to all peers in the network without the need to either have all the peers included in its peer list or know the online/offline status of all other peers. The flow of the relaying therefore becomes:</p><ol><li>A peer relays a message to various peers on its peer list based on both proximity and randomness.</li><br/><li>A receiving peer checks if it knows the message ID and, depending on whether or not it recognizes the message ID, either ignores the message or relays the message to other peers on its own peer list that are not already part of the message chain.</li></ol><br/><p>As a result, each peer will receive any message that is relayed through the entire network, assuming each peer is known by at least one other peer.</p></li><li><h3>Pushing cluster statistics at an interval</h3><p>The way cluster statistics will be collected in Phoenix v0.6 will be optimized. Previously the /stats calls used by the blockchain peers would have the relevant storage peer initiate the entire process and call out to all other peers, thus being dependent on the state of the peer list. With our new procedure, each Phoenix peer will be set to push its storage state at a fixed interval. Assuming the gossip protocol is working correctly, all peers will then receive the storage status of all peers, which they will then sum to get a single value for the cluster size to be kept in memory. This way the /stats calls will be extremely fast due to the ability storage peers will possess to immediately reply with the latest value for the cluster size. If a storage peer fails to relay its storage status within the set amount of time, each other peer will stop including that peer in the sum. Thus, each peer will keep a record of the time of the last received storage state from each peer, saving the effort of having to query the entire network on each /stats request. Since the new method of collecting cluster statistics is a push operation, it means that peers just have to collate the data that they receive.</p></li><li><h3>Making subsequent relays parallel</h3><p>All initial relays within Phoenix 0.5.6 are made in parallel. However, after going through the Phoenix-core code again, we discovered that subsequent relays following that initial relay message were happening in serial.</p><p>Within Phoenix v0.6 subsequent relays will also be made parallel, improving relaying speed markedly.</p></li><li><h3>Adding an IPFS daemon auto-restarter</h3><p>There seems to be an issue on the IPFS end, where the IPFS daemon sometimes crashes for an unknown reason. As this issue can be easily resolved through restarting the daemon, we shall be equipping Phoenix v0.6 with an auto-restarter. Phoenix-cluster will check at a predetermined interval if the IPFS daemon is running and will restart it in the case that it is  not.</p><p>As we plan on updating our custom IPFS daemon to include components of the latest ipfs version shortly, this issue may well soon be fundamentally resolved. Nevertheless, we believe an auto-restarter will be a useful addition in ensuring network integrity.</p></li></ul><h2>When?</h2><p>We have very much appreciated the patience of you, our community, during these past two weeks. We would like to assure you that we are making good progress, having already completed two significant tasks and now moved into the implementation of the new gossip protocol. Next week, we plan on launching Phoenix v0.6 on the devnet, with the possibility of then moving quickly to the public testnet cluster release phase should no issues emerge. That said, as we learned during our last public release, transitioning from a small, closed network to a large public network can result in the emergence of unanticipated issues. We therefore ask for your continued understanding as we carry out this vital testing protocol together.</p><p>Sincerely,</p><p>The Shift Team</p>'
      },
      {
        id: 2,
        datetime: '2019-04-23',
        day: '23',
        month: 'apr',
        category: 'announcement',
        title: 'Shift Core v7.0t Activation (Update: Now Live)',
        intro:
          '<h2>- Update: Shift Core v7.0t Is Now Live on Testnet -</h2><br/><p>Dear Community,</p><p>As you may be aware, we are currently carrying out an upgrade of the testnet version of Shift Core in order to allow the activation of functionalities that fully integrates the blockchain with the Phoenix IPFS cluster. We are now at an intermediary stage in this process, with the majority of forging testnet delegates having upgraded their nodes to version 6.9t and the cluster having been joined by peers run on systems owned by a number of members of the community, whose participation we greatly appreciate. This intermediary stage was begun by switching to Shift Core v6.9t from v6.8.4t, a version that was not designed to support a major version upgrade.</p>',
        content:
          '<h2>- Update: Shift Core v7.0t Is Now Live on Testnet -</h2><br/><p>Dear Community,</p><p>As you may be aware, we are currently carrying out an upgrade of the testnet version of Shift Core in order to allow the activation of functionalities that fully integrates the blockchain with the Phoenix IPFS cluster. We are now at an intermediary stage in this process, with the majority of forging testnet delegates having upgraded their nodes to version 6.9t and the cluster having been joined by peers run on systems owned by a number of members of the community, whose participation we greatly appreciate. This intermediary stage was begun by switching to Shift Core v6.9t from v6.8.4t, a version that was not designed to support a major version upgrade. Following the resolution of this step, we planned to proceed with the activation of the new LOCK and PIN functions on this new cluster, by releasing the major upgrade of Shift Core v7.0t and making it mandatory for forging delegates to be running it by a particular block height. It is necessary, however, to inform you that an issue has emerged in the running of the Phoenix Cluster, that requires a degree of attention and time devoting to it sufficient enough to lead us to conclude that our initial rollout schedule will need to be amended. In order to keep you fully informed of our progress, we would now like to outline the nature of the issue encountered.</p><h2>The Issue</h2><p>The LOCK mechanism used for the claiming of storage capacity within the Shift storage network uses a real time value in order to complete its pricing formula, with the pricing formula providing the system a means of determining the amount of SHIFT tokens required to stake a claim to a given number of bytes on the network at any given time. The process of collecting cluster statistics in order to reach that real time value is conducted in such a way as to ensure decentralization, with all blockchain peers gathering a figure for clusterSize (representing the total amount of disk space being offered by all storage node operators) from a randomly assigned Phoenix peer every 10th block. Once they each have a figure, consensus on the appropriate figure is reached by majority and subsequently written to the chain. As you may be able to imagine, in order to reach an accurate figure and do so consistently, it is necessary that all Phoenix peers are able see (detect) each other and ascertain accurate information on capacity. If this is not the case, the correct running of the pricing formula and the economic system that manages the network is compromised.</p><p>The issue we are currently facing is that large differences in the peer lists held by some Phoenix peers have emerged. At the point of receiving a request for the clusterSize, each Phoenix peer will gather the data from the participants they see in the network, pinging the other Phoenix peers to see both how many are part of the network, and how much disk space each peer is offering: Blockchain peer A pings Phoenix peer C, while at the same time blockchain peer B pings Phoenix peer D. Following this, both Phoenix peers C and D start pinging the Phoenix peers they see and ask each peer on their peer list what diskSize they are offering in order to reach a total figure for clusterSize. Now, ideally, both Phoenix peers C and D should see exactly same peers in the network. If not, they could potentially communicate very different values for the clusterSize to their relevant blockchain peer. Technically this is not always a problem, as some tolerance for minor differences is permitted. However, it becomes a big problem when the differences occur too often and at too great a scale. Unfortunately, that is what is currently happening.</p><p>As some of you may have already noticed from discussions taking place in our project’s Discord channels, different Phoenix peers are seeing different numbers of peers online in the network. The end result of this, is that were we to move forward with the upgrade to v7.0t or continue in the current version, as soon as the blockchain peers began receiving the differing values for the total clusterSize forks would result due to the clusterSize values now being included in the data written to blocks. Therefore, if on Thursday, April 25th, we preceded with the activation scheduled for block 2,725,930 and commenced with writing this new and impermissibly inconsistent data, the chain would soon start forking and eventually stop. That is something we very much want to avoid.</p><p>In light of the current situation and due to the small time frame we presently have in which to resolve the issue, we have decided it is in the best interests of the integrity of the chain to postpone the activation of Shift Core v7.0t until we are comfortable an eventuality such as that outlined above should not occur. As all peers detecting each other and correctly communicating is fundamental to the health of a peer-to-peer network that, resolving this issue definitively has now become our top priority.</p><h2>What’s next?</h2><p>We will postpone the activation of Shift Core v7.0t by releasing v6.9.1t. This version, like the current v6.9.0t, runs the exact same source code as Shift Core v7.0t. Unlike these others, however, it will not include a set activation by block height. Once this is done, we will then proceed with diagnosing the issue and, when a solution is found, patch Phoenix. Following this, as soon as it is established that the majority of the Phoenix Cluster peers are running the new version, we will be able to proceed with the release of Shift Core v7.0t, which will include new code for triggering the activation according to a newly established block height.</p><h2>When?</h2><p>We already have several theories that could explain what is causing the online/offline peers issue, and we as a team are doing all that is necessary to test these theories for the purpose of getting to its root. As we are dealing with an unanticipated eventuality (as is often the case when deploying new technology still in testing), it is conceivable that the issue could be resolved relatively quickly. However, it is necessary for us to be frank in saying that estimating a time frame without knowing the precise origin is inherently difficult. It is thus not out of the realm of possibility that creating a patch that fixes the issue could take several weeks. What we would like to do is ask that everyone currently running a Phoenix node remain on standby and be prepared for us to issue diagnostic patches during the troubleshooting process. Updating quickly when one of these patches is ready could help us find the root of the issue more quickly and restart the transition to Shift Core v7.0t. In addition, since the source code of Shift Core v7.0t has now been made public, we do also want to encourage any willing and able members of our community to help us reviewing the code of the <a href="https://github.com/shiftnrg/shift/tree/testnet" target="_blank">blockchain integration</a>.</p><h2>Conclusion</h2><p>We would like to thank you all for your participation and attention during this time. As we strive to resolve this major development milestone, all of your help and support is greatly appreciated. The move from the devnet to the testnet is a major step in the decentralization process, and we have already benefited greatly from the contributions made by many participants in the project drawn from all over the world. We hope you will join us as we continue to improve the Phoenix Cluster, and move the Shift Project on to its most exciting stage yet.</p><p>Sincerely,</p><p>The Shift Team</p>'
      },
      {
        id: 1,
        datetime: '2019-04-18',
        day: '18',
        month: 'apr',
        category: 'announcement',
        title: 'Official Press Release',
        intro:
          '<p>Press Release:<br/><br/><a href="/download/Press_Release_Shift_Project_Public_Testnet.pdf" target="_blank" class="btn outline"><span class="fas fa-download"></span> Shift Project Public Testnet</a></p>',
        content:
          '<p>Press Release:<br/><br/><a href="/download/Press_Release_Shift_Project_Public_Testnet.pdf" target="_blank" class="btn outline"><span class="fas fa-download"></span> Shift Project Public Testnet</a></p>'
      }
    ]
  },
  footer: {
    title: 'Newsletter',
    subtitle: 'Stay updated',
    footerItems: [
      {
        title: 'Resources',
        links: [
          {
            text: 'GitHub',
            link: 'https://github.com/shiftnrg'
          },
          {
            text: 'Explorer',
            link: 'https://explorer.shiftnrg.org'
          },
          {
            text: 'Web Wallet',
            link: 'https://wallet.shiftnrg.org'
          }
        ]
      },
      {
        title: 'Downloads',
        links: [
          {
            text: 'Nano Wallet',
            link: 'https://github.com/shiftnrg/shift-nano/releases'
          },
          {
            text: 'Phoenix',
            link: 'https://github.com/shiftnrg/shift-cluster-setup'
          },
          {
            text: 'White Paper',
            link:
              'https://pdfhost.io/v/WUg~hSshl_Shift_NRG_Project_White_Paper.pdf'
          }
        ]
      },
      {
        title: 'Contact',
        links: [
          {
            text: 'E-mail',
            link: 'mailto:connect@shiftnrg.org'
          },
          {
            text: 'Discord',
            link: 'https://discord.gg/vpQY5Eh'
          },
          {
            text: 'Twitter',
            link: 'https://twitter.com/ShiftNrg'
          },
          {
            text: 'Telegram',
            link: 'https://telega.one/ShiftProject'
          },
          {
            text: 'Reddit',
            link: 'https://reddit.com/r/ShiftProject'
          }
        ]
      },
      {
        title: 'Market Listings',
        removed: [
          {
            text: 'Altilly (BTC/ETH/XQR)',
            link: 'https://www.altilly.com/market/SHIFT_BTC'
          },
          {
            text: 'Bittrex (BTC)',
            link: 'https://bittrex.com/Market/Index?MarketName=BTC-SHIFT'
          },
          {
            text: 'Upbit (BTC)',
            link: 'https://upbit.com/exchange?code=CRIX.UPBIT.BTC-SHIFT'
          },
          {
            text: 'Cryptofacil (BTC)',
            link: 'https://cryptofacil.com/trading-view?id=121'
          },
          {
            text: 'IDAX (BTC/ETH)',
            link: 'https://www.idax.pro/#/exchange?pairname=SHIFT_BTC'
          }
        ],
        links: [
          {
            text: 'Bilaxy (USDT)',
            link: 'https://bilaxy.com/trade/SHIFT_USDT'
          }
        ]
      }
    ],
    bottomItems: [
      {
        text: '© Shift 2021 - All Rights Reserved'
      }
    ]
  },
  social: {
    label: 'Join our community',
    links: {
      Discord: 'https://discord.gg/fgzxABX',
      Telegram: 'https://t.me/ShiftProject',
      Twitter: 'https://twitter.com/ShiftNrg',
      Youtube: 'https://www.youtube.com/ShiftProject'
    },
    unused: {
      Facebook: 'https://www.facebook.com/ShiftNrg'
    }
  }
}

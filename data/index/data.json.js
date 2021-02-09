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
        '2021.1.12: ShiftNrg Announces Redenomination of SHIFT to Wrapped Shift (wSHIFT)',
      link: 'https://t.co/FStVz9O5CO?amp=1'
    },
    line1: 'Decentralized',
    line2: 'Cloud-Hosting',
    line3:
      'SHIFT combines the transparency, immutability, and decentralization of blockchain technology with distributed hosting'
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
      // {
      //   link: 'https://demo.shiftproject.com',
      //   target: '_blank',
      //   text: 'Try our demo now'
      // },
      // {
      //   link: 'https://github.com/shiftnrg/shift-cluster-setup',
      //   target: '_blank',
      //   text: 'Set up a storage node'
      // }
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
        percentage: '60',
        title: 'wrapped SHIFT',
        items: [
          { item: 'wSHIFT coded', class: 'checked' },
          { item: 'submitted for audit', class: 'checked' },
          { item: 'audit complete', class: 'checked' },
          { item: 'migration integration' },
          { item: 'increase liquidity' }
        ]
      },
      {
        label: 'February 2021',
        percentage: '33',
        title: 'Substrate testnet',
        items: [
          { item: 'launch', class: 'checked' },
          { item: 'new features' },
          { item: 'parachain launch' }
        ]
      },
      {
        label: 'TBD 2021',
        percentage: '0',
        title: 'Substrate mainnet',
        items: [
          { item: 'launch' },
          { item: 'parachain auction' },
          { item: 'parachain launch' }
        ]
      },
      {
        label: 'TBD 2021',
        percentage: '0',
        title: 'Substrate Migration',
        items: [
          { item: 'Substrate', class: 'checked' },
          { item: 'NPoS', class: 'checked' },
          { item: 'Account migration' },
          { item: 'Bridge wSHIFT' }
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
        id: 3,
        datetime: '2021-01-12',
        day: '12',
        month: 'jan',
        category: 'announcement',
        title: 'Redenomination of SHIFT -> wSHIFT',
        intro:
          'ShiftNrg Announces Redenomination of SHIFT to Wrapped Shift (wSHIFT)',
        content: `
        <p> 
          First off, a big thank you to our development team for their hard work in making this update possible! ShiftNrg is excited for a transformative 2021 and this is only the first of many exciting changes coming to our project. 
        </p>
        <p> Following is a brief synopsis of why, how, and what we are doing... </p>
        Read the entire article <a href="https://medium.com/shiftnrg/shiftnrg-announces-redenomination-of-shift-to-wrapped-shift-wshift-68e2f65ffc1" target="_blank"> here </a>
        `
      },
      {
        id: 2,
        datetime: '2021-01-12',
        day: '01',
        month: 'jan',
        category: 'announcement',
        title: "ShiftNrg's New Medium Publication ",
        intro: 'Shift Community Project launches a Medium Publication',
        content: `
        <p> 
          The Shift Community Project team is hard at work in many areas of the ShiftNrg project. We are working diligently to streamline how we deliver the latest updates to our users & community.
        </p>
        Please follow our new publication and give our articles as many claps as you can! 
        <p> <a href="https://medium.com/shiftnrg" target="_blank"> ShiftNrg's Medium Publication  </a> </p>
        `
      },
      {
        id: 1,
        datetime: '2020-08-24',
        day: '24',
        month: 'aug',
        category: 'announcement',
        title: 'ShiftNrg 2020 Q1 & Q2 Update',
        intro:
          'This newsletter has been long overdue. It’s been since November ’19 since the last official newsletter was released by the previous team. A lot has occurred in the last 6 months. ',
        content: `
        <p> Dear Community, </p> 
        <p>
          This newsletter has been long overdue. It’s been since November ’19 since the last official newsletter was released by the previous team. A lot has occurred in the last 6 months. These events have raised a lot of questions, concerns, and even doubts. Rightfully so. I will do my best to briefly cover the recent events of the last 6 months. Then I will give an overview of the road ahead...
        </p>
        Read the entire article <a href="https://medium.com/shiftnrg/shiftnrg-2020-q1-q2-update-cb9d0151192e" target="_blank"> here </a>
        `
      }
    ]
  },
  footer: {
    title: 'Newsletter',
    subtitle: 'Stay updated',
    footerItems: [
      {
        title: 'In The Press',
        links: [
          /* eslint-disable */
          {  
            text: 'LinkedIn: ShiftNrg Disrupting the Web',
            link: 'https://www.linkedin.com/pulse/blockchain-questions-you-were-too-shy-ask-industries-being-anuj-varma/'
          },
          {
            text: 'Medium: ShiftNrg Unstoppable Content',
            link: 'https://medium.com/swlh/project-shift-unstoppable-content-1f10d0461827'
          },
          {
            text: 'SteemIt: Brief Review of SHIFT',
            link: 'https://steemit.com/cryptocurrency/@techblogger/crypto-report-a-brief-review-of-shift-token'
          },
          {
            text: 'Crypto360: What is SHIFT? Beginner\'s Guide',
            link: 'https://cryptomarket360.com/what-is-shift-shift-a-beginners-guide-in-360-words/'
          },
          {
            text: 'Medium: Shift Reborn: The Vision',
            link: 'https://medium.com/paradigm-fund/shift-the-project-reborn-learn-more-about-shifts-future-vision-and-next-development-phases-49b46182dd93'
          }
        /* eslint-enable */
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
            text: 'ShiftNrg Whitepaper (EN)',
            link: '/downloads/Whitepaper.pdf'
          },
          {
            text: 'ShiftNrg Whitepaper (CN)',
            link: 'downloads/chinese-shift-whitepaper.pdf'
          },
          {
            text: 'ShiftNrg Whitepaper (KR)',
            link: 'downloads/korean-shift-whitepaper.pdf'
          },
          {
            text: 'Bitcoin Whitepaper',
            link: '/downloads/Bitcoin.pdf'
          }
        ]
      },
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
            link: 'https://t.me/shiftnrgnews'
          }
          // {
          //   text: 'Reddit',
          //   link: 'https://reddit.com/r/ShiftProject'
          // }
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
            text: 'Uniswap',
            link: 'https://uniswap.wshift.trade'
          },
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
      Telegram: 'https://t.me/shiftnrgnews',
      Twitter: 'https://twitter.com/ShiftNrg'
    },
    unused: {
      Facebook: 'https://www.facebook.com/ShiftNrg',
      Youtube: 'https://www.youtube.com/ShiftProject'
    }
  }
}

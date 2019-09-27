window.indexData = {
  banner: {
    newsFlash: {
      badge: 'Update',
      description: 'Development Update: Phoenix v0.9.3 by the Shift Team'
    },
    line1: 'Reinvented Decentralized',
    line2: 'Cloud Hosting',
    line3:
      'Shift combines the transparency, immutability and decentralization of blockchain with distributed hosting'
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
        link: 'https://github.com/ShiftProject/shift-cluster-setup',
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
        percentage: '2',
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
        percentage: '1',
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
        percentage: '1',
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
  news: {
    label: 'updates',
    title: 'Latest Updates and News',
    readMore: 'Read more',
    readMoreInsights: 'Read more insights from Shift',
    items: [
      {
        id: 4,
        datetime: '2019-09-26',
        day: '26',
        month: 'sep',
        category: 'announcement',
        title: 'New Shift Project Website - The Project Reborn',
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
          '<h2>- Update: Shift Core v7.0t Is Now Live on Testnet -</h2><br/><p>Dear Community,</p><p>As you may be aware, we are currently carrying out an upgrade of the testnet version of Shift Core in order to allow the activation of functionalities that fully integrates the blockchain with the Phoenix IPFS cluster. We are now at an intermediary stage in this process, with the majority of forging testnet delegates having upgraded their nodes to version 6.9t and the cluster having been joined by peers run on systems owned by a number of members of the community, whose participation we greatly appreciate. This intermediary stage was begun by switching to Shift Core v6.9t from v6.8.4t, a version that was not designed to support a major version upgrade. Following the resolution of this step, we planned to proceed with the activation of the new LOCK and PIN functions on this new cluster, by releasing the major upgrade of Shift Core v7.0t and making it mandatory for forging delegates to be running it by a particular block height. It is necessary, however, to inform you that an issue has emerged in the running of the Phoenix Cluster, that requires a degree of attention and time devoting to it sufficient enough to lead us to conclude that our initial rollout schedule will need to be amended. In order to keep you fully informed of our progress, we would now like to outline the nature of the issue encountered.</p><h2>The Issue</h2><p>The LOCK mechanism used for the claiming of storage capacity within the Shift storage network uses a real time value in order to complete its pricing formula, with the pricing formula providing the system a means of determining the amount of SHIFT tokens required to stake a claim to a given number of bytes on the network at any given time. The process of collecting cluster statistics in order to reach that real time value is conducted in such a way as to ensure decentralization, with all blockchain peers gathering a figure for clusterSize (representing the total amount of disk space being offered by all storage node operators) from a randomly assigned Phoenix peer every 10th block. Once they each have a figure, consensus on the appropriate figure is reached by majority and subsequently written to the chain. As you may be able to imagine, in order to reach an accurate figure and do so consistently, it is necessary that all Phoenix peers are able see (detect) each other and ascertain accurate information on capacity. If this is not the case, the correct running of the pricing formula and the economic system that manages the network is compromised.</p><p>The issue we are currently facing is that large differences in the peer lists held by some Phoenix peers have emerged. At the point of receiving a request for the clusterSize, each Phoenix peer will gather the data from the participants they see in the network, pinging the other Phoenix peers to see both how many are part of the network, and how much disk space each peer is offering: Blockchain peer A pings Phoenix peer C, while at the same time blockchain peer B pings Phoenix peer D. Following this, both Phoenix peers C and D start pinging the Phoenix peers they see and ask each peer on their peer list what diskSize they are offering in order to reach a total figure for clusterSize. Now, ideally, both Phoenix peers C and D should see exactly same peers in the network. If not, they could potentially communicate very different values for the clusterSize to their relevant blockchain peer. Technically this is not always a problem, as some tolerance for minor differences is permitted. However, it becomes a big problem when the differences occur too often and at too great a scale. Unfortunately, that is what is currently happening.</p><p>As some of you may have already noticed from discussions taking place in our project’s Discord channels, different Phoenix peers are seeing different numbers of peers online in the network. The end result of this, is that were we to move forward with the upgrade to v7.0t or continue in the current version, as soon as the blockchain peers began receiving the differing values for the total clusterSize forks would result due to the clusterSize values now being included in the data written to blocks. Therefore, if on Thursday, April 25th, we preceded with the activation scheduled for block 2,725,930 and commenced with writing this new and impermissibly inconsistent data, the chain would soon start forking and eventually stop. That is something we very much want to avoid.</p><p>In light of the current situation and due to the small time frame we presently have in which to resolve the issue, we have decided it is in the best interests of the integrity of the chain to postpone the activation of Shift Core v7.0t until we are comfortable an eventuality such as that outlined above should not occur. As all peers detecting each other and correctly communicating is fundamental to the health of a peer-to-peer network that, resolving this issue definitively has now become our top priority.</p><h2>What’s next?</h2><p>We will postpone the activation of Shift Core v7.0t by releasing v6.9.1t. This version, like the current v6.9.0t, runs the exact same source code as Shift Core v7.0t. Unlike these others, however, it will not include a set activation by block height. Once this is done, we will then proceed with diagnosing the issue and, when a solution is found, patch Phoenix. Following this, as soon as it is established that the majority of the Phoenix Cluster peers are running the new version, we will be able to proceed with the release of Shift Core v7.0t, which will include new code for triggering the activation according to a newly established block height.</p><h2>When?</h2><p>We already have several theories that could explain what is causing the online/offline peers issue, and we as a team are doing all that is necessary to test these theories for the purpose of getting to its root. As we are dealing with an unanticipated eventuality (as is often the case when deploying new technology still in testing), it is conceivable that the issue could be resolved relatively quickly. However, it is necessary for us to be frank in saying that estimating a time frame without knowing the precise origin is inherently difficult. It is thus not out of the realm of possibility that creating a patch that fixes the issue could take several weeks. What we would like to do is ask that everyone currently running a Phoenix node remain on standby and be prepared for us to issue diagnostic patches during the troubleshooting process. Updating quickly when one of these patches is ready could help us find the root of the issue more quickly and restart the transition to Shift Core v7.0t. In addition, since the source code of Shift Core v7.0t has now been made public, we do also want to encourage any willing and able members of our community to help us reviewing the code of the <a href="https://github.com/shiftproject/shift/tree/testnet" target="_blank">blockchain integration</a>.</p><h2>Conclusion</h2><p>We would like to thank you all for your participation and attention during this time. As we strive to resolve this major development milestone, all of your help and support is greatly appreciated. The move from the devnet to the testnet is a major step in the decentralization process, and we have already benefited greatly from the contributions made by many participants in the project drawn from all over the world. We hope you will join us as we continue to improve the Phoenix Cluster, and move the Shift Project on to its most exciting stage yet.</p><p>Sincerely,</p><p>The Shift Team</p>'
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
            link: 'https://github.com/ShiftProject'
          },
          {
            text: 'Explorer',
            link: 'https://explorer.shiftnrg.org'
          },
          {
            text: 'Web Wallet',
            link: 'https://wallet.shiftnrg.org'
          },
          {
            text: 'Interactive Demo',
            link: 'https://demo.shiftproject.com'
          },
          {
            text: 'Testnet Faucet',
            link: 'https://faucet.testnet.shiftproject.com'
          }
        ]
      },
      {
        title: 'Downloads',
        links: [
          {
            text: 'Nano Wallet',
            link: 'https://github.com/ShiftProject/shift-nano/releases'
          },
          {
            text: 'Phoenix',
            link: 'https://github.com/ShiftProject/shift-cluster-setup'
          },
          {
            text: 'White Paper',
            link:
              'https://www.shiftproject.com/download/shift-introductory-paper.pdf'
          },
          {
            text: 'Chinese Paper',
            link:
              'https://www.shiftproject.com/download/shift-%E5%85%A5%E9%97%A8%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf'
          },
          {
            text: 'Korean Paper',
            link:
              'https://www.shiftproject.com/download/shift-%EC%86%8C%EA%B0%9C%20%EB%B0%B1%EC%84%9C.pdf'
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
            link: 'https://www.shiftproject.com/discord'
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
            link: 'https://old.reddit.com/r/ShiftProject'
          }
        ]
      },
      {
        title: 'Market Listings',
        links: [
          {
            text: 'Bittrex (BTC)',
            link: 'https://bittrex.com/Market/Index?MarketName=BTC-SHIFT'
          },
          {
            text: 'Livecoin (BTC/ETH/USD)',
            link: 'https://www.livecoin.net/en/trading/SHIFT_BTC'
          },
          {
            text: 'Upbit (BTC)',
            link: 'https://upbit.com/exchange?code=CRIX.UPBIT.BTC-SHIFT'
          },
          {
            text: 'IDAX (BTC/ETH)',
            link: 'https://www.idax.pro/#/exchange?pairname=SHIFT_BTC'
          },
          {
            text: 'Cryptofacil (BTC)',
            link: 'https://cryptofacil.com/trading-view?id=121'
          }
        ]
      }
    ],
    bottomItems: [
      {
        text: '© Shift 2019 - All rights reserved'
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

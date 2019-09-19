<template>
  <div id="scene" class="scene">
    <div ref="banner" class="banner">
      <div class="newsflash">
        <div class="label">Update</div>
        <div class="title">
          Development Update: Phoenix v0.9 by Shift Team
        </div>
      </div>
      <div class="slogan">
        <div ref="line1" class="line1">
          <span class="spacer"></span>
          <span
            v-for="(word, key) in getWords('Reinvented Decentralized')"
            :key="'line1-' + key"
            class="word"
          >
            <span
              v-for="(char, charKey) in word"
              :key="'line1-' + key + '-' + charKey"
              class="letter"
            >
              {{ char }}
            </span>
            <span v-if="checkIfLastWord('Reinvented Decentralized', key)">
              &nbsp;
            </span>
          </span>
        </div>
        <div ref="line2" class="line2">
          <span class="spacer"></span>
          <span
            v-for="(word, key) in 'Cloud Hosting'.split(' ')"
            :key="'line2-' + key"
            class="word"
          >
            <span
              v-for="(char, charKey) in word"
              :key="'line2-' + key + '-' + charKey"
              class="letter"
            >
              {{ char }}
            </span>
            <span v-if="checkIfLastWord('Cloud Hosting', key)">&nbsp;</span>
          </span>
        </div>
        <div class="line3">
          <!--Shift reinvents decentralized cloud hosting with<br/>Lock n’ Load™ technology//-->
          Shift combines the transparency, immutability and decentralization of
          blockchain with the distributed hosting of the InterPlanetary File
          System
        </div>
      </div>
      <div class="image">
        <img src="~/assets/images/banner/1.png" alt="" />
      </div>
      <div class="socials">
        <span class="label">Join our community</span>
        <span class="seperator">-</span>
        <a href="#1">Discord</a>
        <a href="#2">Facebook</a>
        <a href="#3">Twitter</a>
      </div>

      <button class="scrollto2" @click="scrollTop">
        <span class="icon">
          <svg-icon name="arrow" height="36" width="36" />
        </span>
      </button>
    </div>
    <div ref="mainContainer" class="maincontainer">
      <section ref="locknload" class="locknload">
        <div class="inner">
          <h1>
            Shift reinvents decentralized cloud hosting with
            <span>Lock n’ Load™</span> technology
          </h1>
          <div class="Intro">
            <p>Store your files by following these simple steps.</p>
          </div>
          <ol class="steps" :class="activeLockNLoad ? 'inactive' : ''">
            <li>
              <article>
                <span class="icon">
                  <img
                    src="~/assets/images/locknload/locknload--lock.svg"
                    height="120"
                    width="120"
                  />
                </span>
                <h3>Lock</h3>
                <div class="Text">
                  <p>
                    Start by locking some SHIFT to receive storage space
                  </p>
                </div>
                <span class="next">
                  <svg-icon name="step" height="42" width="42"></svg-icon>
                </span>
              </article>
            </li>
            <li>
              <article>
                <span class="icon">
                  <img
                    width="120"
                    height="120"
                    src="~/assets/images/locknload/locknload--upload.svg"
                  />
                </span>
                <h3>Upload</h3>
                <div class="Text">
                  <p>Next, select a file to upload</p>
                </div>
                <span class="next">
                  <svg-icon name="step" width="42" height="42"></svg-icon>
                </span>
              </article>
            </li>
            <li>
              <article>
                <span class="icon">
                  <img
                    width="120"
                    height="120"
                    src="~/assets/images/locknload/locknload--pin.svg"
                  />
                </span>
                <h3>Pin</h3>
                <div class="Text">
                  <p>
                    Now, record the hash of your file permanently on the
                    blockchain
                  </p>
                </div>
                <span class="next">
                  <svg-icon name="step" width="42" height="42"></svg-icon>
                </span>
              </article>
            </li>
            <li>
              <article>
                <span class="icon">
                  <img
                    width="120"
                    height="120"
                    src="~/assets/images/locknload/locknload--load.svg"
                  />
                </span>
                <h3>Load</h3>
                <div class="Text">
                  <p>Lift off! Open your file using our gateway</p>
                </div>
                <span class="next">
                  <svg-icon name="step" width="42" height="42"></svg-icon>
                </span>
              </article>
            </li>
          </ol>
          <ol class="steps reversed">
            <li>
              <article>
                <span class="icon">
                  <img
                    width="120"
                    height="120"
                    src="~/assets/images/locknload/locknload--unpin.svg"
                  />
                </span>
                <h3>Unpin</h3>
                <div class="Text">
                  <p>
                    Select the hash of a file you no longer wish to have saved
                  </p>
                </div>
                <span class="next">
                  <svg-icon name="step" width="42" height="42"></svg-icon>
                </span>
              </article>
            </li>
            <li>
              <article>
                <span class="icon">
                  <img
                    width="120"
                    height="120"
                    src="~/assets/images/locknload/locknload--unlock.svg"
                  />
                </span>
                <h3>Unlock</h3>
                <div class="Text">
                  <p>Finished hosting your files? Then unlock your SHIFT</p>
                </div>
                <span class="next">
                  <svg-icon name="step" width="42" height="42"></svg-icon>
                </span>
              </article>
            </li>
          </ol>
          <div class="Intro">
            <p>
              ...and when you’re done, retrieve your tokens by reversing these
              steps.
              <button
                type="button"
                class="more-inline"
                @click="activeLockNLoad = !activeLockNLoad"
              >
                Reverse the steps
              </button>
            </p>
          </div>
          <nav>
            <a href="https://demo.shiftproject.com" target="_blank" class="more"
              >Try our demo now</a
            >
            <a
              href="https://github.com/ShiftProject/shift-cluster-setup"
              target="_blank"
              class="more"
              >Set up a storage node</a
            >
          </nav>
        </div>
      </section>
      <section ref="issues" class="issues right">
        <div class="inner">
          <h4>The foundation of a new token utility</h4>
          <h3>Simply A Better Service Model</h3>
          <div class="Intro">
            <p>
              Shift solves today and tomorrow’s hardest blockchain-based cloud
              hosting problems.
            </p>
          </div>
          <ul class="block-grid up4">
            <li>
              <article>
                <div class="issue">
                  <h3>Usability</h3>
                  <span class="icon">
                    <svg-icon
                      name="issues/issues--p2p"
                      width="60"
                      height="60"
                    ></svg-icon>
                  </span>
                  <div class="Content">
                    <p>
                      <i class="fas fa-times"></i> Decentralized storage
                      marketplaces using smart contracts are complex and
                      difficult to understand for both developers and end users.
                    </p>
                  </div>
                </div>
                <div class="answer">
                  <h3><strong>Token locking</strong> fixes this.</h3>
                  <div class="Content">
                    <p>
                      <i class="fas fa-check"></i> Token locking is a simple and
                      reversible transaction type that incorporates a fully
                      automated pricing mechanism for storage that is efficient,
                      fair and verifiable.
                    </p>
                  </div>
                </div>
              </article>
            </li>
            <li>
              <article>
                <div class="issue">
                  <h3>Stability</h3>
                  <span class="icon">
                    <svg-icon
                      name="issues/issues--stability"
                      width="60"
                      height="60"
                    ></svg-icon>
                  </span>
                  <div class="Content">
                    <p>
                      <i class="fas fa-times"></i> IPFS is a groundbreaking
                      distributed file system. However, it does not offer an
                      easy or reliable way to allocate and replicate the pinning
                      of data to multiple nodes across a cluster of IPFS
                      daemons.
                    </p>
                  </div>
                </div>
                <div class="answer">
                  <h3><strong>Phoenix</strong> fixes this.</h3>
                  <div class="Content">
                    <p>
                      <i class="fas fa-check"></i> Phoenix is a simple pinning
                      interface to bridge IPFS and the Shift blockchain.
                    </p>
                  </div>
                </div>
              </article>
            </li>
            <li>
              <article>
                <div class="issue">
                  <div class="corner-ribbon top-right purple">
                    Upcoming
                  </div>
                  <h3>Operability</h3>
                  <span class="icon">
                    <svg-icon
                      name="issues/issues--operability"
                      width="60"
                      height="60"
                    ></svg-icon>
                  </span>
                  <div class="Content">
                    <p>
                      <i class="fas fa-times"></i> Most decentralized cloud
                      hosting platforms do not support the same tools and
                      languages developers know and love.
                    </p>
                  </div>
                </div>
                <div class="answer">
                  <h3><strong>Phoenix SDK</strong> fixes this.</h3>
                  <div class="Content">
                    <p>
                      <i class="fas fa-check"></i> The Phoenix SDK will support
                      lambda functions that allow the user to effortlessly write
                      and execute their custom code at a global scale through
                      Trusted Delegation.
                    </p>
                  </div>
                </div>
              </article>
            </li>
            <li>
              <article>
                <div class="issue">
                  <div class="corner-ribbon top-right purple">
                    Upcoming
                  </div>
                  <h3>Scalability</h3>
                  <span class="icon">
                    <svg-icon
                      name="issues/issues--scalability"
                      width="60"
                      height="60"
                    ></svg-icon>
                  </span>
                  <div class="Content">
                    <p>
                      <i class="fas fa-times"></i> Decentralized cloud hosting
                      platforms using Proof-of-Work protocols are slow and
                      unscalable.
                    </p>
                  </div>
                </div>
                <div class="answer">
                  <h3>
                    <strong>Transactional lattice (DAG)</strong> and
                    <strong>sharding</strong> fix this.
                  </h3>
                  <div class="Content">
                    <p>
                      <i class="fas fa-check"></i> Shift accounts will each have
                      their own blockchain, which removes the need for
                      transactions to be bundled into blocks. The lattice
                      therefore allows unbounded (unlimited) transaction growth.
                    </p>
                  </div>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </section>
      <section ref="cases" class="cases">
        <div class="inner">
          <h4>Traditional web development</h4>
          <h3>Simply Better Use Cases</h3>
          <div class="Intro">
            <p>
              Shift enables traditional web development in a decentralized
              world.
            </p>
          </div>
          <ul class="block-grid up3">
            <li>
              <article>
                <figure>
                  <img src="~/assets/images/cases/static-hosting.png" alt="" />
                </figure>
                <h3>Static hosting</h3>
                <div class="Content">
                  <p>
                    Host your website or application-specific assets in under 60
                    seconds at incredibly cheap rates. Test your changes for
                    free on our Testnet before pushing them live on the Mainnet.
                    Your content will be replicated across the globe for super
                    fast and reliable access.
                  </p>
                </div>
              </article>
            </li>
            <li>
              <article>
                <figure>
                  <img src="~/assets/images/cases/dynamic-hosting.png" alt="" />
                </figure>
                <h3>Dynamic hosting</h3>
                <div class="Content">
                  <p>
                    Bring your website or API to life by running custom code
                    (Java, C#, Go, JavaScript, Scala and Python are all
                    supported). Test your custom code locally using the Phoenix
                    SDK. Use lambda functions to render content, process
                    requests, output results, manage data and much, much more!
                  </p>
                </div>
              </article>
            </li>
            <li>
              <article>
                <figure>
                  <img
                    src="~/assets/images/cases/encrypted-hosting.png"
                    alt=""
                  />
                </figure>
                <h3>Encrypted hosting</h3>
                <div class="Content">
                  <p>
                    Choose to use strong client-side encryption for secure
                    storage of your personal files. After encryption, your files
                    are split into pieces before then being distributed across
                    the global network of storage nodes. You own your private
                    keys and you are in control of your data. Optionally, add
                    the public key of others to safely share your files.
                  </p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </section>
      <section ref="usps" class="usps">
        <div class="inner">
          <h4>Decentralized hosting</h4>
          <h3>Simply A Better Cloud</h3>
          <div class="Intro">
            <p>Shift brings decentralized cloud hosting to the masses.</p>
          </div>
          <ul :class="['block-grid', 'up4', hasActiveUsps]">
            <li
              :class="['hasExcerpt', getActiveUspsClass(1)]"
              @click.stop.prevent="toggleActiveUsps(1)"
            >
              <article>
                <span class="icon">
                  <svg-icon
                    name="usps/usps--usage"
                    width="60"
                    height="60"
                  ></svg-icon>
                </span>
                <h5>Peer-to-peer</h5>
                <div class="Text">
                  <p>
                    Rent out the unused storage on your hard drive or lend the
                    storage space of others.
                  </p>
                </div>
                <div class="Excerpt" @click.stop.prevent="">
                  <i class="fas fa-close" @click="closeActiveUsps()"></i>
                  <div class="inner">
                    <p>
                      Shift is a decentralized cloud hosting platform. No
                      trusted third party is involved, it is fully p2p: anyone
                      can rent out the unused storage on their hard drive or use
                      the storage space of others. The renting and lending of
                      storage occurs directly through the network and is
                      recorded within the Shift blockchain, a public and digital
                      ledger. Participation only requires registering an
                      anonymous wallet and possession of the SHIFT token.
                    </p>
                  </div>
                </div>
              </article>
            </li>
            <li
              :class="['hasExcerpt', getActiveUspsClass(2)]"
              @click="toggleActiveUsps(2)"
            >
              <article>
                <span class="icon">
                  <svg-icon
                    name="usps/usps--tokenized"
                    width="60"
                    height="60"
                  ></svg-icon>
                </span>
                <h5>Tokenized</h5>
                <div class="Text">
                  <p>
                    Swap your tokens for distributed storage with a single,
                    simple transaction.
                  </p>
                </div>
                <div class="Excerpt" @click.stop.prevent="">
                  <i class="fas fa-close" @click="closeActiveUsps()"></i>
                  <div class="inner">
                    <p>
                      The SHIFT token is intrinsically valued because it
                      represents distributed storage that can easily be acquired
                      with a single transaction. No need to construct a smart
                      contract, no need to bid in a marketplace. Simply enter
                      the amount of storage you want: the required equivalent of
                      tokens you need to lock is shown based on real-time data
                      of the platform’s supply and demand. Confirm the
                      transaction and your tokens are swapped for bytes. The
                      claimed storage is now available for your permanent use.
                    </p>
                  </div>
                </div>
              </article>
            </li>
            <li
              :class="['hasExcerpt', getActiveUspsClass(3)]"
              @click="toggleActiveUsps(3)"
            >
              <article>
                <span class="icon">
                  <svg-icon
                    name="usps/usps--retrievable"
                    width="60"
                    height="60"
                  ></svg-icon>
                </span>
                <h5>Retrievable</h5>
                <div class="Text">
                  <p>
                    Retrieve your tokens with a reversed swap once you no longer
                    need your storage.
                  </p>
                </div>
                <div class="Excerpt" @click.stop.prevent="">
                  <i class="fas fa-close" @click="closeActiveUsps()"></i>
                  <div class="inner">
                    <p>
                      Simply enter the amount of storage you want to return to
                      the network and get the corresponding amount of your
                      tokens unlocked. Now you can do as you wish with your
                      tokens, such as selling them back on the market. After
                      using the platform’s hosting service, you will only have
                      paid minor transaction fees: once for locking your tokens,
                      once for unlocking, and the times you pinned your files
                      hashes. You know exactly what you are paying, up front.
                    </p>
                  </div>
                </div>
              </article>
            </li>
            <li
              :class="['hasExcerpt', getActiveUspsClass(4)]"
              @click="toggleActiveUsps(4)"
            >
              <article>
                <span class="icon">
                  <svg-icon
                    name="usps/usps--profitable"
                    width="60"
                    height="60"
                  ></svg-icon>
                </span>
                <h5>Profitable</h5>
                <div class="Text">
                  <p>
                    Earn revenue as a storage node operator by providing storage
                    to the platform.
                  </p>
                </div>
                <div class="Excerpt" @click.stop.prevent="">
                  <i class="fas fa-close" @click="closeActiveUsps()"></i>
                  <div class="inner">
                    <p>
                      The platform rewards storage providers that successfully
                      pass a proof-of-storage validation and punishes those that
                      fail. The reward-based economic model thrives on the
                      transaction fees that are collected and then divided
                      between reliable storage node operators. Additionally,
                      they are also rewarded by an inflationary component that
                      is sustainably calibrated to the network’s growth and the
                      demand for its services.
                    </p>
                  </div>
                </div>
              </article>
            </li>
            <li
              :class="['hasExcerpt', getActiveUspsClass(5)]"
              @click="toggleActiveUsps(5)"
            >
              <article>
                <span class="icon">
                  <svg-icon
                    name="usps/usps--secure"
                    width="60"
                    height="60"
                  ></svg-icon>
                </span>
                <h5>Redundant</h5>
                <div class="Text">
                  <p>
                    Pin your files to have them replicated across the network
                    for guaranteed triple redundancy.
                  </p>
                </div>
                <div class="Excerpt" @click.stop.prevent="">
                  <i class="fas fa-close" @click="closeActiveUsps()"></i>
                  <div class="inner">
                    <p>
                      Upload and pin your files. They will automatically be
                      allocated and replicated across the network. Your files
                      are stored on 3 different storage nodes in the network,
                      permanently. In the future, if one of those 3 initial
                      hosting nodes goes down, the content is replicated to
                      another, thereby restoring the replication factor to 3.
                    </p>
                  </div>
                </div>
              </article>
            </li>
            <li
              :class="['hasExcerpt', getActiveUspsClass(6)]"
              @click="toggleActiveUsps(6)"
            >
              <article>
                <span class="icon">
                  <svg-icon
                    name="usps/usps--sovereign"
                    width="60"
                    height="60"
                  ></svg-icon>
                </span>
                <h5>Sovereign</h5>
                <div class="Text">
                  <p>
                    Monitor for flagged content and decide as a node operator if
                    you wish to remove it.
                  </p>
                </div>
                <div class="Excerpt" @click.stop.prevent="">
                  <i class="fas fa-close" @click="closeActiveUsps()"></i>
                  <div class="inner">
                    <p>
                      With no central authority involved in the platform’s
                      regulation, there is no single point of control capable of
                      censoring content. While some people may try to abuse the
                      platform by hosting inappropriate content or services,
                      content can be flagged. Gateway and storage node operators
                      are sovereign and may decide if they want to remove it.
                      Rules can be quickly setup allowing individual nodes to
                      decide how to handle flags and prevent abuse of the
                      flagging mechanism.
                    </p>
                  </div>
                </div>
              </article>
            </li>
            <li
              :class="['hasExcerpt', getActiveUspsClass(7)]"
              @click="toggleActiveUsps(7)"
            >
              <article>
                <span class="icon">
                  <svg-icon
                    name="usps/usps--bridgeable"
                    width="60"
                    height="60"
                  ></svg-icon>
                </span>
                <h5>Bridgeable</h5>
                <div class="Text">
                  <p>
                    Bridge the old web to the new by making your website
                    accessible through standard web browsers.
                  </p>
                </div>
                <div class="Excerpt" @click.stop.prevent="">
                  <i class="fas fa-close" @click="closeActiveUsps()"></i>
                  <div class="inner">
                    <p>
                      The process simply involves assigning a parent ID to your
                      website’s hash and pointing your DNS TXT record to that
                      parent ID. There is no need to re-publish your website
                      every time changes are made, and it can still be served
                      from any peer on the network. The Shift platform has a
                      custom-built DNS monitor in place that allows only healthy
                      nodes to be in DNS.
                    </p>
                  </div>
                </div>
              </article>
            </li>
            <li
              :class="['hasExcerpt', getActiveUspsClass(8)]"
              @click="toggleActiveUsps(8)"
            >
              <article>
                <span class="icon">
                  <svg-icon
                    name="usps/usps--lock"
                    width="60"
                    height="60"
                  ></svg-icon>
                </span>
                <h5>Private</h5>
                <div class="Text">
                  <p>
                    Run a Trusted Delegation client to enable untrusted nodes to
                    process your private data in a secure fashion.
                  </p>
                </div>
                <div class="Excerpt" @click.stop.prevent="">
                  <i class="fas fa-close" @click="closeActiveUsps()"></i>
                  <div class="inner">
                    <p>
                      The trouble with decentralized hosting of private data is
                      that it is an inherently untrusted environment. Shift gets
                      around this by offering users the option to specify
                      Trusted Delegation. This is a lightweight service which is
                      operated by a third party you trust. You appoint a node to
                      hold and process your private data, relying on that
                      trusted delegate to do so without accessing it.
                    </p>
                  </div>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </section>
      <article ref="overview" class="overview">
        <div class="inner Intro">
          <div class="aside">
            <h4>Software applications that communicate</h4>
            <h3>Platform Overview</h3>
            <div class="Introtext">
              <p>
                The current Shift platform incorporates two software
                applications that communicate with each other. There is Phoenix
                and the Shift blockchain.
              </p>
            </div>
          </div>
        </div>
        <div class="inner">
          <figure>
            <img src="~/assets/images/overview/phoenix.png" alt="" />
          </figure>
          <div class="aside">
            <h4>Stand-alone application</h4>
            <h3>Phoenix</h3>
            <div class="Text">
              <p>
                Phoenix is a stand-alone application facilitating the allocation
                and conservation through replication of data across a cluster of
                storage nodes, called the Phoenix Cluster. Phoenix consists of
                three components: Phoenix-core, Phoenix-cluster and a customized
                IPFS daemon.
              </p>
              <ul>
                <li>
                  <strong>Phoenix-core</strong> is a p2p library and responsible
                  for networking and message relaying between peers
                </li>
                <li>
                  <strong>Phoenix-cluster</strong> is a pinset orchestration
                  layer for IPFS and responsible for the allocation and
                  replication of data (pin
                </li>
                <li>
                  <strong>IPFS (InterPlanetary File System)</strong> is a p2p
                  distributed file system and responsible for storing and
                  accessing
                </li>
              </ul>
            </div>
            <nav>
              <a href="#" class="more-inline">Join our growing community </a>
            </nav>
          </div>
        </div>
        <div class="inner">
          <figure>
            <img src="~/assets/images/overview/blockchain.png" alt="" />
          </figure>
          <div class="aside">
            <h4>Delegated Proof-of-Stake (DPoS)</h4>
            <h3>Blockchain</h3>
            <div class="Text">
              <p>
                The Shift blockchain facilitates a decentralized and immutable
                means of governance that is consulted by the Phoenix Cluster.
              </p>
              <p>
                The Shift blockchain runs using a Lisk-based DPoS consensus
                engine, where 101 delegated nodes oversee the sequential forging
                of blocks. The selection process involves token holders
                selecting appropriate delegates. Each user account can vote for
                101 delegates, a vote representing their ongoing account
                balance. This balance or ‘vote weight’ is used to rank and
                select the 101 forging delegates every 101 assigned blocks.
              </p>
              <p>
                Shift has modified the historic Lisk Core in two primary ways.
              </p>
              <ul>
                <li>
                  In addition to the standard Lisk transaction types, Shift has
                  created four unique transaction modules that are fully
                  storage-related: <strong>LOCK</strong>,
                  <strong>UNLOCK</strong>, <strong>PIN</strong> and
                  <strong>UNPIN</strong>.
                </li>
                <li>
                  Likewise, Shift has extended the standard block format to
                  include cluster statistics obtained via a Phoenix-cluster API.
                  The <strong>cluster size</strong>, which is the total amount
                  of storage that is being offered to the platform, goes into
                  every block. The value from matured blocks is then used by the
                  pricing mechanism that is incorporated within the LOCK
                  transaction.
                </li>
              </ul>
            </div>
            <nav>
              <a href="#" class="more-inline">Join our growing community </a>
            </nav>
          </div>
        </div>
      </article>
      <section ref="vision" class="vision right">
        <div class="inner">
          <h4>Vision</h4>
          <h3>A New Blockchain Core</h3>
          <div class="Intro">
            <p>
              Shift envisions a core that securely scales to meet the needs of a
              popular, global cloud hosting platform no other blockchain project
              can match.
            </p>
          </div>
          <ul :class="['block-grid', 'up3', hasActiveVision]">
            <li
              :class="['hasExcerpt', getActiveVisionClass(1)]"
              @click="toggleActiveVision(1)"
            >
              <article>
                <h3>Chain of Command</h3>
                <div class="Text">
                  <p>
                    The Chain of Command (CoC) blockchain provides the heartbeat
                    of the platform and ultimate governance.
                  </p>
                </div>
                <div class="Excerpt" @click.stop.prevent="">
                  <i class="fas fa-close" @click="closeActiveVision"></i>
                  <div class="inner">
                    <p>
                      The CoC will be a central blockchain running through Shift
                      that regulates Account and Pool management, along with
                      providing a constant timeline. The CoC is an inflationary
                      system where each newly forged block will reward the node
                      that forged it. Who forges the next block is decided by
                      Verifiable Random Functions (VRF) Lottery. Nodes can
                      increase their chances of winning the lottery by
                      increasing their stake or receiving delegated token
                      weight.
                    </p>
                  </div>
                </div>
              </article>
            </li>
            <li
              :class="['hasExcerpt', getActiveVisionClass(2)]"
              @click="toggleActiveVision(2)"
            >
              <article>
                <h3>Block Lattice</h3>
                <div class="Text">
                  <p>
                    Shift accounts each have their own blockchain, which removes
                    the need for transactions to be bundled into blocks.
                  </p>
                </div>
                <div class="Excerpt" @click.stop.prevent="">
                  <i class="fas fa-close" @click="closeActiveVision"></i>
                  <div class="inner">
                    <p>
                      Transactions are made between Accounts by placing a SEND
                      transaction on one blockchain and placing a RECEIVE
                      transaction on the other. This creates a lattice of
                      transactions between all the accounts. Transactions do not
                      need to be ordered because they can only flow in a single
                      direction – one account to another. Transactions are
                      tagged with the most recent CoC block ID to synchronous
                      them.
                    </p>
                  </div>
                </div>
              </article>
            </li>
            <li>
              <article>
                <h3>VRF Lottery</h3>
                <div class="Text">
                  <p>
                    The account that generates the next block of the CoC is
                    determined using Verifiable Random Functions (VRF).
                  </p>
                </div>
              </article>
            </li>
            <li
              :class="['hasExcerpt', getActiveVisionClass(3)]"
              @click="toggleActiveVision(3)"
            >
              <article>
                <h3>Byzantine Fault Detection</h3>
                <div class="Text">
                  <p>
                    Byzantine Fault Detection (BFD) is used to prevent double
                    spends and network attacks.
                  </p>
                </div>
                <div class="Excerpt" @click.stop.prevent="">
                  <i class="fas fa-close" @click="closeActiveVision"></i>
                  <div class="inner">
                    <p>
                      Shift will operate using Byzantine Fault Detection, which
                      means that the network only has to detect a fault, not
                      prevent it. Should a fault be detected, the upstream
                      transaction chain for the transaction will be invalidated.
                      In order to protect receiving nodes from this, senders can
                      establish Pool Guarantors which will vouch for the sender.
                      Receivers can also whitelist or blacklist Pools, avoiding
                      potential bad senders.
                    </p>
                  </div>
                </div>
              </article>
            </li>
            <li
              :class="['hasExcerpt', getActiveVisionClass(4)]"
              @click="toggleActiveVision(4)"
            >
              <article>
                <h3>Sharding</h3>
                <div class="Text">
                  <p>
                    With trillions of potential shards, nodes can decide how
                    much of the network they want to service.
                  </p>
                </div>
                <div class="Excerpt" @click.stop.prevent="">
                  <i class="fas fa-close" @click="closeActiveVision"></i>
                  <div class="inner">
                    <p>
                      Because the Shift network can grow to vast proportions, it
                      is unfair to expect all nodes to process all requests for
                      the entire network. As such, the network may be split into
                      trillions of shards. Nodes can then specify which shards
                      they are willing to service, reducing or increasing their
                      shard space depending on how much their servers can
                      handle. A greater shard space will increase the potential
                      earnings received.
                    </p>
                  </div>
                </div>
              </article>
            </li>
            <li>
              <article>
                <h3>Pools</h3>
                <div class="Text">
                  <p>
                    Token weight can be assigned to pools which increases their
                    earning power.
                  </p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </section>
      <section ref="roadmap" class="roadmap">
        <div class="inner">
          <h4>Milestones to production</h4>
          <h3>Roadmap</h3>
          <div class="Intro">
            <p>
              Shift has entered a new development phase that focuses on the
              storage validation protocols that form the foundation of the
              compensation system that will reward node operators.
            </p>
          </div>

          <div class="roadmapCarousel">
            <button
              type="button"
              class="prevoverlay"
              @click="slider.go('<')"
            ></button>
            <button
              type="button"
              class="nextoverlay"
              @click="slider.go('>')"
            ></button>
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
                <li class="glide__slide">
                  <article>
                    <div class="state">
                      <div class="label">TBD</div>
                      <div class="c100 p33">
                        <span>33%</span>
                        <div class="slice">
                          <div class="bar"></div>
                          <div class="fill"></div>
                        </div>
                      </div>
                    </div>
                    <h3>Proof-of-Capacity</h3>
                    <div class="Content">
                      <ul>
                        <li>Storage provider registration</li>
                        <li>Storage deposits/withdrawals</li>
                        <li>Generation of plot files</li>
                        <li>Zero Knowledge Proofs (zkrp)</li>
                      </ul>
                    </div>
                  </article>
                </li>
                <li class="glide__slide">
                  <article>
                    <div class="state">
                      <div class="label">TBD</div>
                      <div class="c100 p37">
                        <span>37%</span>
                        <div class="slice">
                          <div class="bar"></div>
                          <div class="fill"></div>
                        </div>
                      </div>
                    </div>
                    <h3>Proof-of-Storage</h3>
                    <div class="Content">
                      <ul>
                        <li>Distributed Hash Table (DHT)</li>
                        <li>Re-pin functionality</li>
                        <li>Zero Knowledge Proofs (zkrp)</li>
                        <li>Peer entanglement challenges</li>
                      </ul>
                    </div>
                  </article>
                </li>
                <li class="glide__slide">
                  <article>
                    <div class="state">
                      <div class="label">TBD</div>
                      <div class="c100 p5">
                        <span>5%</span>
                        <div class="slice">
                          <div class="bar"></div>
                          <div class="fill"></div>
                        </div>
                      </div>
                    </div>
                    <h3>Incentive Model</h3>
                    <div class="Content">
                      <ul>
                        <li>Dynamic transaction fees</li>
                        <li>Dynamic block rewards</li>
                        <li>Token burning/redistribution</li>
                        <li>Run experimental (artificial) data</li>
                      </ul>
                    </div>
                  </article>
                </li>
                <li class="glide__slide">
                  <article>
                    <div class="state">
                      <div class="label">TBD</div>
                      <div class="c100 p0">
                        <span>0%</span>
                        <div class="slice">
                          <div class="bar"></div>
                          <div class="fill"></div>
                        </div>
                      </div>
                    </div>
                    <h3>Phoenix v1.0.0</h3>
                    <div class="Content">
                      <ul>
                        <li>Pin queueing</li>
                        <li>IPNS resolution at blockchain (IPFS)</li>
                        <li>Blacklisting functionality for hashes</li>
                      </ul>
                    </div>
                  </article>
                </li>
                <li class="glide__slide">
                  <article>
                    <div class="state">
                      <div class="label">TBD</div>
                      <div class="c100 p0">
                        <span>0%</span>
                        <div class="slice">
                          <div class="bar"></div>
                          <div class="fill"></div>
                        </div>
                      </div>
                    </div>
                    <h3>Content Encryption</h3>
                    <div class="Content">
                      <ul>
                        <li>Encrypt before upload</li>
                        <li>Decrypt on load</li>
                        <li>Content sharing (asymetric keys)</li>
                        <li>Recursive encryption</li>
                      </ul>
                    </div>
                  </article>
                </li>
              </ul>
            </div>

            <div class="glide__arrows" data-glide-el="controls">
              <button
                class="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                <span class="icon">
                  <svg-icon name="arrow" width="20" height="20"></svg-icon>
                </span>
              </button>
              <button
                class="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                <span class="icon">
                  <svg-icon name="arrow" width="20" height="20"></svg-icon>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section ref="news" class="news latest">
        <div class="payoff">updates</div>
        <div class="inner">
          <h3 class="h5">Latest Updates and News</h3>
          <ul class="block-grid up3">
            <li>
              <article
                ref="newsarticle-1"
                class="newsarticle"
                @click="goToNewsArticle(1)"
              >
                <div class="inner">
                  <time datetime="2019-07-03">
                    <span class="day">03</span>
                    <span class="month">jul</span>
                  </time>
                  <div class="category">category</div>
                  <h3>
                    3 Myths About <br />
                    Decentralized Distributed <br />
                    Blockchain Network
                  </h3>
                  <nav>
                    <a href="#" class="more-inline2">
                      Read more
                    </a>
                  </nav>
                </div>
              </article>
            </li>
            <li>
              <article
                ref="newsarticle-2"
                class="newsarticle"
                @click="goToNewsArticle(2)"
              >
                <div class="inner">
                  <time datetime="2019-07-02">
                    <span class="day">02</span>
                    <span class="month">jul</span>
                  </time>
                  <div class="category">category</div>
                  <h3>
                    Fighting Fakes With Blockchain: How To Make
                    Anti-Counterfeiting...
                  </h3>
                  <nav>
                    <a href="#" class="more-inline2">
                      Read more
                    </a>
                  </nav>
                </div>
              </article>
            </li>
            <li>
              <article
                ref="newsarticle-3"
                class="newsarticle"
                @click="goToNewsArticle(3)"
              >
                <div class="inner">
                  <time datetime="2019-05-29">
                    <span class="day">29</span>
                    <span class="month">may</span>
                  </time>
                  <div class="category">category</div>
                  <h3>
                    How To Establish Protocols Between Parties With
                    <br />
                    Competing Interests
                  </h3>
                  <nav>
                    <a href="#" class="more-inline2">
                      Read more
                    </a>
                  </nav>
                </div>
              </article>
            </li>
          </ul>
          <nav>
            <nuxt-link :to="{ name: 'news' }" class="more-inline">
              Read more insights from Shift
            </nuxt-link>
          </nav>
        </div>
      </section>
    </div>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import { initializeBanner } from '../plugins/initialize-banner'
import Footer from '../components/footer'
import { animatePage, scrollTop } from '../plugins/animations'
import { initializeRoadmap } from '../plugins/modules/roadmap'
import { fakepreload, scrollHandler } from '../plugins/modules/viewport'
import { sameheight } from '../plugins/modules/sameheight'

export default {
  components: { CustomFooter: Footer },
  data() {
    const data = {
      activeUsps: false,
      activeVision: false,
      activeLockNLoad: false,
      slider: undefined,
      debounce: undefined
    }
    return data
  },
  computed: {
    hasActiveUsps() {
      return this.activeUsps ? 'hasactive' : ''
    },
    hasActiveVision() {
      return this.activeVision ? 'hasactive' : ''
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted() {
    fakepreload.init()
    sameheight.init()
    initializeBanner(this.$refs.line1, this.$refs.line2)
    this.slider = initializeRoadmap()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    this.slider.destroy()
  },
  methods: {
    getWords(word) {
      return word.split(' ')
    },
    checkIfLastWord(sentence, key) {
      return key !== this.getWords(sentence).length - 1
    },
    scrollTop() {
      scrollTop(this.$refs.mainContainer)
    },
    toggleActiveUsps(index) {
      this.activeUsps = this.activeUsps === index ? false : index
    },
    getActiveUspsClass(index) {
      return this.activeUsps === index ? 'active' : ''
    },
    closeActiveUsps() {
      this.activeUsps = false
    },
    toggleActiveVision(index) {
      this.activeVision = this.activeVision === index ? false : index
    },
    getActiveVisionClass(index) {
      return this.activeVision === index ? 'active' : ''
    },
    closeActiveVision() {
      this.activeVision = false
    },
    goToNewsArticle(id) {
      animatePage(this.$refs['newsarticle-' + id], () =>
        this.$router.push({ name: 'news' })
      )
    },
    handleScroll() {
      const elems = document.querySelectorAll(fakepreload.selectors)
      window.addEventListener('scroll', () => {
        if (this.debounce) {
          window.clearTimeout(this.debounce)
        }
        this.debounce = window.setTimeout(function() {
          scrollHandler(elems)
        }, 8)
      })
    }
  }
}
</script>

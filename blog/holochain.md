---
title: Holochain
tags: post
layout: layout-blogpost.njk
date: 2019-05-16
---
I'm very interested in the [Holochain project](https://holochain.org/ "Holochain website").

I'm interested from three different angles:

*   The fact it starts with **People First** rather than technology or data or economic value
*   The extent to which the project is based on **Learning from Nature**
*   The way the design of the project has **No Single View of Reality**

## People First

Holochain is structured around people (it is "agent-centric") rather than information ("data-centric).

Blockchain starts with data as its focus, and the challenge to present a consistent view of the reality of that data. It is a distributed ledger, where the transactions are stored across multiple computers to ensure their integrity and to provide a single record of the reality of those transactions. Blockchain evolved out of (partly libertarian) desire to take the question of personal trust out of the equation through use of secure and distributed technology. It has become clear that, at a technical level, the Blockchain model is unsustainable due to the increasingly heavy computation and thereby energy required to maintain a single record of reality across a growing number of transactions.

Holochain by contrast starts with people sharing information between themselves on the basis of certain ground rules. Holochain does not attempt to enforce a single shared state or consensus, and it does not attempt to take personal trust out of the equation.

## Learning from Nature

What is most interesting about Holochain is how much thought has gone into its underyling infrastructure, with much of that thought based on learning from the natural world. The [X-Road](https://en.wikipedia.org/wiki/X-Road "X-Road project (Wikipedia)") infrastructure, used by the Estonian govenment to securely share information between government departments, seems significant and progressive because it prioritises the protection of the citizen's data and allows the citizen some degree of control of their data. These good intentions are layered on top of a relatively conventional data exchange infrastruture. The difference with Holochain is that the good intentions are built into the design of the infrastructure.

Holochain works within an underyling infrastructure ([Ceptr](http://ceptr.org/ "Ceptr website")) inspired by the flow of information in the natural world. Holochain self-consciously uses the language of biological systems to explain its component parts. The system for establishing the ground rules for each Holochain app is called DNA. The system by which nodes in a Holochain network monitor for unwelcome activity is called the Immune System.

As Martin Banove notes in his [informative series of essays on Holochain](https://www.bitrates.com/news/p/holochain-analysis-1-the-philosophy-and-key-concepts-behind-holochain-and-ceptr), its infrastructure resembles a "rhizome" rather than a conventional tree structure. Now I never really understand what Deleuze and Guattari are on about, but I can just about follow Banove's reference to Deleuze and Guattari's celebration of the rhizome. What Deleuze and Guattari like about the rhizome is it's structural resistance to the "organizational structure of the root-tree system" that charts "causality along chronological lines" and looks" for the original source of 'things'" and heading "towards the pinnacle or conclusion of those 'things'. A rhizome "has no beginning or end; it is always in the middle, between things, interbeing, intermezzo" (see also the [Wikipedia article on the Rhizome](https://en.wikipedia.org/wiki/Rhizome_(philosophy)))

## No Single View of Reality  

Because of this rhizome-like structure, Holochain does not have the concept of a final true or complete view of reality. Like Torrent networks, you don't download information from a single source, you download information from multiple sources. This means that the "whole picture" of what a data transactions looks like is pieced together as required. One of the key building blocks Holochain uses is the [distributed hash table](https://en.wikipedia.org/wiki/Distributed_hash_table "Wikipedia artile on Distributed Hash Tables") (DHT). Nodes in a Holochain share responsibility to maintaining the accuracy of the information stored, but nodes only store parts of the information. [A post on the Rhizom blog](https://rhyzome.github.io/Ceptr-and-Holochain/) (Martin Banove again) puts it as follows:

there is no notion of network-wide consensus (which, by definition, doesn’t scale) bottlenecking the system and strictly limiting the kinds of flows that can enter and the ways in which it can be seen and translated between different contextual interpretations as useful information (and from the reference point of a given agent’s view of the network, or in other words, data is understood as relative to the circumstances at hand, not as an absolute, objective category)

**Find out more:**

[Ceptr](http://ceptr.org/ "The Ceptr website") (the infrastructure on which Holochain is based)

The [Holochain website](https://holochain.org/ "Holochain website")

[The Holo project](https://holo.host/) (a cloud-based hosting enterprise based on Holochain)


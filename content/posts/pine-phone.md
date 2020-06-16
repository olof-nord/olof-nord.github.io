---
title: "The PinePhone"
description: "My experiences with the PinePhone"
date: 2020-06-16T22:27:04+02:00
draft: false
---

### My experiences with the PinePhone

#### Background

I have long been looking forward to a smartphone alternative which does respect my privacy, and as well brings actual
GNU/Linux to the smartphone world.

My interest started back when I first heard of the
[Firefox OS](https://en.wikipedia.org/wiki/Firefox_OS), and something which I was reminded about on the last JSConf
Berlin, with the talk from Grann Means
[What happened to my JavaScript phone?](https://2019.jsconf.eu/garann-means/what-happened-to-my-javascript-phone.html)    

Having exitedly pre-ordered a Purism [Librem 5](https://puri.sm/products/librem-5/) in July 2019, (still waiting),
I slowly realised I have to look around for other options.

Well, when I first read about the PinePhone through Twitter, I did not really believe it - the price is approx 1/3 of - 
the Librem 5, more like a keyboard or a mouse for comparision, I took the chance.

Well, a few months later, after ome initial troubles with the tax authorities (the device has no european CE
certification), the phone arrives.

I unpack, turn the device on and is welcomed by a demo screen, used for testing the touchscreen. The phone as it
arrives, has as much functionality as when you buy a new SSD or a CPU. It comes without an OS pre-installed.
Why am I surprised? After all Pine64 did warn me both once and twice, this is not ready for end-users.

#### Ubuntu Touch (UBPorts)

After some initial research, I decided to install [Ubuntu Touch](https://ubuntu-touch.io/), as I understood that was the
most mature GNU/Linux smartphone option available.

Well, the Ubuntu Touch Community [port](https://gitlab.com/ubports/community-ports/pinephone/) for the PinePhone is in
its very (very) early stages.

The setup reminds me of the days where Ubuntu would only support a few selected WiFi network cards.
Just this time, it is not wifi, but phone calls. And without phone calls, the `phone` part in smartphone gets a bit lost.
I have yet to do a successful call. Successful meaning I hear someone, and someone else hears me.
 
What adds to the trouble is that there is currently no app ecosystem available:
Signal, an app I heavily rely on to communicate with friends and family, is not available. The Signal compatible
messaging app [Axolotl](https://open-store.io/app/textsecure.nanuc) did allow me to both send and receive messages,
but lacks many of the standard features offered by Android Signal.

There is a fully integrated app store, [Open Store](https://open-store.io/), but without users there are, of course,
fewer apps.

Quickly realising what that the "Pinephone is maybe not your daily driver yet." sentence from the PinePhone UBPorts
[readme](https://gitlab.com/ubports/community-ports/pinephone/#what-works-what-doesnt) means, I decide to (at least)
use the phone as my alarm to wake up in the morning. That, unfortunately also turns out was not possible: in my naivety,
I assumed that the device had a battery time lasting from late evening to the morning.

Nope. The PinePhone, with UBPorts, has a battery life equivalent of a standard laptop - say three, four hours.
This should, according to a forum [post](https://forum.pine64.org/showthread.php?tid=9957) in the Pine64 official
UBPorts forum section, be resolved by now. I have not yet tried this out though.

What I successfully managed to do, was to both send and receive a text and a Signal message. I could also use the touch
screen, and WiFi worked most of the time. Using the camera and making calls did not.

To replace my current phone, I have some higher demands. 

I do however really support the project, and see its potential - it was refreshing to use its swipe-based UI where most
actions are swipes starting from the edges of the phone. Using a shell, and having full control and access to the device,
is also something which makes absolute sense to me once available. The docking mode, where the smartphone is converging
to a fully-fledged (Ubuntu) desktop system, is also something which really interests me.

Up next is trying out the [PostmarketOS](https://wiki.postmarketos.org/wiki/PINE64_PinePhone_(pine64-pinephone))
with the [phosh](https://github.com/agx/phosh) GNOME mobile desktop interface, the same setup which the guys at
Librem are working on. From what I can read, it might even support phone calls _and_ camera. (early adopter pain, yessir)

For now, I am back to waiting for the Librem 5.

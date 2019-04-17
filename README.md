# Reference Application: Mortgage Repackaging

## Introduction
A mortgage-backed security (MBS) is a collection (pool) of mortgages that are securitized or
packaged as a security. As an MBS ages, the underlying mortgages get paid down or are
removed from the pool because of, for example, default or refinancing. Rolling multiple MBS
pools into one larger one can substantially reduce risk, as the default of a single loan will have a
smaller effect on the whole.

This demo executes the process of “repackaging” an MBS to reduce risk by consolidating
several pools of loans into a single security.

*Note*: This demo is designed to show successful processing of a claim without exceptions or error conditions. A full production implementation would include additional features, handle errors and exceptions, and incorporate appropriate security controls.

## Getting Started

### Installing

#### Prerequisites

Be sure you have the following installed:
* DAML SDK
* Docker
* Make
* node v8.12.0
* yarn

Shortcut for `nvm`[^1] users:
```bash
nvm install v8.12.0
nvm use v8.12.0
npm install -g yarn
```
[^1]: nvm https://github.com/creationix/nvm

## Running the Application

### Starting the App

**1.** Run da sandbox in docker and envoy proxy with `make start`.

**2.** Populate initial data with `make populate`.

**3.** Run react app with `make devstart`.

### Stopping the App

**1.** From the react app (run by a yarn server), one can exist by pressing CTRL+C

**2.** The application can be stopped by executing `make stop`.

### Resetting the Prototype

Reset the application by following these steps:

**1.** Stop the App by following the steps in Stopping the App section.

**2.** Start the App by following the steps in Starting the App section.


This application has a full browser-based user interface. Refer to the included .pdf file for instructions on how to use that interface to run the application.

[Digital Asset Mortgage Backed Securities - User Guide](https://github.com/DACH-NY/ex-mortgage-repackaging/blob/master/Digital%20Asset%20Mortgage%20Backed%20Securities%20-%20User%20Guide.pdf)


CONFIDENTIAL © 2019 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
Any unauthorized use, duplication or distribution is strictly prohibited.

[![CircleCI](https://circleci.com/gh/digital-asset/ex-mortgage-repackaging.svg?style=svg)](https://circleci.com/gh/digital-asset/ex-mortgage-repackaging)
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

**Disclaimer:** This reference application is intended to demonstrate the capabilities of the DAML. You are recommended to consider other non-functional aspects, like security, resiliency, recoverability, etc prior to production use.

#### Prerequisites

Be sure you have the following installed:
* DAML SDK
* Docker

#### Build with Daml Assistant

Type:

```
daml build
```
**Note:** If you change the DAML models locally, you need to re-run this command before starting the application.


## Running the Application

### Starting the App
There are two options:

#### Option 1: Starting the App with Docker

1.  Make sure you have built the application with Daml Assistant (see Build with Daml Assistant step).

2.  Type:

```
docker-compose up --build
```

3.  Open UI in a new browser tab with http://localhost:7500 in a browser.

#### Option 2: Starting App in Stand-Alone Mode

1.  Make sure you have built the application with Maven (see Build with Maven step).

2.  Start the DA Sandbox and the Navigator.
Type:

```
daml start
```
   The Navigator automatically opens in a new browser tab.

### Stopping the App

#### Stopping Dockerized Run
1.  Close the browser tab.

2.  Stop the Docker containers by pressing **Ctrl+C**.

#### Stopping Stand-Alone Run
1.  Close the browser tab.

2.  Stop `daml start` by pressing **Ctrl+C**.

### Resetting the Prototype

Reset the application by following these steps:

1.  Stop the App by following the steps in Stopping the App section.

2.  Start the App in Docker or stand-alone by following the steps in the relevant section.

This application has a full browser-based user interface. Refer to the included .pdf file for instructions on how to use that interface to run the application.

[Digital Asset Mortgage Backed Securities - User Guide](https://github.com/DACH-NY/ex-mortgage-repackaging/blob/master/Digital%20Asset%20Mortgage%20Backed%20Securities%20-%20User%20Guide.pdf)


CONFIDENTIAL © 2019 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
Any unauthorized use, duplication or distribution is strictly prohibited.

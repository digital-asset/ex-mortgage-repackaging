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
- [DAML SDK](https://docs.daml.com/)
- Docker

#### Build

Type:
```shell
daml build
```

**Note:** If you change the DAML models locally, you need to re-run this command before starting the application.

### Starting the App

**Note:** Make sure you have built the application (see: [Build](#build)).

There are two options:

#### Option 1: Start App with Docker

1. Type:
    ```shell
    docker-compose up --build
    ```
2. Open UI with a browser at http://localhost:7500.

**Note:** If you run on Windows or MacOS, you may need to increase the memory limit of the Docker Engine in the preferences if you encounter a `java.lang.OutOfMemoryError: GC overhead limit exceeded` error.

#### Option 2: Start App in Standalone

1. Start the DAML Sandbox and Navigator. Type:
    ```shell
    daml start
    ```
    The navigator will automatically open in new browser tab at http://localhost:7500.

### Stopping the App

#### Stopping Dockerized Run
1. Stop the Docker containers by pressing **Ctrl+C**. (Alternatively, you can also stop it by typing `docker-compose down`.)

#### Stopping Standalone Run
1. Stop the Sandbox and the Navigator by pressing **Ctrl+C** in the DAML assistant.

### Resetting the Prototype

Reset the application by following these steps:
1.  Stop the app by following the steps in [Stopping the App](#stopping-the-app) section.
2.  Start the app in [Docker](#using-docker) or [Standalone](#standalone-mode) by following the steps in the relevant section.


## User Guide

This application has a full browser-based user interface. Refer to the included .pdf file for instructions on how to use that interface to run the application.

[Digital Asset Mortgage Backed Securities - User Guide](https://github.com/DACH-NY/ex-mortgage-repackaging/blob/master/Digital%20Asset%20Mortgage%20Backed%20Securities%20-%20User%20Guide.pdf)


CONFIDENTIAL © 2019 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
Any unauthorized use, duplication or distribution is strictly prohibited.

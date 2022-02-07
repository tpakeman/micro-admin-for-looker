// Copyright 2021 Google LLC

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     https://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, { useContext, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { ComponentsProvider } from '@looker/components-providers'
import { Flex, Heading } from '@looker/components'
import styled from 'styled-components'
import { AppContext, AppContextProvider } from './Context'
import { Flows } from './components/Flows'

const TopMenu = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3em;
  background-color: #262d33;
  justify-content: space-between;
  gap: 3rem;
  align-items: center;
  padding: 1.5rem
`

const MainContainer = styled(Flex)`
  height: calc(100vh - 3rem);
  position: absolute;
  top: 3rem;
  padding: 1rem;
`


const AppInner = () => {
  return (
    <Flex flexDirection='column'>
      <TopMenu>
        <Heading as='h1' style={{color: 'white'}}>Home</Heading>
        <Heading as='h1' style={{color: 'white'}}>Login</Heading>
      </TopMenu>
      <MainContainer>
        <Flows/>
      </MainContainer>
    </Flex>
  )}

export const App = hot(() => {
  return (
      <ComponentsProvider>
        <AppInner />
            <AppContextProvider>
              <AppInner />
            </AppContextProvider>
        </ComponentsProvider>
    )
  })
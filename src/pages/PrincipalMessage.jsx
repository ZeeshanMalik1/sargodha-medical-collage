import React from 'react'
import Principal from '../components/Principal'
import Footer from '../components/Footer'
import AdditionalPrincipalmsg from '../components/AdditionalPrincipalmsg';
import Header from '../components/Header';
function PrincipalMessage() {
  return (
    <>
    <Header/>
    <Principal/>
    <AdditionalPrincipalmsg/>
    <Footer/>
    </>
  )
}

export default PrincipalMessage;
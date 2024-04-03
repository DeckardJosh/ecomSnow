import React from 'react';
import Navbar from '../../comps/Navbar/Navbar';
import Footer from '../../comps/Footer';
import AdminProductsList from '../../comps/AdminProductsList';

export default function AdminPage() {
  return (
    <>
        <Navbar />
        <section>
          <AdminProductsList />
        </section>
        <Footer />
    </>
  );
};

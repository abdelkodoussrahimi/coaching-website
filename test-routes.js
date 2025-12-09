#!/usr/bin/env node

/**
 * Script to test which routes exist and which are missing
 */

const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src', 'app');
const locales = ['en', 'fr', 'ar'];

// Routes defined in Navbar
const expectedRoutes = [
  '/',
  '/about',
  '/services',
  '/results',
  '/testimonials',
  '/programs',
  '/booking',
  '/contact',
];

console.log('🔍 Testing Routes...\n');
console.log('='.repeat(60));

// Check root routes
console.log('\n📁 Root Routes:');
const rootPageExists = fs.existsSync(path.join(appDir, 'page.tsx'));
console.log(`  / (root) - ${rootPageExists ? '✅ EXISTS' : '❌ MISSING'}`);

// Check [locale] routes
console.log('\n📁 Locale Routes:');
const localeDir = path.join(appDir, '[locale]');
const localePageExists = fs.existsSync(path.join(localeDir, 'page.tsx'));
console.log(`  /[locale]/ (home) - ${localePageExists ? '✅ EXISTS' : '❌ MISSING'}`);

// Check [locale]/services
const servicesPageExists = fs.existsSync(path.join(localeDir, 'services', 'page.tsx'));
console.log(`  /[locale]/services - ${servicesPageExists ? '✅ EXISTS' : '❌ MISSING'}`);

// Check all routes
console.log('\n📁 All Routes:');
const existingRoutes = [];
const missingRoutes = [];

expectedRoutes.forEach(route => {
  if (route === '/') {
    return; // Root already checked
  }
  
  const routePath = path.join(localeDir, route.slice(1), 'page.tsx');
  const exists = fs.existsSync(routePath);
  
  if (exists) {
    existingRoutes.push(route);
    console.log(`  ✅ /[locale]${route} - EXISTS`);
  } else {
    missingRoutes.push(route);
    console.log(`  ❌ /[locale]${route} - MISSING`);
  }
});

console.log('\n' + '='.repeat(60));
console.log('\n📊 Summary:');
console.log(`  ✅ Existing routes: ${existingRoutes.length + 1} (including root)`);
console.log(`  ❌ Missing routes: ${missingRoutes.length}`);

if (missingRoutes.length > 0) {
  console.log('\n⚠️  Missing Routes List:');
  missingRoutes.forEach(route => {
    console.log(`     - /[locale]${route}`);
  });
  
  console.log('\n💡 To fix, create these files:');
  missingRoutes.forEach(route => {
    const filePath = path.join(localeDir, route.slice(1), 'page.tsx');
    console.log(`     ${filePath}`);
  });
}

console.log('\n✅ Test completed!\n');


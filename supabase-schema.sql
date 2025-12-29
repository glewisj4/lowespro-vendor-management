-- LowesPro Vendor Management Database Schema

-- Vendors Table
CREATE TABLE IF NOT EXISTS vendors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  contact_name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(50),
  address TEXT,
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sales Representatives Table
CREATE TABLE IF NOT EXISTS sales_reps (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(50),
  territory VARCHAR(255),
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Pro Customers Table
CREATE TABLE IF NOT EXISTS pro_customers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name VARCHAR(255) NOT NULL,
  contact_name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(50),
  address TEXT,
  account_number VARCHAR(100),
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Brands Table
CREATE TABLE IF NOT EXISTS brands (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  logo_url VARCHAR(500),
  website VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Categories Table
CREATE TABLE IF NOT EXISTS categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  parent_id UUID REFERENCES categories(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Services Table
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2),
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample data
INSERT INTO vendors (name, contact_name, email, phone) VALUES
('Acme Building Supplies', 'John Doe', 'john@acme.com', '555-0101'),
('Pro Tools Inc', 'Jane Smith', 'jane@protools.com', '555-0102'),
('Quality Materials LLC', 'Bob Johnson', 'bob@quality.com', '555-0103')
ON CONFLICT DO NOTHING;

INSERT INTO sales_reps (name, email, phone, territory) VALUES
('Mike Williams', 'mike@lowespro.com', '555-0201', 'Northeast'),
('Sarah Davis', 'sarah@lowespro.com', '555-0202', 'Southeast'),
('Tom Brown', 'tom@lowespro.com', '555-0203', 'West')
ON CONFLICT DO NOTHING;

INSERT INTO pro_customers (company_name, contact_name, email, phone, account_number) VALUES
('ABC Construction', 'Robert Lee', 'robert@abc.com', '555-0301', 'PRO-001'),
('XYZ Contractors', 'Emily White', 'emily@xyz.com', '555-0302', 'PRO-002'),
('BuildRight LLC', 'David Green', 'david@buildright.com', '555-0303', 'PRO-003')
ON CONFLICT DO NOTHING;

INSERT INTO brands (name, description) VALUES
('DeWalt', 'Professional power tools and hand tools'),
('Milwaukee', 'Heavy-duty power tools'),
('Bosch', 'Innovative tools and technology')
ON CONFLICT DO NOTHING;

INSERT INTO categories (name, description) VALUES
('Power Tools', 'Electric and battery-powered tools'),
('Hand Tools', 'Manual tools and equipment'),
('Building Materials', 'Construction materials and supplies')
ON CONFLICT DO NOTHING;

INSERT INTO services (name, description, price) VALUES
('Tool Repair', 'Professional tool repair service', 49.99),
('Consultation', 'Expert consultation for projects', 99.99),
('Delivery', 'Same-day delivery service', 25.00)
ON CONFLICT DO NOTHING;

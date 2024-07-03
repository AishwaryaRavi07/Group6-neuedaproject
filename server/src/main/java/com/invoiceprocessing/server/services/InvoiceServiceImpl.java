package com.invoiceprocessing.server.services;

import com.invoiceprocessing.server.dao.InvoiceDao;
import com.invoiceprocessing.server.model.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvoiceServiceImpl implements InvoiceService{

    @Autowired
    InvoiceDao invoiceDao;

    @Override
    public Invoice addInvoice(Invoice invoice) {
        invoiceDao.save(invoice);
        return invoice;
    }

    @Override
    public List<Invoice> getInvoices(int userId) {
        return invoiceDao.findByUserId(userId);
    }

    @Override
    public boolean deleteInvoice(long id) {
        try {
            Invoice invoice = invoiceDao.findById(id).get();
            invoiceDao.delete(invoice);
            return true;
        } catch (Error e){
            System.out.println("Error occurred while deleting: "+e.toString());
            return false;
        }
    }
}

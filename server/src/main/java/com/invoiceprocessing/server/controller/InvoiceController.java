package com.invoiceprocessing.server.controller;

import com.invoiceprocessing.server.model.Invoice;
import com.invoiceprocessing.server.response.GeneralResponse;
import com.invoiceprocessing.server.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class InvoiceController {

    @Autowired
    InvoiceService invoiceService;

    @PostMapping("/invoice")
    public ResponseEntity<?> addInvoice(@RequestBody Invoice invoice) {
        System.out.println("heheh: "+invoice);
        Invoice inv = this.invoiceService.addInvoice(invoice);
        if(inv!=null)
            return ResponseEntity.ok(inv);
        else
            return ResponseEntity.badRequest().body(new GeneralResponse("Failed to add invoice" , false));
    }

    @GetMapping("/invoice")
    public List<Invoice> getInvoices() {
        return this.invoiceService.getInvoices();
    }

    @DeleteMapping("/invoice/{invoiceId}")
    public Invoice deleteInvoice(@PathVariable String invoiceId) {
        return this.invoiceService.deleteInvoice(Long.parseLong(invoiceId));
    }
}

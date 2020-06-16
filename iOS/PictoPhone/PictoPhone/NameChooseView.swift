//
//  ViewController.swift
//  PictoPhone
//
//  Created by Chris Rudel on 6/16/20.
//  Copyright © 2020 Chris Rudel. All rights reserved.
//

import UIKit

class NameChooseView: UIViewController, UITextFieldDelegate {
    @IBOutlet weak var displayName: UITextField!
    
    @IBAction func displayNameFinishedEditing(_ sender: UITextField) {
        print(displayName.text ?? "")
        performSegue(withIdentifier: "lobby", sender: self)
    }
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        self.displayName.resignFirstResponder()
        return true
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "lobby"{
            let vc = segue.destination as! MessagesView
            vc.name = displayName.text ?? ""
        }
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.displayName.delegate = self
        // Do any additional setup after loading the view.
    }
}


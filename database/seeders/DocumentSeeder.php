<?php

namespace Database\Seeders;

use App\Models\Document;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DocumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $documents = [
            [
                'registration_id' => 1,
                'document_type' => 'kk',
                'file_path' => 'path/to/document1.pdf',
            ],
            [
                'registration_id' => 1,
                'document_type' => 'ktp',
                'file_path' => 'path/to/document1.pdf',
            ],
            [
                'registration_id' => 2,
                'document_type' => 'ktp',
                'file_path' => 'path/to/document2.pdf',
            ],
        ];

        foreach ($documents as $document) {
            Document::create($document);
        }
    }
}
